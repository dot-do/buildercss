import type { Meta, StoryObj } from '@storybook/html'
import './blog.css'

interface BlogArticle {
  date: string
  dateFormatted: string
  title: string
  href: string
  description: string
  tags: string[]
}

interface BlogIndexArgs {
  brandName: string
  pageTitle: string
  pageDescription: string
  articles: BlogArticle[]
}

const createBlogIndexTemplate = (args: BlogIndexArgs): string => `
<header>
  <nav>
    <strong>${args.brandName}</strong>
    <menu>
      <li><a href="/">Home</a></li>
      <li><a href="#subscribe">Subscribe</a></li>
    </menu>
  </nav>
</header>

<main>
  <header>
    <h1>${args.pageTitle}</h1>
    <p>${args.pageDescription}</p>
  </header>

  <section>
    ${args.articles.map(article => `
    <article>
      <time datetime="${article.date}">${article.dateFormatted}</time>
      <h2><a href="${article.href}">${article.title}</a></h2>
      <p>${article.description}</p>
      <aside>
        ${article.tags.map(tag => `<span>${tag}</span>`).join('\n        ')}
      </aside>
    </article>
    `).join('')}
  </section>
</main>

<footer id="subscribe">
  <section>
    <div>
      <h2>Subscribe</h2>
      <p>Get notified when new articles are published.</p>

      <form>
        <input type="email" placeholder="your@email.com" required>
        <button type="submit">Subscribe</button>
      </form>
    </div>

    <article>
      <h3>Categories</h3>
      <ul>
        <li><a href="#html">HTML</a></li>
        <li><a href="#css">CSS</a></li>
        <li><a href="#accessibility">Accessibility</a></li>
        <li><a href="#design">Design</a></li>
      </ul>
    </article>

    <article>
      <h3>Connect</h3>
      <ul>
        <li><a href="https://github.com">GitHub</a></li>
        <li><a href="https://twitter.com">Twitter</a></li>
        <li><a href="https://mastodon.social">Mastodon</a></li>
        <li><a href="/rss.xml">RSS</a></li>
      </ul>
    </article>
  </section>

  <aside>
    <p><small>&copy; ${new Date().getFullYear()} ${args.brandName}. All rights reserved.</small></p>
  </aside>
</footer>
`

const meta: Meta<BlogIndexArgs> = {
  title: 'Templates/Blog/Index',
  tags: ['autodocs'],
  render: (args) => createBlogIndexTemplate(args),
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<BlogIndexArgs>

const defaultArticles: BlogArticle[] = [
  {
    date: '2025-01-15',
    dateFormatted: 'January 15, 2025',
    title: 'The Power of Semantic HTML',
    href: '/blog/semantic-html',
    description: 'Discover how semantic HTML improves accessibility, SEO, and maintainability while reducing complexity in your web projects.',
    tags: ['HTML', 'Accessibility', 'Best Practices'],
  },
  {
    date: '2025-01-10',
    dateFormatted: 'January 10, 2025',
    title: 'Mastering CSS Variables',
    href: '/blog/css-variables',
    description: 'Learn how to use CSS custom properties to create themeable, maintainable stylesheets without preprocessors.',
    tags: ['CSS', 'Tutorial'],
  },
  {
    date: '2025-01-05',
    dateFormatted: 'January 5, 2025',
    title: 'Understanding OKLCH Color Space',
    href: '/blog/oklch-colors',
    description: 'Explore the benefits of OKLCH color space for creating perceptually uniform color palettes in modern browsers.',
    tags: ['CSS', 'Color', 'Design'],
  },
  {
    date: '2024-12-28',
    dateFormatted: 'December 28, 2024',
    title: 'Building Without Build Tools',
    href: '/blog/no-build-tools',
    description: 'Why modern CSS and HTML are powerful enough for most projects without the complexity of build pipelines.',
    tags: ['Development', 'Opinion'],
  },
]

export const Default: Story = {
  args: {
    brandName: 'Blog',
    pageTitle: 'Latest Articles',
    pageDescription: 'Thoughts on web development, semantic HTML, and modern CSS.',
    articles: defaultArticles,
  },
}

export const TechBlog: Story = {
  args: {
    brandName: 'TechBytes',
    pageTitle: 'Engineering Blog',
    pageDescription: 'Insights and tutorials from our engineering team.',
    articles: [
      {
        date: '2025-01-20',
        dateFormatted: 'January 20, 2025',
        title: 'Scaling Our Infrastructure',
        href: '/blog/scaling',
        description: 'How we scaled our platform to handle millions of requests.',
        tags: ['Infrastructure', 'Engineering'],
      },
      {
        date: '2025-01-18',
        dateFormatted: 'January 18, 2025',
        title: 'Adopting TypeScript',
        href: '/blog/typescript',
        description: 'Our journey migrating a large codebase to TypeScript.',
        tags: ['TypeScript', 'Migration'],
      },
    ],
  },
}
