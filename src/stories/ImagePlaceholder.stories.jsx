import React from 'react';
import {ImagePlaceholder} from '../components/Layouts/ImagePlaceholder';

export default {
  title: 'Layout/Melody Image Placeholder',
  component: ImagePlaceholder,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <ImagePlaceholder {...args} />;

export const ImagePlaceholderTemplate = Template.bind({});
ImagePlaceholderTemplate.args = {
  size: 'medium',
}