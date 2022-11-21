// Lib
import { Args, Story } from '@storybook/react'

// components
import Header from '@components/Header'

export default {
  title: 'Header',
  component: Header,
}

export const HeaderDefault: Story<Args> = (args) => <Header {...args} />
