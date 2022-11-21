// Lib
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Components
import Input from '@components/Input'

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Sample = Template.bind({})
Sample.args = {
  label: 'Input name',
}
