import React from 'react';
import {ProgressBar} from '../components/Layouts/ProgressBar';

export default {
  title: 'Layout/Melody Progress Bar',
  component: ProgressBar,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['info', 'alert', 'okay', 'caution', 'dark', 'light'] }
    },
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
  label: 'This is the label in the progress bar',
  title: 'Upload Progress',
  subTitle: 'Processing'
}