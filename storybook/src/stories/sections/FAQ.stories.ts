import type { Meta, StoryObj } from '@storybook/html'
import './sections.css'

interface FAQItem {
  question: string
  answer: string
}

interface FAQArgs {
  title: string
  description?: string
  items: FAQItem[]
}

const createFAQTemplate = (args: FAQArgs): string => `
<section aria-label="FAQ">
  <header>
    <h2>${args.title}</h2>
    ${args.description ? `<p>${args.description}</p>` : ''}
  </header>
  <div>
    ${args.items.map(item => `
    <details>
      <summary>${item.question}</summary>
      <p>${item.answer}</p>
    </details>
    `).join('')}
  </div>
</section>
`

const meta: Meta<FAQArgs> = {
  title: 'Sections/FAQ',
  tags: ['autodocs'],
  render: (args) => createFAQTemplate(args),
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<FAQArgs>

const defaultItems: FAQItem[] = [
  {
    question: 'How do I get started?',
    answer: 'Simply copy our HTML templates into your project and customize the CSS variables to match your brand.',
  },
  {
    question: 'Is this free to use?',
    answer: 'Yes! All templates are open source and free to use in personal and commercial projects.',
  },
  {
    question: 'Do I need a build tool?',
    answer: 'No build tools are required. Everything works directly in the browser with standard HTML and CSS.',
  },
  {
    question: 'How accessible are these templates?',
    answer: 'All templates are built with accessibility in mind, using semantic HTML and ARIA attributes where appropriate.',
  },
  {
    question: 'Can I customize the styles?',
    answer: 'Absolutely! All styles use CSS custom properties, making it easy to customize colors, spacing, and typography.',
  },
]

export const Default: Story = {
  args: {
    title: 'Frequently Asked Questions',
    description: 'Have a question? Find answers to the most common questions below.',
    items: defaultItems,
  },
}

export const Minimal: Story = {
  args: {
    title: 'FAQ',
    items: defaultItems.slice(0, 3),
  },
}

export const ProductFAQ: Story = {
  args: {
    title: 'Product Questions',
    description: 'Everything you need to know about our product',
    items: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.',
      },
      {
        question: 'Can I cancel my subscription anytime?',
        answer: 'Yes, you can cancel your subscription at any time with no penalties or hidden fees.',
      },
      {
        question: 'Do you offer refunds?',
        answer: 'We offer a 30-day money-back guarantee if you are not satisfied with our product.',
      },
      {
        question: 'Is there a free trial?',
        answer: 'Yes, we offer a 14-day free trial with full access to all features.',
      },
    ],
  },
}
