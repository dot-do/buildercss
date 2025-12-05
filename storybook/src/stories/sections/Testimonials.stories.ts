import type { Meta, StoryObj } from '@storybook/html'
import './sections.css'

interface Testimonial {
  quote: string
  name: string
  role: string
  avatar?: string
}

interface TestimonialsArgs {
  title: string
  testimonials: Testimonial[]
}

const createTestimonialsTemplate = (args: TestimonialsArgs): string => `
<section aria-label="Testimonials">
  <header>
    <h2>${args.title}</h2>
  </header>
  <div>
    ${args.testimonials.map(t => `
    <blockquote>
      <p>"${t.quote}"</p>
      <footer>
        ${t.avatar ? `<img src="${t.avatar}" alt="${t.name}" />` : `<div style="width: 48px; height: 48px; border-radius: 50%; background: var(--muted);"></div>`}
        <cite>
          <strong>${t.name}</strong>
          <span>${t.role}</span>
        </cite>
      </footer>
    </blockquote>
    `).join('')}
  </div>
</section>
`

const meta: Meta<TestimonialsArgs> = {
  title: 'Sections/Testimonials',
  tags: ['autodocs'],
  render: (args) => createTestimonialsTemplate(args),
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<TestimonialsArgs>

const defaultTestimonials: Testimonial[] = [
  {
    quote: 'This has completely changed how we build websites. The semantic HTML approach is so much cleaner and more maintainable.',
    name: 'Sarah Chen',
    role: 'Frontend Developer at TechCorp',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    quote: 'Finally, a CSS framework that embraces the platform instead of fighting it. Our accessibility scores improved dramatically.',
    name: 'James Wilson',
    role: 'Lead Engineer at StartupXYZ',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    quote: 'The simplicity is incredible. No build tools, no complex configurations. Just HTML and CSS that works.',
    name: 'Maria Garcia',
    role: 'Designer at Agency.io',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
]

export const Default: Story = {
  args: {
    title: 'What our customers say',
    testimonials: defaultTestimonials,
  },
}

export const TwoTestimonials: Story = {
  args: {
    title: 'Loved by developers',
    testimonials: defaultTestimonials.slice(0, 2),
  },
}

export const WithoutAvatars: Story = {
  args: {
    title: 'Customer Reviews',
    testimonials: [
      {
        quote: 'Simple, elegant, and powerful. Exactly what we needed.',
        name: 'Alex Thompson',
        role: 'CTO at Acme Inc',
      },
      {
        quote: 'The best decision we made was switching to semantic HTML.',
        name: 'Emily Brown',
        role: 'Product Manager',
      },
      {
        quote: 'Our development time decreased by 40% after adopting this approach.',
        name: 'Michael Lee',
        role: 'Senior Developer',
      },
    ],
  },
}
