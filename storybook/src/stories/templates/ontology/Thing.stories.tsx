import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Layout from 'buildercss/templates/ontology/Layout'
import Thing from 'buildercss/templates/ontology/Thing'
import 'buildercss/templates/ontology/ontology.css'

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
    { href: '#properties', label: 'Properties' },
    { href: '#relationships', label: 'Relationships' },
    { href: '#searches', label: 'Searches' },
    { href: '#actions', label: 'Actions' },
    { href: '#events', label: 'Events' },
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

const businessData = {
  name: 'Business',
  description: 'A business entity such as a company or organization that offers products or services to customers.',
  properties: [
    { name: 'name', type: 'string', description: 'The name of the business.' },
    { name: 'description', type: 'string', description: 'A brief description of the business.' },
    { name: 'website', type: 'URL', description: 'The official website of the business.' },
    { name: 'industry', type: 'string', description: 'The industry sector the business operates in.' },
    { name: 'foundedDate', type: 'date', description: 'The date the business was founded.' },
    { name: 'employees', type: 'integer', description: 'The number of employees in the business.' },
    { name: 'headquarters', type: 'string', description: "The location of the business's headquarters." },
    { name: 'revenue', type: 'number', description: 'The annual revenue of the business.' },
    { name: 'logo', type: 'URL', description: 'The logo image of the business.' },
  ],
  relationships: [
    { name: 'hasProduct', target: 'Product', description: 'Products offered by the business.' },
    { name: 'hasService', target: 'Service', description: 'Services provided by the business.' },
    { name: 'hasBrand', target: 'Brand', description: 'Brands owned by the business.' },
    { name: 'hasSubsidiary', target: 'Business', description: 'Subsidiary companies owned by the business.' },
    { name: 'hasPartner', target: 'Business', description: 'Partner businesses associated with the business.' },
  ],
  searches: [
    { name: 'OKRs', parameters: 'business: Business', description: 'Search for OKRs associated with the business.' },
  ],
  actions: [
    { name: 'launchProduct', object: 'Product', result: 'Event', description: 'Launch a new product.' },
    { name: 'offerService', object: 'Service', result: 'Event', description: 'Offer a new service.' },
    { name: 'rebrand', object: 'Brand', result: 'Event', description: 'Rebrand the business or a brand.' },
    { name: 'expandToMarket', object: 'string', result: 'Event', description: 'Expand business operations to a new market.' },
    { name: 'hireEmployee', object: 'Person', result: 'Event', description: 'Hire a new employee for the business.' },
  ],
  events: [
    { name: 'productLaunched', description: 'A new product has been launched by the business.' },
    { name: 'serviceOffered', description: 'A new service has been offered by the business.' },
    { name: 'businessRebranded', description: 'The business or a brand has been rebranded.' },
    { name: 'marketExpanded', description: 'The business has expanded operations to a new market.' },
    { name: 'employeeHired', description: 'A new employee has been hired by the business.' },
  ],
}

const meta: Meta<typeof Thing> = {
  title: 'Templates/Ontology/Thing',
  component: Thing,
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
type Story = StoryObj<typeof Thing>

export const Business: Story = {
  args: businessData,
}

export const Product: Story = {
  args: {
    name: 'Product',
    description: 'A tangible or intangible item offered by a business for sale or use.',
    properties: [
      { name: 'name', type: 'string', description: 'The name of the product.' },
      { name: 'description', type: 'string', description: 'A detailed description of the product.' },
      { name: 'price', type: 'number', description: 'The price of the product.' },
      { name: 'sku', type: 'string', description: 'Stock keeping unit identifier.' },
      { name: 'category', type: 'string', description: 'The category the product belongs to.' },
    ],
    relationships: [
      { name: 'belongsTo', target: 'Business', description: 'The business that offers this product.' },
      { name: 'hasReview', target: 'Review', description: 'Customer reviews of the product.' },
    ],
    actions: [
      { name: 'purchase', object: 'Order', result: 'Transaction', description: 'Purchase the product.' },
      { name: 'addToCart', object: 'Cart', result: 'Cart', description: 'Add the product to a shopping cart.' },
    ],
    events: [
      { name: 'productViewed', description: 'The product was viewed by a customer.' },
      { name: 'productPurchased', description: 'The product was purchased.' },
    ],
  },
}
