'use client'

import Image from 'next/image'
import { STORY_CONTENT } from '@/lib/constants'
import { iconMap, IconName } from '@/components/ui/icons'

export function Story() {
  return (
    <section id="story" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mb-4">
            {STORY_CONTENT.headline}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            The story behind the fluffiest memecoin in crypto
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Story Paragraphs */}
          <div className="space-y-6">
            {STORY_CONTENT.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-gray-600 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            {/* Image */}
            <div className="pt-8">
              <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--accent-light)]/30 to-[var(--accent)]/10">
                <Image
                  src="/mirumi.png"
                  alt="MIRUMI character cream variant"
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>

          {/* Right: Ethos + Lore Card */}
          <div className="space-y-8">
            {/* Ethos List */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-xl font-bold text-[#111] mb-6">The MIRUMI Ethos</h3>
              <ul className="space-y-4">
                {STORY_CONTENT.ethos.map((item) => {
                  const IconComponent = iconMap[item.icon as IconName]
                  return (
                    <li key={item.text} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-[var(--accent)]" />
                      </div>
                      <span className="text-gray-700 pt-2">{item.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Lore Card */}
            <div className="relative bg-gradient-to-br from-[var(--accent)]/5 via-white to-[var(--accent-light)]/10 rounded-3xl border border-[var(--accent)]/20 p-8 overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/10 rounded-full blur-3xl" />

              <div className="relative">
                <div className="inline-block px-3 py-1 text-xs font-semibold text-[var(--accent-dark)] bg-[var(--accent)]/10 rounded-full mb-4">
                  LORE
                </div>
                <h4 className="text-lg font-bold text-[#111] mb-3">
                  {STORY_CONTENT.loreCard.title}
                </h4>
                <p className="text-gray-600 italic leading-relaxed">
                  &ldquo;{STORY_CONTENT.loreCard.text}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
