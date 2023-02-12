import React from 'react';
import {PaginationButtons} from '../components/Inputs/PaginationButtons';

export default {
  title: 'Inputs/Melody Pagination Buttons',
  component: PaginationButtons,
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
      control: { type: 'select', options: ['primary', 'secondary'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <PaginationButtons {...args} />;

export const PaginationButtonTemplate = Template.bind({});
PaginationButtonTemplate.args = {
  variant: "primary",
  size: 'medium'
}