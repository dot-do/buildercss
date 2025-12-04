import { useParams, Link } from 'react-router-dom'

export function LayoutExample() {
  const { name } = useParams<{ name: string }>()

  // Render different layouts based on the name
  const renderLayout = () => {
    switch (name) {
      case 'DocsLayout':
        return <DocsLayoutDemo />
      case 'SidebarLayout':
        return <SidebarLayoutDemo />
      case 'DashboardLayout':
        return <DashboardLayoutDemo />
      case 'StackedLayout':
        return <StackedLayoutDemo />
      case 'SplitLayout':
        return <SplitLayoutDemo />
      case 'AuthLayout':
        return <AuthLayoutDemo />
      case 'FullscreenLayout':
        return <FullscreenLayoutDemo />
      default:
        return <StackedLayoutDemo />
    }
  }

  return renderLayout()
}

function DocsLayoutDemo() {
  return (
    <body data-layout="docs">
      <header>
        <nav>
          <Link to="/">BuilderCSS</Link>
          <ul>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Components</a></li>
            <li><a href="#">Examples</a></li>
          </ul>
          <input type="search" placeholder="Search..." />
        </nav>
      </header>

      <aside>
        <nav aria-label="Documentation">
          <strong>Getting Started</strong>
          <ul>
            <li><a href="#">Introduction</a></li>
            <li><a href="#" aria-current="page">Installation</a></li>
            <li><a href="#">Quick Start</a></li>
          </ul>
          <strong>Layouts</strong>
          <ul>
            <li><a href="#">DocsLayout</a></li>
            <li><a href="#">SidebarLayout</a></li>
            <li><a href="#">StackedLayout</a></li>
          </ul>
        </nav>
      </aside>

      <main>
        <article>
          <header>
            <nav aria-label="Breadcrumb">
              <Link to="/">Home</Link> / <span>Docs</span> / <span>Installation</span>
            </nav>
            <h1>Installation</h1>
            <p>Get started with BuilderCSS in your project.</p>
          </header>
          <section>
            <h2>Using npm</h2>
            <pre><code>npm install @buildercss/styles</code></pre>
            <h2>Using CDN</h2>
            <pre><code>{`<link rel="stylesheet" href="https://cdn.buildercss.dev/styles.css">`}</code></pre>
            <h2>Next Steps</h2>
            <p>Once installed, you can start using BuilderCSS semantic HTML patterns in your project.</p>
          </section>
          <footer>
            <a href="#">← Previous: Introduction</a>
            <a href="#">Next: Quick Start →</a>
          </footer>
        </article>

        <aside>
          <nav aria-label="On this page">
            <strong>On this page</strong>
            <ul>
              <li><a href="#">Using npm</a></li>
              <li><a href="#">Using CDN</a></li>
              <li><a href="#">Next Steps</a></li>
            </ul>
          </nav>
        </aside>
      </main>

      <footer>
        <p>BuilderCSS Documentation</p>
      </footer>
    </body>
  )
}

function SidebarLayoutDemo() {
  return (
    <body data-layout="sidebar">
      <header>
        <nav>
          <Link to="/">BuilderCSS</Link>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </header>

      <aside>
        <nav>
          <a href="#">Dashboard</a>
          <a href="#" aria-current="page">Projects</a>
          <a href="#">Team</a>
          <a href="#">Reports</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      <main>
        <h1>Projects</h1>
        <p>Manage your projects here.</p>
      </main>

      <footer>
        <p>© 2024 BuilderCSS</p>
      </footer>
    </body>
  )
}

function DashboardLayoutDemo() {
  return (
    <body data-layout="sidebar">
      <header>
        <nav>
          <Link to="/">Acme Dashboard</Link>
          <input type="search" placeholder="Search..." />
        </nav>
      </header>

      <aside>
        <nav>
          <a href="#" aria-current="page">Overview</a>
          <a href="#">Analytics</a>
          <a href="#">Users</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      <main>
        <h1>Dashboard Overview</h1>
        <section className="grid">
          <article className="card">
            <h3>Total Users</h3>
            <p className="stat">12,345</p>
          </article>
          <article className="card">
            <h3>Revenue</h3>
            <p className="stat">$54,321</p>
          </article>
          <article className="card">
            <h3>Active Projects</h3>
            <p className="stat">42</p>
          </article>
        </section>
      </main>

      <footer>
        <p>© 2024 Acme Inc</p>
      </footer>
    </body>
  )
}

function StackedLayoutDemo() {
  return (
    <body data-layout="stacked">
      <header>
        <nav>
          <Link to="/">BuilderCSS</Link>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Docs</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section aria-label="Hero" data-section="hero">
          <small>Semantic HTML</small>
          <h1>Build Beautiful Pages</h1>
          <p>Pure CSS styling with semantic HTML templates.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Get Started</button>
          </form>
        </section>

        <section aria-label="Features">
          <h2>Features</h2>
          <p>Everything you need to build modern web pages.</p>
        </section>
      </main>

      <footer>
        <p>© 2024 BuilderCSS</p>
      </footer>
    </body>
  )
}

function SplitLayoutDemo() {
  return (
    <body data-layout="split">
      <main>
        <aside>
          <h1>Welcome Back</h1>
          <p>Sign in to continue to your dashboard.</p>
        </aside>
        <article>
          <form>
            <h2>Sign In</h2>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Password
              <input type="password" placeholder="••••••••" />
            </label>
            <button type="submit">Sign In</button>
          </form>
        </article>
      </main>
    </body>
  )
}

function AuthLayoutDemo() {
  return (
    <body data-layout="auth">
      <main>
        <article>
          <header>
            <Link to="/">BuilderCSS</Link>
          </header>
          <form>
            <h1>Create Account</h1>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Password
              <input type="password" placeholder="••••••••" />
            </label>
            <button type="submit">Sign Up</button>
            <p>Already have an account? <a href="#">Sign in</a></p>
          </form>
        </article>
      </main>
    </body>
  )
}

function FullscreenLayoutDemo() {
  return (
    <body data-layout="fullscreen">
      <main>
        <article>
          <h1>Fullscreen Content</h1>
          <p>This layout takes up the entire viewport.</p>
          <Link to="/">← Back to Gallery</Link>
        </article>
      </main>
    </body>
  )
}
