import { useMemo, useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type Props = { open: boolean; onOpenChange: (open: boolean) => void; mode: 'invest' | 'business' }

export function CalculatorModal({ open, onOpenChange, mode }: Props) {
  const [amount, setAmount] = useState(100000)
  const [months, setMonths] = useState(12)

  const projection = useMemo(() => {
    const annual = mode === 'invest' ? 0.2 : 0.16
    return Math.round(amount * (1 + (annual * months) / 12))
  }, [amount, months, mode])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <h3 className="text-2xl font-semibold text-slate-900">{mode === 'invest' ? 'Калькулятор диапазона дохода' : 'Оценка условий для бизнеса'}</h3>
        <p className="mt-2 text-sm text-slate-600">Расчёт демонстрационный: доход может зависеть от загрузки активов, сезона и операционных расходов.</p>
        <div className="mt-6 space-y-4">
          <div>
            <p className="mb-2 text-sm text-slate-500">Сумма, ₽</p>
            <Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
          </div>
          <div>
            <p className="mb-2 text-sm text-slate-500">Срок, месяцев</p>
            <Input type="number" value={months} onChange={(e) => setMonths(Number(e.target.value))} />
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Оценка результата</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">≈ {projection.toLocaleString('ru-RU')} ₽</p>
            <p className="mt-1 text-xs text-slate-500">Диапазон доходности не является гарантией.</p>
          </div>
          <Button className="w-full" onClick={() => onOpenChange(false)}>
            Понятно
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
