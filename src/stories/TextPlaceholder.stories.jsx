import React from 'react';
import {TextPlaceholder} from '../components/Layouts/TextPlaceholder';

export default {
  title: 'Layout/Melody Text Placeholder',
  component: TextPlaceholder,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['blurb', 'paragraph'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <TextPlaceholder {...args} />;

export const TextPlaceholderTemplate = Template.bind({});
TextPlaceholderTemplate.args = {
  variant: "paragraph",
  size: 'medium',
  text: 'Text Placeholder'
}