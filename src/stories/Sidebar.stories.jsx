import React from 'react';
import {Sidebar} from '../components/Sections/Sidebar';

export default {
  title: 'Section/Melody Sidebar',
  component: Sidebar,
  argTypes: {

  },
};

const Template = (args) => <Sidebar {...args} />;

export const SidebarTemplate = Template.bind({});
SidebarTemplate.args = {
  title: 'Title'
}