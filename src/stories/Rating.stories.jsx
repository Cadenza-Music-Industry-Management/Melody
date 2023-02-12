import React from 'react';
import {Rating} from '../components/Layouts/Rating';

export default {
  title: 'Layout/Melody Rating',
  component: Rating,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <Rating {...args} />;

export const RatingTemplate = Template.bind({});
RatingTemplate.args = {
  size: 'medium',
  rating: 3
}