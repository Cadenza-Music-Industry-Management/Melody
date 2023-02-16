import React from 'react';
import {Breadcrumb} from '../components/Layouts/Breadcrumb';

export default {
  title: 'Layout/Melody Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['transparent', 'light', 'dark'] }
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <Breadcrumb {...args} />;

export const BreadcrumbTemplate = Template.bind({});
BreadcrumbTemplate.args = {
  size: 'medium',
  variant: 'light'
}