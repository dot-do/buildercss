import type { ComponentType, ReactNode } from 'react'

export interface WaitlistProps {
  tagline?: string
  headline?: string
  description?: string
  ctaText?: string
  placeholder?: string
  /** Optional media element - presence determines layout (side-by-side with media, centered without) */
  media?: ReactNode
}

export interface CodeBlockProps {
  filename?: string
  children?: ReactNode
}

export interface ImageMediaProps {
  src: string
  alt?: string
}

export interface VideoMediaProps {
  src: string
}

export const Waitlist: ComponentType<WaitlistProps>
export const CodeBlock: ComponentType<CodeBlockProps>
export const ImageMedia: ComponentType<ImageMediaProps>
export const VideoMedia: ComponentType<VideoMediaProps>

export default Waitlist
