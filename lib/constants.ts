// ============================================
// MIRUMI MEMECOIN - SITE CONSTANTS
// ============================================
// EDIT HERE: Update these values to customize the site
// ============================================

export const SITE_CONFIG = {
  name: 'MIRUMI',
  ticker: '$MIRUMI',
  chain: 'Solana',
  tagline: 'The Labubu of 2026',
  description: 'MIRUMI is a community-driven memecoin bringing collectible culture to Solana. Join the fluffiest community in crypto.',
  url: 'https://mirumi.io',
}

export const TOKEN_INFO = {
  contractAddress: '7MiRuMiXxYzABC123DefGHI456JkLMnoPQR789StuVWxYz',
  totalSupply: '1,000,000,000',
  circulatingSupply: '850,000,000',
  burned: '150,000,000',
  lpLocked: true,
  mintRevoked: true,
  freezeRevoked: true,
  launchDate: 'January 2026',
}

export const SOCIAL_LINKS = {
  twitter: 'https://x.com/mirumi',
  telegram: 'https://t.me/mirumi',
  discord: 'https://discord.gg/mirumi',
  dex: 'https://raydium.io/swap/?outputMint=mirumi',
  explorer: 'https://solscan.io/token/7MiRuMiXxYzABC123DefGHI456JkLMnoPQR789StuVWxYz',
}

export const NAV_LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'Collect', href: '#collect' },
  { label: 'Social Proof', href: '#social-proof' },
  { label: 'Token', href: '#token' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Community', href: '#community' },
]

export const STATS = [
  { label: 'Holders', value: '12,847' },
  { label: 'Community', value: '28K+' },
  { label: 'Drops Shipped', value: '3' },
  { label: 'Daily Memes', value: '100+' },
]

export const PILLS = [
  'Community-first',
  'Collectible IP energy',
  'Meme-native, brand-led',
  'Designed for 2026 culture',
  'Fair Launch',
  'LP Locked',
]

export const STORY_CONTENT = {
  headline: 'A new kind of collectible',
  paragraphs: [
    'In a world oversaturated with generic tokens and empty promises, MIRUMI emerged as something different. Not just another memecoin, but a cultural movement built around the most huggable character in crypto.',
    'We saw how Labubu captured hearts worldwide with its quirky charm and collectible appeal. MIRUMI channels that same magic into the digital realm, creating a community where art, culture, and crypto intersect.',
    'This is not about pumps or dumps. It is about building something that makes people smile, something worth collecting, something worth being part of.',
  ],
  ethos: [
    { icon: 'heart', text: 'Community-owned, community-driven' },
    { icon: 'sparkle', text: 'Fair launch, no presale, no insiders' },
    { icon: 'shield', text: 'Liquidity locked, mint revoked' },
    { icon: 'star', text: 'Collectible-first mentality' },
    { icon: 'rocket', text: 'Built for long-term believers' },
  ],
  loreCard: {
    title: 'The Legend of MIRUMI',
    text: 'Born from stardust and internet dreams, MIRUMI wandered the blockchain seeking kindred spirits. They say if you hold MIRUMI close, it brings good fortune and even better vibes. Some call it a token. We call it family.',
  },
}

export const COLLECT_CARDS = [
  {
    icon: 'search',
    title: 'Discover',
    description: 'Explore the lore, catch exclusive drops, and be part of unforgettable moments in MIRUMI history.',
  },
  {
    icon: 'collection',
    title: 'Collect',
    description: 'Earn badges, unlock community artifacts, and build your collection of MIRUMI memorabilia.',
  },
  {
    icon: 'sparkle',
    title: 'Flex',
    description: 'Show off your MIRUMI identity. Profile aesthetics, culture signals, and pure collector energy.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Sarah K.',
    role: 'Collector',
    text: 'MIRUMI is the first crypto project that actually feels like joining a family. The community vibes are immaculate.',
    avatar: 'SK',
    featured: true,
  },
  {
    name: 'Alex Chen',
    role: 'Designer',
    text: 'The aesthetic direction is chef\'s kiss. Finally a memecoin that understands brand.',
    avatar: 'AC',
  },
  {
    name: 'Crypto Maya',
    role: 'Community Mod',
    text: 'Been in crypto since 2017. This community is different. People actually care about each other.',
    avatar: 'CM',
  },
  {
    name: 'Jordan R.',
    role: 'Early Holder',
    text: 'Came for the cute character, stayed for the incredible community. No regrets.',
    avatar: 'JR',
  },
  {
    name: 'NFT Whisperer',
    role: 'Collector',
    text: 'MIRUMI understands that memecoins are about culture, not just charts. That\'s rare.',
    avatar: 'NW',
  },
  {
    name: 'Dev Luna',
    role: 'Builder',
    text: 'The transparency and community focus reminds me why I got into crypto in the first place.',
    avatar: 'DL',
  },
  {
    name: 'Pixel Pete',
    role: 'Artist',
    text: 'Contributing art to MIRUMI has been a joy. They actually value creativity.',
    avatar: 'PP',
  },
  {
    name: 'Solana Sam',
    role: 'Trader',
    text: 'Strong fundamentals, stronger community. MIRUMI is built different.',
    avatar: 'SS',
  },
]

export const HOW_TO_BUY = [
  {
    step: 1,
    title: 'Get a Wallet',
    description: 'Download Phantom or Solflare wallet and create a new wallet.',
  },
  {
    step: 2,
    title: 'Add SOL',
    description: 'Buy SOL from an exchange and send it to your wallet address.',
  },
  {
    step: 3,
    title: 'Connect to DEX',
    description: 'Visit Raydium.io and connect your wallet.',
  },
  {
    step: 4,
    title: 'Swap for MIRUMI',
    description: 'Paste the contract address and swap your SOL for MIRUMI.',
  },
  {
    step: 5,
    title: 'Join the Community',
    description: 'Welcome to the family! Join our socials and say hello.',
  },
]

export const ROADMAP = [
  {
    phase: 'Phase 1',
    title: 'Genesis',
    status: 'completed' as const,
    items: [
      'Fair launch on Raydium',
      'Community building begins',
      'Website and socials launch',
      'First 1,000 holders milestone',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Growth',
    status: 'current' as const,
    items: [
      'Community events and raids',
      'Partnerships exploration',
      'Holder rewards program',
      'Content creator program',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Expansion',
    status: 'upcoming' as const,
    items: [
      'Collectible drops (exploring)',
      'Merch store launch',
      'CEX listing applications',
      'Global community hubs',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Evolution',
    status: 'upcoming' as const,
    items: [
      'MIRUMI ecosystem expansion',
      'Major collaborations',
      'IRL events and meetups',
      'Surprise announcements',
    ],
  },
]

export const DISCLAIMER = {
  token: 'MIRUMI is a memecoin and a cultural collectible. Nothing on this site constitutes financial advice. Always do your own research. Never invest more than you can afford to lose.',
  footer: '2026 MIRUMI. A memecoin for collectors. Not financial advice. DYOR.',
}
