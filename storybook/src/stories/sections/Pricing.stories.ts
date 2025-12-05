import type { Meta, StoryObj } from '@storybook/html'
import './sections.css'

interface PricingPlan {
  name: string
  price: string
  period: string
  features: string[]
  ctaLabel: string
  ctaHref: string
  featured?: boolean
}

interface PricingArgs {
  title: string
  description?: string
  plans: PricingPlan[]
}

const createPricingTemplate = (args: PricingArgs): string => `
<section aria-label="Pricing">
  <header>
    <h2>${args.title}</h2>
    ${args.description ? `<p>${args.description}</p>` : ''}
  </header>
  <div>
    ${args.plans.map(plan => `
    <article${plan.featured ? ' class="featured"' : ''}>
      <h3>${plan.name}</h3>
      <p class="price">${plan.price}<span>/${plan.period}</span></p>
      <ul>
        ${plan.features.map(f => `<li>${f}</li>`).join('\n        ')}
      </ul>
      <a href="${plan.ctaHref}">${plan.ctaLabel}</a>
    </article>
    `).join('')}
  </div>
</section>
`

const meta: Meta<PricingArgs> = {
  title: 'Sections/Pricing',
  tags: ['autodocs'],
  render: (args) => createPricingTemplate(args),
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<PricingArgs>

const defaultPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    period: 'month',
    features: [
      'Up to 3 projects',
      'Basic components',
      'Community support',
      'Documentation access',
    ],
    ctaLabel: 'Get Started',
    ctaHref: '/signup',
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'month',
    features: [
      'Unlimited projects',
      'All components',
      'Priority support',
      'Custom theming',
      'Source files',
    ],
    ctaLabel: 'Start Free Trial',
    ctaHref: '/trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'month',
    features: [
      'Everything in Pro',
      'Dedicated support',
      'Custom components',
      'SLA guarantee',
      'Training sessions',
    ],
    ctaLabel: 'Contact Sales',
    ctaHref: '/enterprise',
  },
]

export const Default: Story = {
  args: {
    title: 'Simple, transparent pricing',
    description: 'Choose the plan that works best for you',
    plans: defaultPlans,
  },
}

export const TwoPlans: Story = {
  args: {
    title: 'Choose your plan',
    plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'forever',
        features: [
          'Basic features',
          'Up to 5 users',
          'Community support',
        ],
        ctaLabel: 'Get Started',
        ctaHref: '/signup',
      },
      {
        name: 'Premium',
        price: '$49',
        period: 'month',
        features: [
          'All features',
          'Unlimited users',
          'Priority support',
          '24/7 availability',
        ],
        ctaLabel: 'Upgrade Now',
        ctaHref: '/upgrade',
        featured: true,
      },
    ],
  },
}

export const Annual: Story = {
  args: {
    title: 'Annual Pricing',
    description: 'Save 20% with annual billing',
    plans: [
      {
        name: 'Basic',
        price: '$190',
        period: 'year',
        features: [
          '5 projects',
          'Basic components',
          'Email support',
        ],
        ctaLabel: 'Subscribe',
        ctaHref: '/subscribe/basic',
      },
      {
        name: 'Professional',
        price: '$290',
        period: 'year',
        features: [
          'Unlimited projects',
          'All components',
          'Priority support',
          'Custom branding',
        ],
        ctaLabel: 'Subscribe',
        ctaHref: '/subscribe/pro',
        featured: true,
      },
      {
        name: 'Team',
        price: '$990',
        period: 'year',
        features: [
          'Everything in Pro',
          'Team collaboration',
          'Admin dashboard',
          'Analytics',
        ],
        ctaLabel: 'Subscribe',
        ctaHref: '/subscribe/team',
      },
    ],
  },
}
