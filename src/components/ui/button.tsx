import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'secondary'
  size?: 'default' | 'sm' | 'lg'
}

export function Button({ className, variant = 'default', size = 'default', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:pointer-events-none disabled:opacity-50',
        variant === 'default' && 'bg-slate-900 text-white hover:bg-slate-800',
        variant === 'outline' && 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50',
        variant === 'secondary' && 'bg-slate-100 text-slate-900 hover:bg-slate-200',
        size === 'default' && 'h-11 px-6 text-sm',
        size === 'sm' && 'h-9 px-4 text-sm',
        size === 'lg' && 'h-12 px-8 text-base',
        className,
      )}
      {...props}
    />
  )
}
