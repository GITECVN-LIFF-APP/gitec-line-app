// Lib
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Components
import TextArea from '@components/TextArea'

export default {
  title: 'TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />

export const Sample = Template.bind({})
Sample.args = {
  label: 'Agenda',
}
