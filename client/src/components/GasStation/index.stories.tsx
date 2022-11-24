// Lib
import { Args, Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import GasStation from '@components/GasStation'


export default {
  title: 'GasStation',
  component: GasStation,
}

export const GasStationDefault: Story<Args> = (args) => (
  <BrowserRouter>
    <GasStation {...args} />
  </BrowserRouter>
)
