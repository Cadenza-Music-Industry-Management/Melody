import React from 'react';
import {StripedListLayout} from '../components/Sections/StripedListLayout';

export default {
  title: 'Section/Melody Stripped List Layout',
  component: StripedListLayout,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <StripedListLayout {...args} />;

export const StrippedListLayoutTemplate = Template.bind({});
StrippedListLayoutTemplate.args = {
  size: 'medium',
  label: "Title here",
  subLabel: 'This is where the sub title info would go'
}