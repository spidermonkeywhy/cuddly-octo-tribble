'use client'

import { TOKEN_INFO, SITE_CONFIG, HOW_TO_BUY, SOCIAL_LINKS, DISCLAIMER } from '@/lib/constants'
import { CopyButton } from '@/components/ui/CopyButton'
import { Button } from '@/components/ui/Button'
import { CheckIcon, ExternalLinkIcon } from '@/components/ui/icons'

export function Token() {
  return (
    <section id="token" className="py-20 sm:py-28 px-4 sm:px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111] mb-4">
            Token Details
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about {SITE_CONFIG.ticker}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Token Info Cards */}
          <div className="space-y-6">
            {/* Main Info Card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-xl font-bold text-[#111] mb-6">Token Information</h3>

              <div className="space-y-4">
                <InfoRow label="Name" value={SITE_CONFIG.name} />
                <InfoRow label="Ticker" value={SITE_CONFIG.ticker} />
                <InfoRow label="Chain" value={SITE_CONFIG.chain} />
                <InfoRow label="Total Supply" value={TOKEN_INFO.totalSupply} />
                <InfoRow label="Launch Date" value={TOKEN_INFO.launchDate} />

                {/* Contract Address */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500 mb-2">Contract Address</div>
                  <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-3">
                    <code className="text-sm font-mono text-[#111] flex-1 break-all">
                      {TOKEN_INFO.contractAddress}
                    </code>
                    <CopyButton
                      text={TOKEN_INFO.contractAddress}
                      toastMessage="Contract address copied!"
                    />
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-100">
                <Button href={SOCIAL_LINKS.dex} variant="accent" size="sm">
                  Buy on DEX
                  <ExternalLinkIcon className="w-4 h-4" />
                </Button>
                <Button href={SOCIAL_LINKS.explorer} variant="secondary" size="sm">
                  View Explorer
                  <ExternalLinkIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Security Features */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <h3 className="text-xl font-bold text-[#111] mb-6">Security</h3>
              <div className="space-y-3">
                <SecurityItem checked={TOKEN_INFO.lpLocked} label="Liquidity Locked" />
                <SecurityItem checked={TOKEN_INFO.mintRevoked} label="Mint Revoked" />
                <SecurityItem checked={TOKEN_INFO.freezeRevoked} label="Freeze Revoked" />
              </div>
            </div>
          </div>

          {/* How to Buy */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h3 className="text-xl font-bold text-[#111] mb-6">How to Buy</h3>

            <div className="space-y-6">
              {HOW_TO_BUY.map((item) => (
                <div key={item.step} className="flex gap-4">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-[var(--accent)]">
                      {item.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-[#111] mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Button href={SOCIAL_LINKS.dex} variant="accent" size="lg" className="w-full">
                Buy {SITE_CONFIG.ticker} Now
              </Button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            <strong className="text-gray-700">Disclaimer:</strong> {DISCLAIMER.token}
          </p>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold text-[#111]">{value}</span>
    </div>
  )
}

function SecurityItem({ checked, label }: { checked: boolean; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center ${
          checked ? 'bg-green-100' : 'bg-gray-100'
        }`}
      >
        {checked && <CheckIcon className="w-4 h-4 text-green-600" />}
      </div>
      <span className={checked ? 'text-[#111]' : 'text-gray-400'}>{label}</span>
    </div>
  )
}
