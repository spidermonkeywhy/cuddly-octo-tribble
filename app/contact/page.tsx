'use client'

import { CONTACT_INFO } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'
import { EmailIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@/components/ui/icons'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#111] mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            Have a question or want to learn more? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#111] mb-6">Send us a message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    id="firstName"
                    label="First Name"
                    placeholder="John"
                    required
                  />
                  <Input
                    id="lastName"
                    label="Last Name"
                    placeholder="Doe"
                    required
                  />
                </div>
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
                <Input
                  id="subject"
                  label="Subject"
                  placeholder="How can we help?"
                />
                <Textarea
                  id="message"
                  label="Message"
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  required
                />
                <Button type="submit" variant="primary" size="lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#111] mb-6">Contact Information</h2>
              <div className="space-y-6">
                <ContactItem
                  icon={<EmailIcon className="w-5 h-5" />}
                  label="Email"
                  value={CONTACT_INFO.email}
                  href={`mailto:${CONTACT_INFO.email}`}
                />
                <ContactItem
                  icon={<PhoneIcon className="w-5 h-5" />}
                  label="Phone"
                  value={CONTACT_INFO.phone}
                  href={`tel:${CONTACT_INFO.phone}`}
                />
                <ContactItem
                  icon={<MapPinIcon className="w-5 h-5" />}
                  label="Address"
                  value={CONTACT_INFO.address}
                />
                <ContactItem
                  icon={<ClockIcon className="w-5 h-5" />}
                  label="Business Hours"
                  value={CONTACT_INFO.hours}
                />
              </div>

              {/* Map placeholder */}
              <div className="mt-8 h-64 bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400">Map placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-500 mb-1">{label}</div>
        <div className="text-[#111] font-medium">{value}</div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {content}
      </a>
    )
  }

  return content
}
