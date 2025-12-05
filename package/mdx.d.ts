declare module '*.mdx' {
  import type { ComponentType, ReactNode } from 'react'

  const MDXComponent: ComponentType<{ children?: ReactNode }>
  export default MDXComponent

  // Allow named exports from MDX files
  export const Layout: ComponentType<any>
  export const Waitlist: ComponentType<any>
  export const CodeBlock: ComponentType<any>
  export const ImageMedia: ComponentType<any>
  export const VideoMedia: ComponentType<any>
}
