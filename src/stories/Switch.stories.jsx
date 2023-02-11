import React from 'react';
import {Switch} from '../components/Inputs/Switch';

export default {
  title: 'Inputs/Melody Switch',
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // variant: {
    //   control: { type: 'select', options: ['info', 'alert', 'okay', 'caution', 'dark', 'light'] }
    // },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <Switch {...args} />;

export const SwitchTemplate = Template.bind({});
SwitchTemplate.args = {
  label: "Check box",
  size: 'medium',
  value: true,
  onChange: (checked) => console.log(checked)
}