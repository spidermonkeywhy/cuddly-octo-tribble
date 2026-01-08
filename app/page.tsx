'use client'

import { ToastProvider } from '@/components/ui/Toast'
import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { SocialProof } from '@/components/sections/SocialProof'
import { Story } from '@/components/sections/Story'
import { Collect } from '@/components/sections/Collect'
import { Testimonials } from '@/components/sections/Testimonials'
import { Token } from '@/components/sections/Token'
import { Roadmap } from '@/components/sections/Roadmap'
import { Community } from '@/components/sections/Community'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <ToastProvider>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Story />
        <Collect />
        <Testimonials />
        <Token />
        <Roadmap />
        <Community />
      </main>
      <Footer />
    </ToastProvider>
  )
}
