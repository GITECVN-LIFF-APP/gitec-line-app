// Lib
import { Args, Story } from '@storybook/react'

// Components
import CardHorizontalMember from '@components/CardHorizontalMember'

export default {
  title: 'CardHorizontalMember',
  component: CardHorizontalMember,
}

export const CardHorizontalDefault: Story<Args> = (args) => <CardHorizontalMember {...args} />
