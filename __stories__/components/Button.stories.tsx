// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Button} from '@/src/components/Button';

// TODO: add action for onPress
export default {
  title: 'components/Button',
  component: Button,
  argTypes: {onPress: {action: 'onPress'}},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Purple: ComponentStory<typeof Button> = Template.bind({});

Purple.args = {
  text: 'Hello World',
  color: 'purple',
};
export const Red: ComponentStory<typeof Button> = Template.bind({});

Red.args = {
  text: 'Hello World',
  color: 'red',
};
