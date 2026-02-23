import { FormEvent } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function Contacts() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    toast.success('Спасибо! Мы скоро свяжемся с вами.')
  }

  return (
    <section id="contacts" className="section-wrap py-14 lg:py-20">
      <Card className="p-6 sm:p-8">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Контакты</h2>
        <p className="mt-2 text-slate-600">Оставьте сообщение, чтобы обсудить инвестиции или запуск пула для бизнеса.</p>
        <form className="mt-6 grid gap-3 sm:grid-cols-2" onSubmit={onSubmit}>
          <Input placeholder="Имя" required />
          <Input placeholder="Телефон или Email" required />
          <textarea className="sm:col-span-2 min-h-32 rounded-2xl border border-slate-200 p-4 text-sm outline-none focus:border-slate-300 focus:ring-2 focus:ring-slate-200" placeholder="Сообщение" required />
          <Button className="sm:col-span-2 sm:w-fit" type="submit">
            Отправить сообщение
          </Button>
        </form>
      </Card>
    </section>
  )
}
