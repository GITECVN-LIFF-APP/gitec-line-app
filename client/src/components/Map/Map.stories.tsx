import { Args, Story } from '@storybook/react'

// components
import Map from './index'

export default {
  title: 'Components/Map',
  component: Map
}

export const MapDefault: Story<Args> = (args) => <Map {...args} />
