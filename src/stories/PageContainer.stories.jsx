import React from 'react';
import {PageContainer} from '../components/Sections/PageContainer';

export default {
  title: 'Section/Melody Page Container',
  component: PageContainer,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <PageContainer {...args}>
  <h1>test</h1>
</PageContainer>;

export const PageContainerTemplate = Template.bind({});
PageContainerTemplate.args = {
  title: 'Title',
  buttonLabel: 'X'
}