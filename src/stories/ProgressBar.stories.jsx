import React from 'react';
import {ProgressBar} from '../components/Layouts/ProgressBar';

export default {
  title: 'Layout/Melody ProgressBar',
  component: ProgressBar,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const ProgressBarTemplate = Template.bind({});
ProgressBarTemplate.args = {
  size: 'medium',
  progress: 25,
  label: "This is the label"
}