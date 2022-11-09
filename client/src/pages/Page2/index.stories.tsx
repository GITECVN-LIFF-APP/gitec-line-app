import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
    import { Page2 } from '.';

export default {
  title: 'GITECH/Page2',
  component: Page2,
} as ComponentMeta<typeof Page2>;

const Template: ComponentStory<typeof Page2> = () => <Page2 />;

export const Primary = Template.bind({});
