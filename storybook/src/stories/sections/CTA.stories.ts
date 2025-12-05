import type { Meta, StoryObj } from '@storybook/html'
import './sections.css'

interface CTAArgs {
  headline: string
  description?: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

const createCTATemplate = (args: CTAArgs): string => `
<section aria-label="Call to action">
  <h2>${args.headline}</h2>
  ${args.description ? `<p>${args.description}</p>` : ''}
  <div>
    <a href="${args.primaryHref}">${args.primaryLabel}</a>
    ${args.secondaryLabel ? `<a href="${args.secondaryHref}">${args.secondaryLabel}</a>` : ''}
  </div>
</section>
`

const meta: Meta<CTAArgs> = {
  title: 'Sections/CTA',
  tags: ['autodocs'],
  render: (args) => createCTATemplate(args),
  argTypes: {
    headline: { control: 'text' },
    description: { control: 'text' },
    primaryLabel: { control: 'text' },
    primaryHref: { control: 'text' },
    secondaryLabel: { control: 'text' },
    secondaryHref: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<CTAArgs>

export const Default: Story = {
  args: {
    headline: 'Ready to get started?',
    description: 'Join thousands of users already using our platform.',
    primaryLabel: 'Get Started Free',
    primaryHref: '/signup',
    secondaryLabel: 'Contact Sales',
    secondaryHref: '/contact',
  },
}

export const SingleButton: Story = {
  args: {
    headline: 'Start building today',
    description: 'No credit card required. Free forever for small teams.',
    primaryLabel: 'Get Started',
    primaryHref: '/signup',
  },
}

export const Newsletter: Story = {
  args: {
    headline: 'Stay in the loop',
    description: 'Get the latest updates and insights delivered to your inbox.',
    primaryLabel: 'Subscribe',
    primaryHref: '/subscribe',
    secondaryLabel: 'Learn More',
    secondaryHref: '/about',
  },
}

export const Enterprise: Story = {
  args: {
    headline: 'Need an enterprise solution?',
    description: 'Talk to our sales team about custom pricing and features for your organization.',
    primaryLabel: 'Contact Sales',
    primaryHref: '/enterprise',
    secondaryLabel: 'View Pricing',
    secondaryHref: '/pricing',
  },
}
