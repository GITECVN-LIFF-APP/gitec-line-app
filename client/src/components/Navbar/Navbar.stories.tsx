// Lib
import { Args, Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// components
import Navbar from './index'

export default {
  title: 'Navbar',
  component: Navbar,
}

export const NavbarDefault: Story<Args> = (args) => (
  <BrowserRouter>
    <Navbar children={undefined} {...args} />
  </BrowserRouter>
)
