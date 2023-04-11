import type { ComponentMeta } from '@storybook/react'

import HelloPage from './HelloPage'

export const generated = () => {
  return <HelloPage />
}

export default {
  title: 'Pages/HelloPage',
  component: HelloPage,
} as ComponentMeta<typeof HelloPage>
