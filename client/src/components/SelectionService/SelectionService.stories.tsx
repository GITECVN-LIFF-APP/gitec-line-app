// Lib
import { Args, Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// components
import SelectionService from '@components/SelectionService'

export default {
  title: 'SelectionService',
  component: SelectionService,
}

export const SelectionDefault: Story<Args> = (args) => (
  <BrowserRouter>
    <SelectionService {...args} />
  </BrowserRouter>
)
