import { useParams, Link, useLocation } from 'react-router-dom'

export function PageExample() {
  const { name } = useParams<{ name: string }>()
  const location = useLocation()
  const category = location.pathname.split('/')[1]

  return (
    <body data-layout="stacked">
      <header>
        <nav>
          <Link to="/">BuilderCSS</Link>
          <ul>
            <li><Link to="/">Gallery</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section aria-label="Hero" data-section="hero">
          <small>{category}</small>
          <h1>{name}</h1>
          <p>
            This is a demo of the {name} {category?.slice(0, -1)}.
          </p>
          <Link to="/" className="button">← Back to Gallery</Link>
        </section>

        <section aria-label="Preview">
          <div className="container">
            <h2>Preview</h2>
            <div className="preview-frame">
              {renderPreview(name, category)}
            </div>
          </div>
        </section>

        <section aria-label="Code">
          <div className="container">
            <h2>Semantic HTML</h2>
            <pre><code>{getCodeExample(name, category)}</code></pre>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>BuilderCSS - Semantic HTML templates</p>
        </div>
      </footer>
    </body>
  )
}

function renderPreview(name: string | undefined, category: string) {
  switch (category) {
    case 'sections':
      return renderSectionPreview(name)
    case 'pages':
      return renderPagePreview(name)
    case 'views':
      return renderViewPreview(name)
    case 'containers':
      return renderContainerPreview(name)
    default:
      return <p>Preview not available</p>
  }
}

function renderSectionPreview(name: string | undefined) {
  switch (name) {
    case 'Hero':
      return (
        <section aria-label="Hero" data-section="hero">
          <small>Introducing</small>
          <h1>Build Something Amazing</h1>
          <p>Create beautiful, semantic web pages without the complexity.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Get Started</button>
          </form>
          <aside><small>Join 10,000+ developers</small></aside>
        </section>
      )
    case 'Features':
      return (
        <section aria-label="Features">
          <h2>Features</h2>
          <div className="grid">
            <article><h3>Semantic HTML</h3><p>Pure HTML5 elements</p></article>
            <article><h3>CSS Only</h3><p>No JavaScript required</p></article>
            <article><h3>Responsive</h3><p>Mobile-first design</p></article>
          </div>
        </section>
      )
    case 'CTA':
      return (
        <section aria-label="CTA">
          <h2>Ready to get started?</h2>
          <p>Join thousands of developers building with BuilderCSS.</p>
          <button>Start Building</button>
        </section>
      )
    default:
      return <p>{name} section preview</p>
  }
}

function renderPagePreview(name: string | undefined) {
  return <p>{name} page preview - Click to see full layout</p>
}

function renderViewPreview(name: string | undefined) {
  return <p>{name} view preview</p>
}

function renderContainerPreview(name: string | undefined) {
  switch (name) {
    case 'Modal':
      return (
        <div className="modal-preview">
          <dialog open>
            <h2>Modal Title</h2>
            <p>This is a modal dialog.</p>
            <button>Close</button>
          </dialog>
        </div>
      )
    default:
      return <p>{name} container preview</p>
  }
}

function getCodeExample(name: string | undefined, category: string): string {
  if (category === 'sections' && name === 'Hero') {
    return `<section aria-label="Hero">
  <small>Tagline</small>
  <h1>Main Headline</h1>
  <p>Supporting description text.</p>
  <form>
    <input type="email" placeholder="Enter your email" />
    <button type="submit">Get Started</button>
  </form>
  <aside>
    <small>Social proof text</small>
  </aside>
</section>`
  }

  return `<!-- ${name} ${category?.slice(0, -1)} -->
<${category === 'sections' ? 'section' : 'div'} aria-label="${name}">
  <!-- Content here -->
</${category === 'sections' ? 'section' : 'div'}>`
}
