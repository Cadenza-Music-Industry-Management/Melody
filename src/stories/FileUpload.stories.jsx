import React from 'react';
import {FileUpload} from '../components/Inputs/FileUpload';

export default {
  title: 'Inputs/Melody File Upload',
  component: FileUpload,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select', options: ['bar', 'dropzone'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <FileUpload {...args} />;

export const FileUploadTemplate = Template.bind({});
FileUploadTemplate.args = {
  variant: "bar",
  size: 'medium',
  label: "File Upload"
}