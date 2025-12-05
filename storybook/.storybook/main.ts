import type { StorybookConfig } from '@storybook/react-vite'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: {
          mdxPluginOptions: {
            mdxCompileOptions: {
              remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
            },
          },
        },
      },
    },
    '@storybook/addon-interactions',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: [
    { from: '../../package/templates', to: '/templates' },
    { from: '../../package/styles', to: '/styles' },
  ],
}

export default config
