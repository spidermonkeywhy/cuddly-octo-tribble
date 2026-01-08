import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MIRUMI — The Labubu of 2026',
  description: 'MIRUMI is a community-driven memecoin bringing collectible culture to Solana. Join the fluffiest community in crypto.',
  keywords: ['MIRUMI', 'memecoin', 'Solana', 'crypto', 'collectible', 'Labubu', 'community'],
  authors: [{ name: 'MIRUMI' }],
  openGraph: {
    title: 'MIRUMI — The Labubu of 2026',
    description: 'MIRUMI is a community-driven memecoin bringing collectible culture to Solana. Join the fluffiest community in crypto.',
    url: 'https://mirumi.io',
    siteName: 'MIRUMI',
    images: [
      {
        url: '/mirumi-pink.png',
        width: 1200,
        height: 630,
        alt: 'MIRUMI - The fluffiest memecoin',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MIRUMI — The Labubu of 2026',
    description: 'MIRUMI is a community-driven memecoin bringing collectible culture to Solana.',
    images: ['/mirumi-pink.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAFAF7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
