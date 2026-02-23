import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { fadeInUp } from '@/lib/utils'

const reviews = [
  ['Андрей, инженер', 'Нравится прозрачность. Вижу метрики по пулу и понимаю, откуда формируется результат.'],
  ['Марина, маркетолог', 'Удобный личный кабинет и понятный процесс заявки на выплату.'],
  ['Илья, предприниматель', 'Подключил бизнес-направление: команда помогла структурировать пул и отчётность.'],
  ['Светлана, финансист', 'Минимум шума, максимум сути. Хороший продукт для долгого горизонта.'],
]

export function Testimonials() {
  return (
    <section className="section-wrap py-14 lg:py-20">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-semibold sm:text-4xl">
        Социальное доказательство
      </motion.h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {reviews.map(([author, text], idx) => (
          <motion.div key={author} whileHover={{ y: -4 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: idx * 0.05 }}>
            <Card className="h-full p-6">
              <p className="text-sm text-slate-600">“{text}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{author}</p>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 rounded-3xl border border-slate-100 bg-slate-50 p-5 text-center text-sm text-slate-500">Логотипы партнёров: TOOLCO · RENTPRO · CITYBUILD · NORDEX · METRICA</div>
    </section>
  )
}
