type ProgressProps = { value: number }

export function Progress({ value }: ProgressProps) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
      <div className="h-full rounded-full bg-slate-900 transition-all" style={{ width: `${value}%` }} />
    </div>
  )
}
