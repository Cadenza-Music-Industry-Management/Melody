import React from 'react';
import {Spinner} from '../components/Layouts/Spinner';

export default {
  title: 'Layout/Melody Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <Spinner {...args} />;

export const SpinnerTemplate = Template.bind({});
SpinnerTemplate.args = {
  size: 'medium'
}