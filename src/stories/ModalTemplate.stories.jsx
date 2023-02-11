import React from 'react';
import {ModalTemplate} from '../components/Layouts/ModalTemplate';

export default {
  title: 'Layout/Melody Modal Template',
  component: ModalTemplate,
  argTypes: {

  },
};

const Template = (args) => <ModalTemplate {...args} />;

export const Modal = Template.bind({});
Modal.args = {
  open: true,
  setOpen: (open) => {
    console.log(open)
  }
}