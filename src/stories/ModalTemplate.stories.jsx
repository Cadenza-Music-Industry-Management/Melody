import React from 'react';
import {ModalTemplate} from '../components/Layouts/ModalTemplate';

export default {
  title: 'Layout/Melody Modal Template',
  component: ModalTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <ModalTemplate {...args} />;

export const Modal = Template.bind({});
Modal.args = {
  variant: "alert",
  size: 'medium',
  open: true
}