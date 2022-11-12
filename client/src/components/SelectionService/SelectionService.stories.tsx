import { Args, Story } from '@storybook/react'

// components
import Selection from './index'

export default {
  title: 'Components/SelectionService',
  component: Selection
}

export const SelectionDefault: Story<Args> = (args) => <Selection {...args} />
