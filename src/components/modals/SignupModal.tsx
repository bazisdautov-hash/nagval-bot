import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

type Props = { open: boolean; onOpenChange: (open: boolean) => void; mode: 'invest' | 'business' }

export function SignupModal({ open, onOpenChange, mode }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <h3 className="text-2xl font-semibold text-slate-900">{mode === 'invest' ? 'Создать аккаунт' : 'Оставить заявку для бизнеса'}</h3>
        <p className="mt-2 text-sm text-slate-600">Менеджер свяжется с вами и подберёт оптимальный сценарий подключения.</p>
        <div className="mt-6 space-y-3">
          <Input placeholder="Имя" />
          <Input placeholder="Телефон или Email" />
          <Button
            className="w-full"
            onClick={() => {
              toast.success('Заявка отправлена')
              onOpenChange(false)
            }}
          >
            Отправить
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
