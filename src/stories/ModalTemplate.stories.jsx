import React from 'react';
import {ModalTemplate} from '../components/Sections/ModalTemplate';

export default {
  title: 'Section/Melody Modal Template',
  component: ModalTemplate,
  argTypes: {

  },
};

const Template = (args) => <ModalTemplate {...args} />;

export const Modal = Template.bind({});
Modal.args = {
  title: 'Title of modal',
  open: true,
  setOpen: (open) => {
    console.log(open)
  },
  children: <div className={"melody-p-5"}>
    <h1>test</h1>
  </div>
}