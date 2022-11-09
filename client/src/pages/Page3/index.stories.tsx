import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
    import { Page3 } from '.';

export default {
  title: 'GITECH/Page3',
  component: Page3,
} as ComponentMeta<typeof Page3>;

const Template: ComponentStory<typeof Page3> = () => <Page3 />;

export const Primary = Template.bind({});
