import React from 'react';
import {TextInput} from "../components/Inputs/TextInput";

export default {
  title: 'Inputs/Melody Text Input',
  component: TextInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <TextInput {...args} />;

export const InputTemplate = Template.bind({});
InputTemplate.args = {
  variant: "primary",
  size: 'medium',
  label: 'Text Input',
  value: 'test'
}