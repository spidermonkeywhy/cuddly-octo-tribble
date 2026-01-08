'use client'

import { STATS, PILLS } from '@/lib/constants'

export function SocialProof() {
  return (
    <section id="social-proof" className="py-16 px-4 sm:px-6 border-y border-gray-100 bg-white/50">
      <div className="max-w-6xl mx-auto">
        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PILLS.map((pill) => (
            <span
              key={pill}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-full border border-gray-200 shadow-sm"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#111] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
