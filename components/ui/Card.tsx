import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  featured?: boolean
}

export function Card({ children, className, featured = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all',
        featured
          ? 'bg-[var(--primary)] text-white shadow-xl scale-105'
          : 'bg-white border border-gray-200 hover:shadow-lg hover:border-gray-300',
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mb-4', className)}>{children}</div>
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn('text-xl font-semibold', className)}>{children}</h3>
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('text-sm opacity-80', className)}>{children}</p>
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('', className)}>{children}</div>
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mt-6 pt-4 border-t border-gray-100', className)}>{children}</div>
}
