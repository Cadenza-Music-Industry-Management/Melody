import React from 'react';
import {ColorPicker} from '../components/Inputs/ColorPicker';

export default {
  title: 'Inputs/Melody Color Picker',
  component: ColorPicker,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <ColorPicker {...args} />;

export const ColorPickerTemplate = Template.bind({});
ColorPickerTemplate.args = {
  size: 'medium',
  value: '#FFFFFF',
  onChange: (color) => console.log(color)
}