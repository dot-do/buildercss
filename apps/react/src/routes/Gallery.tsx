import { Link } from 'react-router-dom'
import { categories } from '../App'

export function Gallery() {
  return (
    <body data-layout="stacked">
      <header>
        <nav>
          <strong>BuilderCSS</strong>
          <ul>
            <li><a href="#layouts">Layouts</a></li>
            <li><a href="#pages">Pages</a></li>
            <li><a href="#sections">Sections</a></li>
            <li><a href="#views">Views</a></li>
            <li><a href="#containers">Containers</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section aria-label="Hero" data-section="hero">
          <small>Semantic HTML Templates</small>
          <h1>BuilderCSS Gallery</h1>
          <p>
            Explore all available layouts, pages, sections, views, and containers.
            Click any item to see it in action.
          </p>
        </section>

        <section id="layouts" aria-label="Layouts">
          <div className="container">
            <h2>Layouts</h2>
            <p>Page-level layout structures for different use cases.</p>
            <div className="grid">
              {categories.layouts.map((name) => (
                <Link key={name} to={`/layouts/${name}`} className="card">
                  <h3>{name.replace('Layout', '')}</h3>
                  <small>{name}</small>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="pages" aria-label="Pages">
          <div className="container">
            <h2>Pages</h2>
            <p>Complete page templates for common use cases.</p>
            <div className="grid">
              {categories.pages.map((name) => (
                <Link key={name} to={`/pages/${name}`} className="card">
                  <h3>{name}</h3>
                  <small>Page</small>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="sections" aria-label="Sections">
          <div className="container">
            <h2>Sections</h2>
            <p>Reusable page sections for landing pages and marketing.</p>
            <div className="grid">
              {categories.sections.map((name) => (
                <Link key={name} to={`/sections/${name}`} className="card">
                  <h3>{name}</h3>
                  <small>Section</small>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="views" aria-label="Views">
          <div className="container">
            <h2>Views</h2>
            <p>Application views for dashboards and admin interfaces.</p>
            <div className="grid">
              {categories.views.map((name) => (
                <Link key={name} to={`/views/${name}`} className="card">
                  <h3>{name}</h3>
                  <small>View</small>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="containers" aria-label="Containers">
          <div className="container">
            <h2>Containers</h2>
            <p>Overlay and container components for modals and drawers.</p>
            <div className="grid">
              {categories.containers.map((name) => (
                <Link key={name} to={`/containers/${name}`} className="card">
                  <h3>{name}</h3>
                  <small>Container</small>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>BuilderCSS - Semantic HTML templates with pure CSS styling</p>
        </div>
      </footer>
    </body>
  )
}
