import { Args, Story } from '@storybook/react'

// components
import Homepage from './index'

export default {
  title: 'Components/Homepage',
  component: Homepage
}

export const HomepageDefault: Story<Args> = (args) => <Homepage {...args} />
