import React from 'react';
import {RadioButton} from '../components/Inputs/RadioButton';

export default {
  title: 'Inputs/Melody Radio Button',
  component: RadioButton,
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

const Template = (args) => <RadioButton {...args} />;

export const RadioButtonTemplate = Template.bind({});
RadioButtonTemplate.args = {
  variant: "primary",
  size: 'medium',
  label: 'Top label'
}