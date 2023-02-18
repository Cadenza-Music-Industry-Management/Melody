import React from 'react';
import {Label} from "../components/Layouts/Label";

export default {
  title: 'Layout/Melody Label',
  component: Label,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <Label {...args} />;

export const LabelTemplate = Template.bind({});
LabelTemplate.args = {
  size: 'medium',
  label: 'Label'
}