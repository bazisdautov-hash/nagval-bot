import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Pool } from '@/data/pools'

type Props = { open: boolean; onOpenChange: (open: boolean) => void; pool: Pool | null }

export function PoolDetailsModal({ open, onOpenChange, pool }: Props) {
  if (!pool) return null
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <h3 className="text-2xl font-semibold text-slate-900">Детали пула: {pool.title}</h3>
        <p className="mt-2 text-sm text-slate-600">Экономика пула и отчётные метрики (демо).</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-4">
          {['Выручка', 'Расходы', 'Резерв', 'Чистая прибыль'].map((item, i) => (
            <div key={item} className="rounded-2xl bg-slate-50 p-3">
              <p className="text-xs text-slate-500">{item}</p>
              <p className="mt-1 font-semibold text-slate-900">{(1200000 - i * 210000).toLocaleString('ru-RU')} ₽</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-slate-100 p-4">
          <p className="mb-2 text-sm text-slate-500">Мини-график загрузки актива</p>
          <div className="flex h-20 items-end gap-2">
            {[35, 44, 52, 48, 66, 74, 70].map((v) => (
              <div key={v} className="flex-1 rounded-t bg-slate-300" style={{ height: `${v}%` }} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
