import { motion } from 'framer-motion'
import { Banknote, CircleCheck, Wallet } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { fadeInUp } from '@/lib/utils'

const steps = [
  { icon: Wallet, title: '1. Создайте профиль', text: 'Заполните контактные данные и выберите подходящий пул.' },
  { icon: Banknote, title: '2. Разместите капитал', text: 'Стартуйте с комфортного чека и отслеживайте статус в кабинете.' },
  { icon: CircleCheck, title: '3. Получайте отчёты и выплаты', text: 'Следите за динамикой и отправляйте запросы на выплаты при необходимости.' },
]

export function How() {
  return (
    <section id="how" className="section-wrap py-14 lg:py-20">
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-semibold sm:text-4xl">
        Как это работает
      </motion.h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map(({ icon: Icon, title, text }, idx) => (
          <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: idx * 0.07 }}>
            <Card className="h-full p-6">
              <Icon className="h-6 w-6 text-slate-900" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
