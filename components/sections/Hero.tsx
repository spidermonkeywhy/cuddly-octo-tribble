'use client'

import { HERO_CONTENT, STATS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111] leading-tight mb-6">
            {HERO_CONTENT.headline}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            {HERO_CONTENT.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/#pricing" variant="primary" size="lg">
              {HERO_CONTENT.cta}
            </Button>
            <Button href="/learn-more" variant="secondary" size="lg">
              {HERO_CONTENT.secondaryCta}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
