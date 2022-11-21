// Lib
import { Args, Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// components
import Selection from './index'

export default {
  title: 'SelectionService',
  component: Selection,
}

export const SelectionDefault: Story<Args> = (args) => (
  <BrowserRouter>
    <Selection {...args} />
  </BrowserRouter>
)
