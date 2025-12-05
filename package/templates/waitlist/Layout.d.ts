import type { ComponentType, ReactNode } from 'react'

export interface LayoutProps {
  brand?: string
  tagline?: string
  navItems?: Array<{ label: string; href: string }>
  footerSections?: Array<{
    title: string
    links?: Array<{ label: string; href: string }>
    content?: ReactNode
  }>
  socialLinks?: Array<{ label: string; href: string }>
  copyright?: string
  poweredBy?: ReactNode
  background?: 'gradient' | 'grid' | 'waves' | 'particles' | null
  children?: ReactNode
}

export const Layout: ComponentType<LayoutProps>
export default Layout
