// Lib
import { Args, Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// components
import RegisterSuccess from './index'

export default {
  title: 'RegisterSuccess',
  component: RegisterSuccess,
}

export const RegisterSuccessDefault: Story<Args> = (args) => (
  <BrowserRouter>
    <RegisterSuccess />
  </BrowserRouter>
)
