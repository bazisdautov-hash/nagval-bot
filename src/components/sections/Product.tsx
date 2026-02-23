import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { fadeInUp } from '@/lib/utils'

const cards = [
  ['Прозрачность', 'Показываем ключевые метрики пулов: выручка, расходы, резерв и динамика загрузки.'],
  ['Реинвест', 'Гибко направляйте выплаты обратно в активы для потенциального ускорения роста капитала.'],
  ['Income Boost', 'Дополнительные сценарии дохода на базе сезонного спроса и операционной оптимизации.'],
  ['Выплаты по запросу', 'Ручной запрос на вывод в личном кабинете с понятной процедурой согласования.'],
]

export function Product() {
  return (
    <section id="product" className="section-wrap py-14 lg:py-20">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-semibold text-slate-950 sm:text-4xl">
        Продукт, где финансы и реальная экономика работают вместе
      </motion.h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {cards.map(([title, text], idx) => (
          <motion.div key={title} whileHover={{ y: -4 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: idx * 0.05 }}>
            <Card className="h-full p-6">
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-slate-600">{text}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
