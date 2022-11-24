// Lib
import { Args, Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import Menu from '@components/Menu'


export default {
  title: 'Menu',
  component: Menu,
}

export const HomeDefault: Story<Args> = (args) => (
  <BrowserRouter>
    <Menu {...args} />
  </BrowserRouter>
)
