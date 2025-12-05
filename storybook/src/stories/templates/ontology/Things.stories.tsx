import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Layout from '@buildercss/core/templates/ontology/Layout'
import Things from '@buildercss/core/templates/ontology/Things'
import '@buildercss/core/templates/ontology/ontology.css'

const layoutProps = {
  logo: {
    src: '/templates/ontology/org-ai.svg',
    alt: 'org.ai logo',
    text: 'org.ai',
  },
  sections: [
    {
      title: 'Core Entities',
      links: [
        { href: '/Business', label: 'Business' },
        { href: '/Product', label: 'Product' },
        { href: '/Service', label: 'Service' },
        { href: '/Brand', label: 'Brand' },
        { href: '/Person', label: 'Person' },
      ],
    },
    {
      title: 'Events',
      links: [
        { href: '/Event', label: 'Event' },
        { href: '/Transaction', label: 'Transaction' },
        { href: '/Workflow', label: 'Workflow' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { href: '/Document', label: 'Document' },
        { href: '/Asset', label: 'Asset' },
        { href: '/Location', label: 'Location' },
      ],
    },
  ],
  toc: [
    { href: '#core-entities', label: 'Core Entities' },
    { href: '#events', label: 'Events' },
    { href: '#resources', label: 'Resources' },
  ],
  promo: {
    badge: 'New',
    headline: 'Upgrade to Pro',
    description: 'Get access to advanced features and priority support.',
    cta: {
      label: 'Learn More',
      href: '#',
    },
  },
}

const meta: Meta<typeof Things> = {
  title: 'Templates/Ontology/Things',
  component: Things,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <Layout {...layoutProps}>
        <Story />
      </Layout>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Things>

export const Directory: Story = {
  args: {
    title: 'Ontology Explorer',
    description: 'Browse all entities in the organization ontology.',
    categories: [
      {
        name: 'Core Entities',
        description: 'Fundamental business objects that form the backbone of organizational data.',
        entities: [
          {
            name: 'Business',
            href: '/Business',
            description: 'A company or organization that offers products or services.',
            icon: '🏢',
            propertyCount: 9,
            relationshipCount: 5,
          },
          {
            name: 'Product',
            href: '/Product',
            description: 'A tangible or intangible item offered for sale.',
            icon: '📦',
            propertyCount: 5,
            relationshipCount: 2,
          },
          {
            name: 'Service',
            href: '/Service',
            description: 'An intangible offering provided by a business.',
            icon: '🛠️',
            propertyCount: 6,
            relationshipCount: 3,
          },
          {
            name: 'Brand',
            href: '/Brand',
            description: 'A distinct identity for products or services.',
            icon: '🏷️',
            propertyCount: 4,
            relationshipCount: 2,
          },
          {
            name: 'Person',
            href: '/Person',
            description: 'An individual who interacts with the organization.',
            icon: '👤',
            propertyCount: 8,
            relationshipCount: 6,
          },
        ],
      },
      {
        name: 'Events',
        description: 'Time-based occurrences that track business activities.',
        entities: [
          {
            name: 'Event',
            href: '/Event',
            description: 'A significant occurrence in the business timeline.',
            icon: '📅',
            propertyCount: 5,
            relationshipCount: 3,
          },
          {
            name: 'Transaction',
            href: '/Transaction',
            description: 'A financial or data exchange between parties.',
            icon: '💳',
            propertyCount: 7,
            relationshipCount: 4,
          },
          {
            name: 'Workflow',
            href: '/Workflow',
            description: 'A sequence of steps to complete a business process.',
            icon: '🔄',
            propertyCount: 6,
            relationshipCount: 5,
          },
        ],
      },
      {
        name: 'Resources',
        description: 'Assets and materials used by the organization.',
        entities: [
          {
            name: 'Document',
            href: '/Document',
            description: 'A file or record containing information.',
            icon: '📄',
            propertyCount: 6,
            relationshipCount: 3,
          },
          {
            name: 'Asset',
            href: '/Asset',
            description: 'A resource with economic value owned by the business.',
            icon: '💎',
            propertyCount: 5,
            relationshipCount: 2,
          },
          {
            name: 'Location',
            href: '/Location',
            description: 'A physical or virtual place relevant to business operations.',
            icon: '📍',
            propertyCount: 4,
            relationshipCount: 3,
          },
        ],
      },
    ],
  },
}
