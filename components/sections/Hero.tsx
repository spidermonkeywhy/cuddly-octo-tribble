'use client'

import Image from 'next/image'
import { SITE_CONFIG, TOKEN_INFO, SOCIAL_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { CopyButton } from '@/components/ui/CopyButton'
import { useTilt } from '@/hooks/useTilt'
import { shortenAddress } from '@/lib/utils'
import { SparkleIcon } from '@/components/ui/icons'

export function Hero() {
  const { handleMouseMove, handleMouseLeave, style } = useTilt(8)

  return (
    <section className="min-h-screen pt-28 pb-16 px-4 sm:px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-[var(--accent-dark)]">Live on {SITE_CONFIG.chain}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-[#111]">
              {SITE_CONFIG.name} is the{' '}
              <span className="text-[var(--accent)]">Labubu</span> of 2026.
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
              {SITE_CONFIG.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button href={SOCIAL_LINKS.dex} variant="accent" size="lg">
                Buy {SITE_CONFIG.ticker}
              </Button>
              <Button href="#community" variant="secondary" size="lg">
                Join Community
              </Button>
            </div>

            {/* Info Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-gray-100 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Chain:</span>
                <span className="text-sm font-semibold px-2.5 py-1 bg-gray-100 rounded-lg">
                  {SITE_CONFIG.chain}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Ticker:</span>
                <span className="text-sm font-semibold">{SITE_CONFIG.ticker}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">CA:</span>
                <code className="text-sm font-mono bg-gray-100 px-2.5 py-1 rounded-lg">
                  {shortenAddress(TOKEN_INFO.contractAddress, 6)}
                </code>
                <CopyButton
                  text={TOKEN_INFO.contractAddress}
                  toastMessage="Contract address copied!"
                />
              </div>
            </div>
          </div>

          {/* Right: Hero Card */}
          <div className="flex justify-center lg:justify-end">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={style}
              className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] cursor-pointer will-change-transform"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent)]/30 via-[var(--accent-light)]/20 to-[var(--accent)]/30 rounded-[32px] blur-2xl opacity-60" />

              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-white via-white to-[var(--accent-light)]/20 rounded-3xl border border-[var(--accent)]/20 shadow-2xl overflow-hidden">
                {/* Holographic shimmer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

                {/* Sparkle decorations */}
                <SparkleIcon className="absolute top-4 right-4 w-6 h-6 text-[var(--accent)] opacity-60" />
                <SparkleIcon className="absolute bottom-20 left-4 w-4 h-4 text-[var(--accent)] opacity-40" />

                {/* Image */}
                <div className="relative h-full flex items-center justify-center p-6">
                  <Image
                    src="/mirumi-pink.png"
                    alt="MIRUMI character"
                    width={320}
                    height={400}
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/90 to-transparent p-6 pt-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#111]">{SITE_CONFIG.name}</h3>
                      <p className="text-sm text-gray-500">{SITE_CONFIG.ticker}</p>
                    </div>
                    <div className="px-3 py-1.5 bg-[var(--accent)]/10 rounded-full">
                      <span className="text-xs font-semibold text-[var(--accent-dark)]">
                        #0001
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
