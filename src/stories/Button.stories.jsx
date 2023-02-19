import React from 'react';
import {Button} from '../components/Inputs/Button';

export default {
  title: 'Inputs/Melody Button',
  component: Button,
  argTypes: {
    // backgroundColor: { control: 'color' },
    color: {
      control: { type: 'select', options: ['primary', 'secondary', 'gray'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    },
    variant: {
      control: { type: 'select', options: ['solid', 'outlined'] }
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: {
    icon: 'melody-label',
    additionalStyles: {
      fontSize: 20
    }
  },
  color: 'primary',
  variant: 'outlined',
  size: 'medium',
  label: 'Button',
}

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  variant: 'solid',
  size: 'medium',
  label: 'Button',
}