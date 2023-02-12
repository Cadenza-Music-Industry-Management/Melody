import React from 'react';
import {Checkbox} from '../components/Inputs/Checkbox';

export default {
  title: 'Inputs/Melody Checkbox',
  component: Checkbox,
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

const Template = (args) => <Checkbox {...args} />;

export const CheckboxTemplate = Template.bind({});
CheckboxTemplate.args = {
  variant: "primary",
  size: 'medium',
  label: 'Top label',
  subLabel: "This is the sub label"
}