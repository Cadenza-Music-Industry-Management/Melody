import React from 'react';
import {SlideOver} from '../components/Layouts/SlideOver';

export default {
  title: 'Layout/Melody Slide Over',
  component: SlideOver,
  argTypes: {

  },
};

const Template = (args) => <SlideOver {...args} />;

export const SlideOverTemplate = Template.bind({});
SlideOverTemplate.args = {
  title: "Test",
  open: true,
  setOpen: (open) => {
    console.log(open)
  }
}