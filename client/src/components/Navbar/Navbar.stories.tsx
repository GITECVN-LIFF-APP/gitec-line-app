import { Args, Story } from '@storybook/react'

// components
import Navbar from './index'

export default {
  title: 'Components/Navbar',
  component: Navbar
}

export const NavbarDefault: Story<Args> = (args) => <Navbar {...args} />
