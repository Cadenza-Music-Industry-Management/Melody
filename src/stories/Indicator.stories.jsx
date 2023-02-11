import React from 'react';
import {Indicator} from '../components/Layouts/Indicator';

export default {
  title: 'Layout/Melody Indicator',
  component: Indicator,
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

const Template = (args) => <Indicator {...args} />;

export const IndicatorTemplate = Template.bind({});
IndicatorTemplate.args = {
  variant: "info",
  size: 'medium',
  animated: false
}