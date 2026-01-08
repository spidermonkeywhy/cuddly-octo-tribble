'use client'

import { COLLECT_CARDS } from '@/lib/constants'
import { iconMap, IconName } from '@/components/ui/icons'

export function Collect() {
  return (
    <section id="collect" className="py-20 sm:py-28 px-4 sm:px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mb-4">
            How to MIRUMI
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Three ways to engage with the MIRUMI ecosystem
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {COLLECT_CARDS.map((card, index) => {
            const IconComponent = iconMap[card.icon as IconName]
            return (
              <div
                key={card.title}
                className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm p-8 hover:shadow-lg hover:border-[var(--accent)]/30 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Number badge */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent)]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 text-[var(--accent)]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#111] mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
