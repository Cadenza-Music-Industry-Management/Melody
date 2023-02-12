import React from 'react';
import {TabbedLayout} from '../components/Layouts/TabbedLayout';

export default {
  title: 'Inputs/Melody Tabbed Layout',
  component: TabbedLayout,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <TabbedLayout {...args} />;

export const TabbedLayoutTemplate = Template.bind({});
TabbedLayoutTemplate.args = {
  vertical: false,
  size: 'medium'
}