// Lib
import { Args, Story } from '@storybook/react'

// Components
import Home from '@components/Home'
import { BrowserRouter } from 'react-router-dom'


export default {
  title: 'Home',
  component: Home,
}

export const HomeDefault: Story<Args> = (args) => <BrowserRouter> <Home {...args} /> </BrowserRouter>
