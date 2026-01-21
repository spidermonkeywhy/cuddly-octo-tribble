'use client'

import Link from 'next/link'
import { SITE_CONFIG, SOCIAL_LINKS, FOOTER_LINKS, DISCLAIMER } from '@/lib/constants'
import { TwitterIcon, InstagramIcon, LinkedInIcon, ArrowUpIcon } from '@/components/ui/icons'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-16 px-4 sm:px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-[#111] hover:opacity-80 transition-opacity"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="text-sm text-gray-500 mt-4 max-w-xs">
              {SITE_CONFIG.tagline}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <SocialLink href={SOCIAL_LINKS.twitter} icon={<TwitterIcon />} label="Twitter" />
              <SocialLink href={SOCIAL_LINKS.instagram} icon={<InstagramIcon />} label="Instagram" />
              <SocialLink href={SOCIAL_LINKS.linkedin} icon={<LinkedInIcon />} label="LinkedIn" />
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_LINKS.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-[#111] mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-[#111] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">{DISCLAIMER.footer}</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#111] bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Back to top"
          >
            <ArrowUpIcon className="w-4 h-4" />
            Back to top
          </button>
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
      className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-[#111] transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
