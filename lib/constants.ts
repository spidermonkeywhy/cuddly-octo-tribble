// ============================================
// E-COMMERCE SITE CONSTANTS
// ============================================
// EDIT HERE: Update these values to customize the site
// ============================================

export const SITE_CONFIG = {
  name: 'ProductName',
  tagline: 'The future of productivity',
  description: 'Discover the revolutionary product that transforms how you work. Simple, powerful, and designed for modern life.',
  url: 'https://example.com',
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Learn More', href: '/learn-more' },
  { label: 'Contact', href: '/contact' },
]

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/placeholder',
  instagram: 'https://instagram.com/placeholder',
  linkedin: 'https://linkedin.com/company/placeholder',
  email: 'hello@example.com',
}

export const HERO_CONTENT = {
  headline: 'Transform Your Workflow',
  subheadline: 'The all-in-one solution that helps you work smarter, not harder.',
  cta: 'Shop Now',
  secondaryCta: 'Learn More',
}

export const STATS = [
  { label: 'Happy Customers', value: '10,000+' },
  { label: 'Countries', value: '50+' },
  { label: 'Reviews', value: '4.9/5' },
  { label: 'Support', value: '24/7' },
]

export const PRODUCTS = [
  {
    id: 1,
    name: 'Starter Pack',
    price: '$49',
    description: 'Perfect for individuals getting started.',
    features: ['Core features', 'Email support', '1 user'],
    featured: false,
  },
  {
    id: 2,
    name: 'Pro Bundle',
    price: '$99',
    description: 'Best value for professionals.',
    features: ['All features', 'Priority support', '5 users', 'Analytics'],
    featured: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$199',
    description: 'For teams that need more.',
    features: ['Everything in Pro', 'Unlimited users', 'Custom integrations', 'Dedicated support'],
    featured: false,
  },
]

export const BENEFITS = [
  {
    icon: 'lightning',
    title: 'Lightning Fast',
    description: 'Experience unmatched speed and performance that keeps you ahead of the curve.',
  },
  {
    icon: 'shield',
    title: 'Secure & Reliable',
    description: 'Built with enterprise-grade security to keep your data safe at all times.',
  },
  {
    icon: 'sparkle',
    title: 'Easy to Use',
    description: 'Intuitive design that requires no learning curve. Start using it right away.',
  },
  {
    icon: 'heart',
    title: 'Customer Focused',
    description: 'We listen to our customers and continuously improve based on your feedback.',
  },
]

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Sign Up',
    description: 'Create your account in less than 30 seconds. No credit card required.',
  },
  {
    step: 2,
    title: 'Set Up',
    description: 'Follow our simple setup wizard to configure your preferences.',
  },
  {
    step: 3,
    title: 'Get Started',
    description: 'Start using the product immediately and see results from day one.',
  },
  {
    step: 4,
    title: 'Grow',
    description: 'Scale effortlessly as your needs evolve. We grow with you.',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    text: 'This product has completely transformed how our team works. We\'ve seen a 40% increase in productivity.',
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Founder',
    company: 'StartupXYZ',
    text: 'The best investment we\'ve made for our business. Simple, powerful, and reliable.',
    avatar: 'MC',
  },
  {
    name: 'Emily Davis',
    role: 'Designer',
    company: 'Creative Studio',
    text: 'Finally a tool that understands what professionals need. Highly recommend!',
    avatar: 'ED',
  },
]

export const FAQ = [
  {
    question: 'How do I get started?',
    answer: 'Simply click the "Shop Now" button and follow the checkout process. You\'ll receive instant access after purchase.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. You can cancel your subscription at any time with no questions asked.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with the product.',
  },
]

export const ABOUT_CONTENT = {
  headline: 'Our Story',
  mission: 'We believe everyone deserves tools that make their work easier and more enjoyable.',
  paragraphs: [
    'Founded in 2024, we set out with a simple mission: create products that people actually love to use. We were tired of complicated tools that promised everything but delivered frustration.',
    'Our team of passionate designers and engineers work tirelessly to craft solutions that are both powerful and delightfully simple. Every feature is carefully considered, every interaction thoughtfully designed.',
    'Today, we serve thousands of customers worldwide, but we haven\'t lost sight of why we started. We\'re still obsessed with making your work life better, one feature at a time.',
  ],
  values: [
    { title: 'Simplicity', description: 'We remove complexity, not add it.' },
    { title: 'Quality', description: 'We never ship anything we wouldn\'t use ourselves.' },
    { title: 'Customer First', description: 'Your success is our success.' },
    { title: 'Transparency', description: 'We\'re honest about what we can and can\'t do.' },
  ],
}

export const CONTACT_INFO = {
  email: 'hello@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Innovation Street, Tech City, TC 12345',
  hours: 'Monday - Friday, 9am - 6pm EST',
}

export const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/learn-more' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'FAQ', href: '/learn-more#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
]

export const DISCLAIMER = {
  footer: '© 2024 ProductName. All rights reserved.',
}
