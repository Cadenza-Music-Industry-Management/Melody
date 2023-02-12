import React from 'react';
import {Accordion} from '../components/Layouts/Accordion';

export default {
  title: 'Layout/Melody Accordion',
  component: Accordion,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <Accordion {...args} />;

export const AccordionTemplate = Template.bind({});
AccordionTemplate.args = {
  size: 'medium'
}