import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Gallery } from './routes/Gallery'
import { LayoutExample } from './routes/LayoutExample'
import { PageExample } from './routes/PageExample'
import './index.css'

export const categories = {
  layouts: [
    'AuthLayout',
    'DashboardLayout',
    'DocsLayout',
    'FullscreenLayout',
    'SidebarLayout',
    'SplitLayout',
    'StackedLayout',
  ],
  pages: [
    'About',
    'Article',
    'Blog',
    'Careers',
    'Changelog',
    'Contact',
    'Docs',
    'Error',
    'Home',
    'NotFound',
    'Pricing',
    'PrivacyPolicy',
    'Product',
    'Terms',
    'Waitlist',
  ],
  sections: [
    'CTA',
    'FAQ',
    'Features',
    'Hero',
    'Logos',
    'Newsletter',
    'Stats',
    'Team',
    'Testimonials',
  ],
  views: [
    'APIKeys',
    'Billing',
    'Calendar',
    'Chat',
    'Dashboard',
    'Detail',
    'Editor',
    'Form',
    'Grid',
    'Kanban',
    'List',
    'Settings',
    'Table',
    'UserProfile',
    'Users',
  ],
  containers: [
    'Drawer',
    'Fullscreen',
    'Inline',
    'Modal',
    'Popup',
    'Slideover',
  ],
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/layouts/:name" element={<LayoutExample />} />
        <Route path="/pages/:name" element={<PageExample />} />
        <Route path="/sections/:name" element={<PageExample />} />
        <Route path="/views/:name" element={<PageExample />} />
        <Route path="/containers/:name" element={<PageExample />} />
      </Routes>
    </BrowserRouter>
  )
}
