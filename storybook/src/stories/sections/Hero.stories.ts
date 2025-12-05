import type { Meta, StoryObj } from '@storybook/html'
import './sections.css'

interface HeroArgs {
  tagline?: string
  headline: string
  description?: string
  ctaText: string
  showEmailForm: boolean
  socialProof?: string
}

const createHeroTemplate = (args: HeroArgs): string => `
<section aria-label="Hero">
  ${args.tagline ? `<small>${args.tagline}</small>` : ''}
  <h1>${args.headline}</h1>
  ${args.description ? `<p>${args.description}</p>` : ''}
  ${args.showEmailForm ? `
  <form>
    <input type="email" placeholder="Enter your email" />
    <button type="submit">${args.ctaText}</button>
  </form>
  ` : `
  <div>
    <a href="#" style="display: inline-block; padding: 0.75rem 1.5rem; background: var(--primary); color: var(--primary-foreground); border-radius: var(--radius-md); text-decoration: none; font-weight: 600;">${args.ctaText}</a>
  </div>
  `}
  ${args.socialProof ? `
  <aside>
    <small>${args.socialProof}</small>
  </aside>
  ` : ''}
</section>
`

const meta: Meta<HeroArgs> = {
  title: 'Sections/Hero',
  tags: ['autodocs'],
  render: (args) => createHeroTemplate(args),
  argTypes: {
    tagline: { control: 'text' },
    headline: { control: 'text' },
    description: { control: 'text' },
    ctaText: { control: 'text' },
    showEmailForm: { control: 'boolean' },
    socialProof: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<HeroArgs>

export const Default: Story = {
  args: {
    tagline: 'Introducing',
    headline: 'Build amazing products with semantic HTML',
    description: 'A modern approach to web development that puts accessibility and simplicity first.',
    ctaText: 'Get Started',
    showEmailForm: true,
    socialProof: 'Join 10,000+ developers already building with semantic HTML',
  },
}

export const WithButton: Story = {
  args: {
    ...Default.args,
    showEmailForm: false,
  },
}

export const Minimal: Story = {
  args: {
    headline: 'Simple. Beautiful. Accessible.',
    description: 'Build websites that work for everyone.',
    ctaText: 'Learn More',
    showEmailForm: false,
  },
}

export const ProductLaunch: Story = {
  args: {
    tagline: 'Now in Beta',
    headline: 'The future of web development is here',
    description: 'Experience the power of semantic HTML with beautiful, accessible components that just work.',
    ctaText: 'Join the Waitlist',
    showEmailForm: true,
    socialProof: 'Trusted by 500+ companies worldwide',
  },
}
