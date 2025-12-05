import type { Meta, StoryObj } from '@storybook/html'
import './sections.css'

interface Feature {
  icon: string
  title: string
  description: string
}

interface FeaturesArgs {
  title: string
  description?: string
  features: Feature[]
}

const createFeaturesTemplate = (args: FeaturesArgs): string => `
<section aria-label="Features">
  <header>
    <h2>${args.title}</h2>
    ${args.description ? `<p>${args.description}</p>` : ''}
  </header>
  <div>
    ${args.features.map(feature => `
    <article>
      <figure>${feature.icon}</figure>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    </article>
    `).join('')}
  </div>
</section>
`

const meta: Meta<FeaturesArgs> = {
  title: 'Sections/Features',
  tags: ['autodocs'],
  render: (args) => createFeaturesTemplate(args),
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<FeaturesArgs>

const defaultFeatures: Feature[] = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized for performance with no unnecessary JavaScript.',
  },
  {
    icon: '♿',
    title: 'Accessible',
    description: 'Built with accessibility in mind from the ground up.',
  },
  {
    icon: '🎨',
    title: 'Themeable',
    description: 'Easily customize with CSS variables and custom properties.',
  },
  {
    icon: '📱',
    title: 'Responsive',
    description: 'Looks great on any device, from mobile to desktop.',
  },
  {
    icon: '🔧',
    title: 'No Build Tools',
    description: 'Works directly in the browser, no compilation needed.',
  },
  {
    icon: '📚',
    title: 'Well Documented',
    description: 'Comprehensive documentation with examples and guides.',
  },
]

export const Default: Story = {
  args: {
    title: 'Features',
    description: 'Everything you need to build amazing products',
    features: defaultFeatures,
  },
}

export const ThreeColumns: Story = {
  args: {
    title: 'Why Choose Us',
    description: 'Here are the top reasons our customers love us',
    features: defaultFeatures.slice(0, 3),
  },
}

export const FourColumns: Story = {
  args: {
    title: 'Core Features',
    features: defaultFeatures.slice(0, 4),
  },
}

export const ProductFeatures: Story = {
  args: {
    title: 'Built for Developers',
    description: 'Tools that make your workflow faster and more enjoyable',
    features: [
      {
        icon: '🚀',
        title: 'Quick Start',
        description: 'Get up and running in minutes with our starter templates.',
      },
      {
        icon: '🔌',
        title: 'Integrations',
        description: 'Works with your favorite tools and frameworks.',
      },
      {
        icon: '🛡️',
        title: 'Secure',
        description: 'Enterprise-grade security built into every component.',
      },
      {
        icon: '📈',
        title: 'Analytics',
        description: 'Built-in analytics to track your performance.',
      },
    ],
  },
}
