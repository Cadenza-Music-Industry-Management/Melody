import React from 'react';
import {StrippedListLayout} from '../components/Layouts/StrippedListLayout';

export default {
  title: 'Layout/Melody Stripped List Layout',
  component: StrippedListLayout,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <StrippedListLayout {...args} />;

export const StrippedListLayoutTemplate = Template.bind({});
StrippedListLayoutTemplate.args = {
  size: 'medium',
  label: "Title here",
  subLabel: 'This is where the sub title info would go'
}