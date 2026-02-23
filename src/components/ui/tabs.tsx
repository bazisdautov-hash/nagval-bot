import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type TabsProps = { value: string; onValueChange: (value: string) => void; children: ReactNode }

type TriggerProps = { value: string; current: string; onClick: (value: string) => void; children: ReactNode }

export function Tabs({ children }: TabsProps) {
  return <div>{children}</div>
}

export function TabsList({ children }: { children: ReactNode }) {
  return <div className="inline-flex rounded-full border border-slate-200 bg-white p-1">{children}</div>
}

export function TabsTrigger({ value, current, onClick, children }: TriggerProps) {
  return (
    <button
      onClick={() => onClick(value)}
      className={cn(
        'rounded-full px-4 py-2 text-sm font-medium transition',
        current === value ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900',
      )}
    >
      {children}
    </button>
  )
}
