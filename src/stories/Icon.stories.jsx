import React from 'react';
import {Icon} from '../components/Layouts/Icon';

export default {
  title: 'Layout/Melody Icon',
  component: Icon,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['info', 'alert', 'okay', 'caution', 'dark', 'light'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <Icon {...args} />;

export const IconTemplate = Template.bind({});
IconTemplate.args = {
  size: 'medium',
  icon: 'melody-artist'
}