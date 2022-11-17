import { Args, Story } from '@storybook/react'
import NearBy from './index'

// components
import Nearby from './index'

export default {
  title: 'Components/NearBy',
  component: NearBy
}

export const MapDefault: Story<Args> = (args) => <NearBy {...args} />
