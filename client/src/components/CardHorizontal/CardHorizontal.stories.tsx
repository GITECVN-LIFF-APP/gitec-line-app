// Lib
import { Args, Story } from '@storybook/react'

// Components
import CardHorizontal from '@components/CardHorizontal'

export default {
  title: 'CardHorizontal',
  component: CardHorizontal,
}

export const CardHorizontalDefault: Story<Args> = (args) => <CardHorizontal image={''} title={''} description={''} {...args} />
