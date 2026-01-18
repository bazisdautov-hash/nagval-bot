import os
import asyncio
from aiogram import Bot, Dispatcher, F
from aiogram.types import Message
from aiogram.filters import Command
from openai import OpenAI

BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
OPENAI_KEY = os.getenv("OPENAI_API_KEY")

CHANNEL_ID = "@nagval72"
DISCUSSION_CHAT_ID = -1003509807568

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()
client = OpenAI(api_key=OPENAI_KEY)

SYSTEM_PROMPT = """
Ты администратор Telegram-канала «Мысли обычного мужика».
Пиши по-русски.
Тон: спокойный, умный, без пафоса.
Короткие ответы: 1–3 предложения.
"""

def ask_gpt(text):
    r = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": text}
        ],
        max_tokens=200
    )
    return r.choices[0].message.content.strip()

@dp.message(Command("post"))
async def post_handler(message: Message):
    text = message.text.replace("/post", "").strip()
    if not text:
        await message.answer("Формат: /post текст")
        return
    await bot.send_message(CHANNEL_ID, text)
    await message.answer("Готово, опубликовал в канал.")

@dp.message(F.chat.id == DISCUSSION_CHAT_ID)
async def comment_handler(message: Message):
    if not message.reply_to_message:
        return
    if not message.text:
        return
    reply = await asyncio.to_thread(ask_gpt, message.text)
    await message.reply(reply)

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
