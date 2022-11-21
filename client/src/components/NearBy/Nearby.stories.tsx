// Lib
import { Args, Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// components
import NearBy from '@components/NearBy'

export default {
  title: 'NearBy',
  component: NearBy,
}

export const MapDefault: Story<Args> = (args) => (
  <BrowserRouter>
    <NearBy {...args} />
  </BrowserRouter>
)
