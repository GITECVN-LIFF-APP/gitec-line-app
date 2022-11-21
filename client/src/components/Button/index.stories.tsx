// Lib
import type { ComponentStory, ComponentMeta } from '@storybook/react'

// Component
import Button from '@components/Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button Content',
  className: 'rounde',
}
