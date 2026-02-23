import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export type AccordionItemType = { id: string; question: string; answer: string }

export function Accordion({ items }: { items: AccordionItemType[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const active = open === item.id
        return (
          <div key={item.id} className="rounded-2xl border border-slate-100 bg-white p-4">
            <button className="flex w-full items-center justify-between gap-4 text-left" onClick={() => setOpen(active ? null : item.id)}>
              <span className="font-medium text-slate-900">{item.question}</span>
              <ChevronDown className={cn('h-4 w-4 text-slate-500 transition-transform', active && 'rotate-180')} />
            </button>
            {active && <p className="pt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>}
          </div>
        )
      })}
    </div>
  )
}
