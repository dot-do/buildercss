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

const defaultCode = `import { on, send, ai } from 'sdk.do'

// Define autonomous business logic
export const onNewLead = on('lead.created', async (lead) => {
  // AI-powered qualification
  const qualified = await ai.qualify(lead)

  if (qualified.score > 0.8) {
    await send.email({
      to: lead.email,
      template: 'welcome-qualified',
      data: { name: lead.name }
    })
  }

  return qualified
})`

// ===========================================
// Story Types
// ===========================================

interface WaitlistVariantArgs {
  brand: string
  tagline: string
  headline: string
  description: string
  ctaText: string
  placeholder: string
  mediaType: 'image' | 'code' | 'video'
  imageUrl: string
  codeSnippet: string
  codeFilename: string
  videoUrl: string
}

// ===========================================
// Semantic Media Components
// ===========================================

const createCodeBlock = (filename: string, code: string) => `
    <figure>
      <figcaption>${filename}</figcaption>
      <pre><code>${code}</code></pre>
    </figure>`

const createImage = (src: string) => `
    <img src="${src}" alt="Product preview" />`

const createVideo = (src: string) => `
    <video src="${src}" autoplay loop muted playsinline></video>`

const createMedia = (args: WaitlistVariantArgs): string => {
  switch (args.mediaType) {
    case 'image':
      return createImage(args.imageUrl)
    case 'video':
      return createVideo(args.videoUrl)
    case 'code':
    default:
      return createCodeBlock(args.codeFilename, args.codeSnippet)
  }
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

const createVariantTemplate = (args: WaitlistVariantArgs): string => `
${createHeader(args.brand)}

<main data-background="gradient">
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
${createMedia(args)}
  </section>
</main>

${createFooter(args.brand, args.ctaText)}`

// ===========================================
// Story Configuration
// ===========================================

const meta: Meta<WaitlistVariantArgs> = {
  title: 'Templates/Waitlist/Variants',
  tags: ['autodocs'],
  render: (args) => createVariantTemplate(args),
  argTypes: {
    brand: { control: 'text', description: 'Brand name' },
    tagline: { control: 'text', description: 'Small text above headline' },
    headline: { control: 'text', description: 'Main headline' },
    description: { control: 'text', description: 'Supporting text' },
    ctaText: { control: 'text', description: 'Button text' },
    placeholder: { control: 'text', description: 'Input placeholder' },
    mediaType: {
      control: 'select',
      options: ['image', 'code', 'video'],
      description: 'Media content type - layout auto-inferred from presence of media',
    },
    imageUrl: { control: 'text', description: 'Image URL (when mediaType=image)' },
    codeSnippet: { control: 'text', description: 'Code content (when mediaType=code)' },
    codeFilename: { control: 'text', description: 'Code filename (when mediaType=code)' },
    videoUrl: { control: 'text', description: 'Video URL (when mediaType=video)' },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<WaitlistVariantArgs>

// ===========================================
// Default Args
// ===========================================

const defaultArgs: WaitlistVariantArgs = {
  brand: defaultContent.brand,
  tagline: defaultContent.tagline,
  headline: defaultContent.headline,
  description: defaultContent.description,
  ctaText: defaultContent.ctaText,
  placeholder: defaultContent.placeholder,
  mediaType: 'image',
  imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
  codeSnippet: defaultCode,
  codeFilename: 'example.ts',
  videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
}

// ===========================================
// Story Exports - Media Variants
// Layout is auto-inferred: side-by-side on desktop when media present
// ===========================================

export const WithImage: Story = {
  args: {
    ...defaultArgs,
    mediaType: 'image',
  },
}

export const WithCode: Story = {
  args: {
    ...defaultArgs,
    mediaType: 'code',
  },
}

export const WithVideo: Story = {
  args: {
    ...defaultArgs,
    mediaType: 'video',
  },
}
