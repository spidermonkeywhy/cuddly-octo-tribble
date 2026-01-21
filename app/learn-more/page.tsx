'use client'

import { useState } from 'react'
import { BENEFITS, HOW_IT_WORKS, FAQ } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { LightningIcon, ShieldIcon, SparkleIcon, HeartIcon, ChevronDownIcon } from '@/components/ui/icons'

const iconMap = {
  lightning: LightningIcon,
  shield: ShieldIcon,
  sparkle: SparkleIcon,
  heart: HeartIcon,
}

export default function LearnMorePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#111] mb-6">
            Everything you need to know
          </h1>
          <p className="text-lg text-gray-600">
            Discover the features and benefits that make our product stand out.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111] text-center mb-12">
            Why choose us?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit) => {
              const Icon = iconMap[benefit.icon as keyof typeof iconMap] || SparkleIcon
              return (
                <div key={benefit.title} className="bg-white rounded-2xl p-6 border border-gray-200">
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#111] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111] text-center mb-12">
            How it works
          </h2>
          <div className="space-y-8">
            {HOW_IT_WORKS.map((step, index) => (
              <div key={step.step} className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  {index < HOW_IT_WORKS.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-200 mx-auto mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-[#111] mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111] text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {FAQ.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#111] mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of satisfied customers and transform your workflow today.
          </p>
          <Button href="/#pricing" variant="primary" size="lg">
            View Pricing
          </Button>
        </div>
      </section>
    </>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <span className="font-semibold text-[#111]">{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}
