import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { fadeInUp } from '@/lib/utils'

type Props = { mode: 'invest' | 'business'; onPrimaryClick: () => void; onSecondaryClick: () => void }

export function Hero({ mode, onPrimaryClick, onSecondaryClick }: Props) {
  const isInvest = mode === 'invest'
  return (
    <section className="section-wrap grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.5 }}>
        <div className="flex flex-wrap gap-2">
          {['Реальные активы', 'Прозрачность', 'Выплаты по запросу', 'Реинвест'].map((pill) => (
            <Badge key={pill}>{pill}</Badge>
          ))}
        </div>
        <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
          {isInvest ? 'Инвестируйте в реальные инструменты, понятные каждому.' : 'Масштабируйте бизнес через пуловую модель финансирования.'}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-600">
          {isInvest
            ? 'ToolInvest соединяет инвесторов с операционной экономикой арендных активов. Доход может зависеть от загрузки и рыночной динамики.'
            : 'ToolInvest помогает привлекать капитал под реальные активы с прозрачной отчётностью и понятной структурой выплат.'}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" onClick={onPrimaryClick}>
            {isInvest ? 'Создать аккаунт' : 'Оставить заявку'}
          </Button>
          <Button size="lg" variant="outline" onClick={onSecondaryClick}>
            {isInvest ? 'Рассчитать доход' : 'Посмотреть условия'} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ['12 500+', 'инвесторов'],
            ['1.8 млрд ₽', 'активов'],
            ['420 млн ₽', 'выплачено'],
            ['16–28%', 'ROI диапазон'],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-xl font-semibold text-slate-900">{value}</p>
              <p className="text-xs text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.5, delay: 0.1 }}>
        <Card className="p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Quick start</p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900">{isInvest ? 'Начните за 2 минуты' : 'Запустите пул с командой ToolInvest'}</h3>
          <div className="mt-6 space-y-3">
            <Input placeholder="Телефон или Email" />
            <Button className="w-full">{isInvest ? 'Начать инвестировать' : 'Получить консультацию'}</Button>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li>• Быстрая проверка профиля</li>
            <li>• Понятные условия входа</li>
            <li>• Поддержка менеджера на каждом шаге</li>
          </ul>
        </Card>
      </motion.div>
    </section>
  )
}
