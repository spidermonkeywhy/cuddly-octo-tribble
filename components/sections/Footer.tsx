'use client'

import { SITE_CONFIG, SOCIAL_LINKS, DISCLAIMER } from '@/lib/constants'
import { TwitterIcon, TelegramIcon, DiscordIcon, ArrowUpIcon } from '@/components/ui/icons'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Brand */}
          <div className="space-y-4">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-[#111] hover:opacity-80 transition-opacity"
            >
              {SITE_CONFIG.name}
            </a>
            <p className="text-sm text-gray-500 max-w-xs">
              Made for collectors. A memecoin with soul.
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            <SocialLink href={SOCIAL_LINKS.twitter} icon={<TwitterIcon />} label="Twitter" />
            <SocialLink href={SOCIAL_LINKS.telegram} icon={<TelegramIcon />} label="Telegram" />
            <SocialLink href={SOCIAL_LINKS.discord} icon={<DiscordIcon />} label="Discord" />
          </div>

          {/* Right: Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#111] bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Back to top"
          >
            <ArrowUpIcon className="w-4 h-4" />
            Back to top
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center max-w-3xl mx-auto">
            {DISCLAIMER.footer} Cryptocurrency investments are highly volatile and speculative.
            Past performance does not guarantee future results. Always do your own research before investing.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-[#111] transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
