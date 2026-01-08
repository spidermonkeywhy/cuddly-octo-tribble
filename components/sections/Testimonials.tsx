'use client'

import { TESTIMONIALS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const featured = TESTIMONIALS.find((t) => t.featured)
  const regular = TESTIMONIALS.filter((t) => !t.featured)

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mb-4">
            What people are saying
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Real testimonials from the MIRUMI community
          </p>
        </div>

        {/* Featured Testimonial */}
        {featured && (
          <div className="mb-8">
            <TestimonialCard testimonial={featured} featured />
          </div>
        )}

        {/* Grid of testimonials */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {regular.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: {
    name: string
    role: string
    text: string
    avatar: string
  }
  featured?: boolean
}

function TestimonialCard({ testimonial, featured = false }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'break-inside-avoid bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow',
        featured && 'bg-gradient-to-br from-[var(--accent)]/5 to-white border-[var(--accent)]/20 p-8'
      )}
    >
      {/* Quote */}
      <p
        className={cn(
          'text-gray-700 leading-relaxed mb-6',
          featured && 'text-lg'
        )}
      >
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className={cn(
            'w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center',
            featured && 'w-12 h-12'
          )}
        >
          <span className="text-white font-semibold text-sm">
            {testimonial.avatar}
          </span>
        </div>

        {/* Name & Role */}
        <div>
          <div className="font-semibold text-[#111]">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}
