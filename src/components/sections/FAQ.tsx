import { motion } from 'framer-motion'
import { Accordion } from '@/components/ui/accordion'
import { fadeInUp } from '@/lib/utils'

const items = [
  { id: '1', question: 'Это банковский вклад?', answer: 'Нет, это инвестиционный продукт с рыночными рисками и операционной моделью на базе реальных активов.' },
  { id: '2', question: 'Какая доходность ожидается?', answer: 'Указывается диапазон, который может зависеть от сезона, загрузки и структуры расходов.' },
  { id: '3', question: 'Можно ли вывести средства раньше?', answer: 'Доступен механизм ручного запроса выплаты согласно правилам конкретного пула.' },
  { id: '4', question: 'Как проверять показатели?', answer: 'В личном кабинете публикуются отчётные карточки: выручка, расходы, резерв и чистая прибыль.' },
  { id: '5', question: 'Есть ли минимальный порог входа?', answer: 'Да, минимальный тикет зависит от выбранного пула и указывается в карточке пула.' },
  { id: '6', question: 'Подходит ли сервис для бизнеса?', answer: 'Да, в режиме “Для бизнеса” вы можете подать заявку на запуск собственного пула.' },
]

export function FAQSection() {
  return (
    <section id="faq" className="section-wrap py-14 lg:py-20">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-8 text-3xl font-semibold sm:text-4xl">
        FAQ
      </motion.h2>
      <Accordion items={items} />
    </section>
  )
}
