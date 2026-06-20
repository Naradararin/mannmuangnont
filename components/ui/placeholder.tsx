import { cn } from '@/lib/utils'

export function Placeholder({
  className,
  label,
}: {
  className?: string
  label?: string
}) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-surface to-sage/20',
        className
      )}
    >
      {label && (
        <span className="font-dm-sans text-[11px] uppercase tracking-[0.2em] text-sage/70">
          {label}
        </span>
      )}
    </div>
  )
}
