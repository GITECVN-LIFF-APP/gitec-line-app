import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '@components';

export default {
  title: 'GITECH/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {
  name: 'facebook fs-3',
};

export const Skype = Template.bind({});
Skype.args = {
  name: 'skype fs-3',
};

export const Twitter = Template.bind({});
Twitter.args = {
  name: 'twitter fs-3',
};
