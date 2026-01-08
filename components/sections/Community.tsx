'use client'

import { useState, FormEvent } from 'react'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { TwitterIcon, TelegramIcon, DiscordIcon } from '@/components/ui/icons'
import { useToast } from '@/components/ui/Toast'

export function Community() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { addToast } = useToast()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      addToast('Please enter a valid email address', 'error')
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Store in localStorage
    try {
      const existingEmails = JSON.parse(localStorage.getItem('mirumi_emails') || '[]')
      if (!existingEmails.includes(email)) {
        existingEmails.push(email)
        localStorage.setItem('mirumi_emails', JSON.stringify(existingEmails))
      }
    } catch {
      // Ignore localStorage errors
    }

    setIsLoading(false)
    setIsSubmitted(true)
    addToast("You're on the list! Welcome to the family.", 'success')
    setEmail('')
  }

  return (
    <section id="community" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-white/50 to-[var(--accent)]/5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mb-4">
          Join the {SITE_CONFIG.name} Family
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
          Be part of the fluffiest community in crypto. Connect with fellow collectors,
          stay updated on drops, and help shape the future of {SITE_CONFIG.name}.
        </p>

        {/* Social Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <SocialButton
            href={SOCIAL_LINKS.twitter}
            icon={<TwitterIcon className="w-5 h-5" />}
            label="Twitter / X"
          />
          <SocialButton
            href={SOCIAL_LINKS.telegram}
            icon={<TelegramIcon className="w-5 h-5" />}
            label="Telegram"
          />
          <SocialButton
            href={SOCIAL_LINKS.discord}
            icon={<DiscordIcon className="w-5 h-5" />}
            label="Discord"
          />
        </div>

        {/* Email Capture */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-12 max-w-xl mx-auto">
          <h3 className="text-xl font-bold text-[#111] mb-2">Stay in the loop</h3>
          <p className="text-gray-500 mb-6">
            Get exclusive updates, drop announcements, and community news.
          </p>

          {isSubmitted ? (
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-[#111] font-medium">You&apos;re on the list!</p>
              <p className="text-sm text-gray-500 mt-1">Welcome to the {SITE_CONFIG.name} family.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent text-[#111] placeholder:text-gray-400"
                required
                aria-label="Email address"
              />
              <Button
                type="submit"
                variant="accent"
                size="lg"
                disabled={isLoading}
                className="whitespace-nowrap"
              >
                {isLoading ? 'Joining...' : 'Join List'}
              </Button>
            </form>
          )}

          <p className="text-xs text-gray-400 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}

function SocialButton({
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
      className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all"
    >
      {icon}
      <span className="font-medium text-[#111]">{label}</span>
    </a>
  )
}
