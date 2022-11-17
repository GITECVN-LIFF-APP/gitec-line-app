import { Args, Story } from '@storybook/react'

// components
import Header from './index'

export default {
  title: 'Components/Header',
  component: Header
}

export const HeaderDefault: Story<Args> = (args) => <Header {...args} />