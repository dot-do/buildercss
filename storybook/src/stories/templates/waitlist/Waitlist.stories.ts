import type { Meta, StoryObj } from '@storybook/html'
import './waitlist.css'

// ===========================================
// Content Configuration (all hardcoded content lives here)
// ===========================================

const defaultContent = {
  brand: 'waitlist.do',
  tagline: 'Introducing',
  headline: 'Build the ultimate management layer for agentic work',
  description: 'Opinionated workflows. Enterprise rigor. Lightning-fast iteration.',
  ctaText: 'Join waitlist',
  placeholder: 'Enter your email',
  footerTagline: 'A collection of 100+ responsive HTML templates for your startup business or side project.',
  copyright: 'Waitlist.do © 2025. All rights reserved.',
  poweredBy: 'Powered with love',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
  navItems: [
    { label: 'Blog', href: '/blog' },
    { label: 'Join waitlist', href: '#join' },
  ],
  footerSections: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Changelog', href: '/changelog' },
        { label: 'Docs', href: '/docs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ],
}

// ===========================================
// Story Types
// ===========================================

interface WaitlistArgs {
  brand: string
  tagline: string
  headline: string
  description: string
  ctaText: string
  placeholder: string
  showBackground: boolean
}

// ===========================================
// Template Renderers (semantic HTML only)
// ===========================================

const createHeader = (brand: string) => `
<header>
  <nav>
    <strong>${brand}</strong>
    <menu>
      ${defaultContent.navItems.map(item => `<li><a href="${item.href}">${item.label}</a></li>`).join('\n      ')}
    </menu>
  </nav>
</header>`

const createFooter = (brand: string, ctaText: string) => `
<footer>
  <section>
    <div>
      <h2>${brand}</h2>
      <p>${defaultContent.footerTagline}</p>
      <ul>
        ${defaultContent.socialLinks.map(link => `<li><a href="${link.href}" aria-label="${link.label}">${link.label}</a></li>`).join('\n        ')}
      </ul>
    </div>

    ${defaultContent.footerSections.map(section => `
    <article>
      <h3>${section.title}</h3>
      <ul>
        ${section.links.map(link => `<li><a href="${link.href}">${link.label}</a></li>`).join('\n        ')}
      </ul>
    </article>`).join('')}

    <article>
      <h3>Waitlist</h3>
      <form>
        <input type="email" placeholder="Email" required>
        <button type="submit">${ctaText}</button>
      </form>
      <small>By submitting, you agree to our terms</small>
    </article>
  </section>

  <aside>
    <p><small>${defaultContent.copyright}</small></p>
    <p><small>${defaultContent.poweredBy}</small></p>
  </aside>
</footer>`

const createWaitlistSection = (args: WaitlistArgs) => `
  <section id="join">
    <div>
      <small>${args.tagline}</small>
      <h1>${args.headline}</h1>
      <p>${args.description}</p>

      <form>
        <input type="email" placeholder="${args.placeholder}" required>
        <button type="submit">${args.ctaText}</button>
      </form>
    </div>
  </section>`

const createTemplate = (args: WaitlistArgs): string => `
${createHeader(args.brand)}

<main${args.showBackground ? ' data-background="gradient"' : ''}>
${createWaitlistSection(args)}
</main>

${createFooter(args.brand, args.ctaText)}`

// ===========================================
// Story Configuration
// ===========================================

const meta: Meta<WaitlistArgs> = {
  title: 'Templates/Waitlist/Default',
  render: (args) => createTemplate(args),
  argTypes: {
    brand: { control: 'text', description: 'Brand name in header and footer' },
    tagline: { control: 'text', description: 'Small text above headline' },
    headline: { control: 'text', description: 'Main h1 headline' },
    description: { control: 'text', description: 'Supporting paragraph' },
    ctaText: { control: 'text', description: 'Call-to-action button text' },
    placeholder: { control: 'text', description: 'Email input placeholder' },
    showBackground: { control: 'boolean', description: 'Enable animated background' },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<WaitlistArgs>

// ===========================================
// Story Exports
// ===========================================

export const Default: Story = {
  args: {
    brand: defaultContent.brand,
    tagline: defaultContent.tagline,
    headline: defaultContent.headline,
    description: defaultContent.description,
    ctaText: defaultContent.ctaText,
    placeholder: defaultContent.placeholder,
    showBackground: true,
  },
}

export const WithoutBackground: Story = {
  args: {
    ...Default.args,
    showBackground: false,
  },
}

export const CustomBranding: Story = {
  args: {
    brand: 'MyStartup',
    tagline: 'Coming Soon',
    headline: 'The future of productivity is here',
    description: 'Be the first to experience the next generation of tools.',
    ctaText: 'Get Early Access',
    placeholder: 'Your email address',
    showBackground: true,
  },
}
