import type { Meta, StoryObj } from '@storybook/html'
import './blog.css'

interface BlogPostArgs {
  brandName: string
  date: string
  dateFormatted: string
  title: string
  description: string
  tags: string[]
  content: string
}

const createBlogPostTemplate = (args: BlogPostArgs): string => `
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
  <article class="post">
    <header>
      <time datetime="${args.date}">${args.dateFormatted}</time>
      <h1>${args.title}</h1>
      <p>${args.description}</p>
      <aside>
        ${args.tags.map(tag => `<span>${tag}</span>`).join('\n        ')}
      </aside>
    </header>

    ${args.content}
  </article>
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

const meta: Meta<BlogPostArgs> = {
  title: 'Templates/Blog/Post',
  tags: ['autodocs'],
  render: (args) => createBlogPostTemplate(args),
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<BlogPostArgs>

const semanticHTMLContent = `
<p>In the modern web development landscape, we've become accustomed to frameworks, build tools, and complex component architectures. But there's a simpler, more fundamental approach that often gets overlooked: semantic HTML.</p>

<h2>What is Semantic HTML?</h2>

<p>Semantic HTML uses elements that clearly describe their meaning and purpose, both to the browser and to developers. Instead of generic containers like <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code>, semantic HTML uses elements like:</p>

<ul>
  <li><code>&lt;header&gt;</code> - Page or section header</li>
  <li><code>&lt;nav&gt;</code> - Navigation links</li>
  <li><code>&lt;main&gt;</code> - Primary content</li>
  <li><code>&lt;article&gt;</code> - Self-contained composition</li>
  <li><code>&lt;section&gt;</code> - Thematic grouping</li>
  <li><code>&lt;aside&gt;</code> - Tangentially related content</li>
  <li><code>&lt;footer&gt;</code> - Page or section footer</li>
</ul>

<h2>Benefits of Semantic HTML</h2>

<h3>1. Accessibility</h3>

<p>Screen readers and assistive technologies rely on semantic HTML to help users navigate your content. When you use proper semantic elements, you're providing crucial context that makes your site accessible to everyone.</p>

<blockquote>
  <p>Accessibility is not just about compliance—it's about ensuring everyone can access your content, regardless of their abilities or the technology they use.</p>
</blockquote>

<h3>2. Search Engine Optimization</h3>

<p>Search engines parse semantic HTML to better understand your content structure and hierarchy. Using proper semantic elements can improve your search rankings by making it easier for search engines to index your content correctly.</p>

<h3>3. Maintainability</h3>

<p>Code that describes what it <strong>is</strong> rather than how it <strong>looks</strong> is easier to maintain. When you come back to your code months later, semantic elements immediately communicate their purpose.</p>

<h3>4. CSS Simplicity</h3>

<p>With semantic HTML, you can write CSS that targets elements directly without needing complex class naming systems:</p>

<pre><code>/* Target semantic elements directly */
header {
  background: white;
  border-bottom: 1px solid gray;
}

nav {
  display: flex;
  gap: 1rem;
}

main {
  max-width: 48rem;
  margin: 0 auto;
}</code></pre>

<h2>Moving Forward</h2>

<p>The web platform has evolved significantly, and modern CSS is powerful enough to style semantic HTML beautifully without utility classes or component libraries. By embracing semantic HTML, you're building on the foundation of what makes the web accessible and maintainable.</p>

<p>Start your next project with semantic HTML first. You might be surprised at how far you can get with just HTML and CSS—no build tools required.</p>
`

export const Default: Story = {
  args: {
    brandName: 'Blog',
    date: '2025-01-15',
    dateFormatted: 'January 15, 2025',
    title: 'The Power of Semantic HTML',
    description: 'Discover how semantic HTML improves accessibility, SEO, and maintainability while reducing complexity in your web projects.',
    tags: ['HTML', 'Accessibility', 'Best Practices'],
    content: semanticHTMLContent,
  },
}

export const TechArticle: Story = {
  args: {
    brandName: 'TechBytes',
    date: '2025-01-20',
    dateFormatted: 'January 20, 2025',
    title: 'Understanding OKLCH Color Space',
    description: 'A deep dive into the OKLCH color model and why it matters for modern web design.',
    tags: ['CSS', 'Color', 'Design'],
    content: `
<p>OKLCH is a perceptually uniform color space that provides consistent lightness across different hues. Unlike RGB or HSL, OKLCH ensures that colors with the same lightness value actually appear equally bright to the human eye.</p>

<h2>Why OKLCH?</h2>

<p>Traditional color models like HSL have a significant flaw: their lightness values don't correspond to perceived brightness. A yellow and a blue with the same HSL lightness will appear very different to the human eye.</p>

<pre><code>:root {
  /* OKLCH provides predictable lightness */
  --primary: oklch(0.7 0.15 250);
  --secondary: oklch(0.7 0.15 120);
  /* Both have the same perceived brightness */
}</code></pre>

<h2>Browser Support</h2>

<p>OKLCH is now supported in all modern browsers, making it a practical choice for production websites.</p>
`,
  },
}
