import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
    import { Page1 } from '.';

export default {
  title: 'GITECH/Page1',
  component: Page1,
} as ComponentMeta<typeof Page1>;

const Template: ComponentStory<typeof Page1> = () => <Page1 />;

export const Primary = Template.bind({});
