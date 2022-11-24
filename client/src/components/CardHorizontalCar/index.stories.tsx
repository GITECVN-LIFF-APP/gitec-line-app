// Lib
import { Args, Story } from '@storybook/react'

// Components
import CardHorizontalCar from '@components/CardHorizontalCar'

export default {
  title: 'CardHorizontalCar',
  component: CardHorizontalCar,
}

export const CardHorizontalDefault: Story<Args> = (args) => <CardHorizontalCar {...args} />
