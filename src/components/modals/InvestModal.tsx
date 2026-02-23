import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pool } from '@/data/pools'
import { toast } from 'sonner'

type Props = { open: boolean; onOpenChange: (open: boolean) => void; pool: Pool | null }

export function InvestModal({ open, onOpenChange, pool }: Props) {
  if (!pool) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <h3 className="text-2xl font-semibold text-slate-900">Инвестировать в пул</h3>
        <p className="mt-2 text-sm text-slate-600">{pool.title} · вход {pool.minTicket}</p>
        <div className="mt-6 space-y-3">
          <Input placeholder="Ваш контакт" />
          <Input placeholder="Сумма инвестирования" />
          <Button
            className="w-full"
            onClick={() => {
              toast.success('Заявка принята. Мы подтвердим условия.')
              onOpenChange(false)
            }}
          >
            Отправить заявку
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
