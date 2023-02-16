import React from 'react';
import {Banner} from '../components/Layouts/Banner';

export default {
  title: 'Layout/Melody Banner',
  component: Banner,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <Banner {...args} />;

export const BannerTemplate = Template.bind({});
BannerTemplate.args = {
  label: 'New Layout',
  subLabel: 'Welcome to our newly launched layout of Cadenza MIM!'
}