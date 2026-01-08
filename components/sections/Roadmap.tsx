'use client'

import { ROADMAP } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { CheckIcon } from '@/components/ui/icons'

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mb-4">
            Roadmap
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Our journey to building something meaningful
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-0.5" />

          <div className="space-y-12">
            {ROADMAP.map((phase, index) => (
              <div
                key={phase.phase}
                className={cn(
                  'relative grid md:grid-cols-2 gap-8 md:gap-16',
                  index % 2 === 1 && 'md:direction-rtl'
                )}
              >
                {/* Timeline dot */}
                <div
                  className={cn(
                    'absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 md:-translate-x-2 mt-2',
                    phase.status === 'completed' && 'bg-green-500 border-green-200',
                    phase.status === 'current' && 'bg-[var(--accent)] border-[var(--accent-light)]',
                    phase.status === 'upcoming' && 'bg-gray-300 border-gray-200'
                  )}
                />

                {/* Content */}
                <div
                  className={cn(
                    'ml-12 md:ml-0',
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'
                  )}
                >
                  <div
                    className={cn(
                      'bg-white rounded-3xl border shadow-sm p-6 md:p-8 inline-block text-left',
                      phase.status === 'current'
                        ? 'border-[var(--accent)]/30 shadow-md'
                        : 'border-gray-100'
                    )}
                  >
                    {/* Status Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <StatusBadge status={phase.status} />
                      <span className="text-sm font-medium text-gray-500">{phase.phase}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#111] mb-4">{phase.title}</h3>

                    {/* Items */}
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div
                            className={cn(
                              'flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5',
                              phase.status === 'completed'
                                ? 'bg-green-100'
                                : phase.status === 'current'
                                ? 'bg-[var(--accent)]/10'
                                : 'bg-gray-100'
                            )}
                          >
                            {phase.status === 'completed' ? (
                              <CheckIcon className="w-3 h-3 text-green-600" />
                            ) : (
                              <div
                                className={cn(
                                  'w-1.5 h-1.5 rounded-full',
                                  phase.status === 'current'
                                    ? 'bg-[var(--accent)]'
                                    : 'bg-gray-400'
                                )}
                              />
                            )}
                          </div>
                          <span
                            className={cn(
                              'text-sm',
                              phase.status === 'completed'
                                ? 'text-gray-500 line-through'
                                : 'text-gray-700'
                            )}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-gray-500 mt-12">
          This roadmap represents our intentions and plans. Timelines and features may evolve based on
          community feedback and market conditions.
        </p>
      </div>
    </section>
  )
}

function StatusBadge({ status }: { status: 'completed' | 'current' | 'upcoming' }) {
  const styles = {
    completed: 'bg-green-100 text-green-700',
    current: 'bg-[var(--accent)]/10 text-[var(--accent-dark)]',
    upcoming: 'bg-gray-100 text-gray-600',
  }

  const labels = {
    completed: 'Completed',
    current: 'In Progress',
    upcoming: 'Upcoming',
  }

  return (
    <span className={cn('px-2.5 py-1 text-xs font-semibold rounded-full', styles[status])}>
      {labels[status]}
    </span>
  )
}
