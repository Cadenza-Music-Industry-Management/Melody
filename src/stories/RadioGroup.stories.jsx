import React from 'react';
import {RadioGroup} from '../components/Inputs/RadioGroup';

export default {
  title: 'Inputs/Melody Radio Group',
  component: RadioGroup,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['info', 'alert', 'okay', 'caution', 'dark', 'light'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <RadioGroup {...args} />;

export const RadioGroupTemplate = Template.bind({});
RadioGroupTemplate.args = {
  variant: "info",
  size: 'medium',
  label: 'Radio Group'
}