import React from 'react';
import {CadenzaPricingLayout} from '../components/Layouts/CadenzaPricingLayout';

export default {
  title: 'Layout/Melody Cadenza Pricing Layout',
  component: CadenzaPricingLayout,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <CadenzaPricingLayout {...args} />;

export const CadenzaPricingLayoutTemplate = Template.bind({});
CadenzaPricingLayoutTemplate.args = {
  size: 'medium'
}