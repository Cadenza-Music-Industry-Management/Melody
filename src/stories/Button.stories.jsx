import React from 'react';
import {Button} from '../components/Inputs/Button';

export default {
  title: 'Inputs/Melody Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: 'medium',
  label: 'Button',
}

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: 'medium',
  label: 'Button',
}