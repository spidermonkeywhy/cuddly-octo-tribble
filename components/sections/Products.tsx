'use client'

import { PRODUCTS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { CheckIcon } from '@/components/ui/icons'

export function Products() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111] mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className={`rounded-2xl p-8 transition-all ${
                product.featured
                  ? 'bg-[var(--primary)] text-white shadow-xl scale-105 relative'
                  : 'bg-white border border-gray-200 hover:shadow-lg'
              }`}
            >
              {product.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[var(--secondary)] text-white text-sm font-medium px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${product.featured ? 'text-white' : 'text-[#111]'}`}>
                  {product.name}
                </h3>
                <p className={`text-sm ${product.featured ? 'text-white/80' : 'text-gray-500'}`}>
                  {product.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${product.featured ? 'text-white' : 'text-[#111]'}`}>
                  {product.price}
                </span>
                <span className={`text-sm ${product.featured ? 'text-white/70' : 'text-gray-500'}`}>
                  {' '}/ one-time
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckIcon className={`w-5 h-5 ${product.featured ? 'text-white' : 'text-[var(--secondary)]'}`} />
                    <span className={`text-sm ${product.featured ? 'text-white/90' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="#"
                variant={product.featured ? 'secondary' : 'primary'}
                size="lg"
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
