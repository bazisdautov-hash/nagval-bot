import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { fadeInUp } from '@/lib/utils'

export function Trust() {
  return (
    <section id="trust" className="section-wrap py-14 lg:py-20">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-semibold sm:text-4xl">
        Доверие и безопасность
      </motion.h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <ul className="space-y-3 text-sm text-slate-700">
            <li>✓ Резерв на ремонт и простой техники</li>
            <li>✓ Учёт активов и контроль загрузки</li>
            <li>✓ Ручные выплаты по запросу инвестора</li>
            <li>✓ Регулярная отчётность по ключевым показателям</li>
          </ul>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-slate-500">Пример отчёта</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              ['Выручка', '1 240 000 ₽'],
              ['Расходы', '540 000 ₽'],
              ['Резерв', '120 000 ₽'],
              ['Чистая прибыль', '580 000 ₽'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">{label}</p>
                <p className="mt-1 font-semibold text-slate-900">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">* пример</p>
        </Card>
      </div>
    </section>
  )
}
