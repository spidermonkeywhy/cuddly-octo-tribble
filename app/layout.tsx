import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'ProductName — The future of productivity',
  description: 'Discover the revolutionary product that transforms how you work. Simple, powerful, and designed for modern life.',
  keywords: ['productivity', 'software', 'business', 'tools', 'efficiency'],
  authors: [{ name: 'ProductName' }],
  openGraph: {
    title: 'ProductName — The future of productivity',
    description: 'Discover the revolutionary product that transforms how you work. Simple, powerful, and designed for modern life.',
    url: 'https://example.com',
    siteName: 'ProductName',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProductName — The future of productivity',
    description: 'Discover the revolutionary product that transforms how you work.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
