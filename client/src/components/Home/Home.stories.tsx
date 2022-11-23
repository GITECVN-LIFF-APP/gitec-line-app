// Lib
import { Args, Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import Home from '@components/Home'


export default {
  title: 'Home',
  component: Home,
}

export const HomeDefault: Story<Args> = (args) => (
  <BrowserRouter>
    <Home {...args} />
  </BrowserRouter>
)
