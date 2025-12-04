// @buildercss/core
// Semantic HTML templates with pure CSS styling

// Top-level: Layouts, Pages, Views
export const layouts = [
  'Auth',
  'Dashboard',
  'Docs',
  'Fullscreen',
  'Sidebar',
  'Split',
  'Stacked',
] as const

export const pages = [
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
  'Privacy',
  'Product',
  'Terms',
  'Waitlist',
] as const

export const views = [
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
  'Profile',
  'Settings',
  'Table',
  'Users',
] as const

// Components: Sections, Containers
export const sections = [
  'CTA',
  'FAQ',
  'Features',
  'Hero',
  'Logos',
  'Newsletter',
  'Pricing',
  'Stats',
  'Team',
  'Testimonials',
] as const

export const containers = [
  'Command',
  'Drawer',
  'Fullscreen',
  'Inline',
  'Modal',
  'Popup',
  'Slideover',
  'Toast',
] as const

export type Layout = typeof layouts[number]
export type Page = typeof pages[number]
export type View = typeof views[number]
export type Section = typeof sections[number]
export type Container = typeof containers[number]

export type TopLevel = 'layout' | 'page' | 'view'
export type Component = 'section' | 'container'
export type ItemType = TopLevel | Component

export function getPath(type: ItemType, name: string): string {
  switch (type) {
    case 'layout':
      return `@buildercss/core/layouts/${name}`
    case 'page':
      return `@buildercss/core/pages/${name}`
    case 'view':
      return `@buildercss/core/views/${name}`
    case 'section':
      return `@buildercss/core/components/sections/${name}`
    case 'container':
      return `@buildercss/core/components/containers/${name}`
  }
}
