import React from 'react';
import {Alert} from '../components/Layouts/Alert';

export default {
  title: 'Layout/Melody Alert',
  component: Alert,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select', options: ['info', 'alert', 'okay', 'caution', 'dark', 'light'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <Alert {...args} />;

export const AlertTemplate = Template.bind({});
AlertTemplate.args = {
  variant: "info",
  size: 'medium',
  text: 'Alert'
}