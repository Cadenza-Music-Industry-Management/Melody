import React from 'react';
import {PageContainer} from '../components/Sections/PageContainer';
import {Button} from "../components/Inputs/Button";

export default {
  title: 'Section/Melody Page Container',
  component: PageContainer,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    },
    headerBGColor: {
      control: { type: 'text' }
    },
    headerTextColor: {
      control: { type: 'text' }
    }
  },
};

const Template = (args) => <PageContainer {...args}>
  <h1>test</h1>
</PageContainer>;

export const PageContainerTemplate = Template.bind({});
PageContainerTemplate.args = {
  title: 'Title',
  textAlignClass: 'melody-text-center',
  button: <Button label={"test"} color={"secondary"} />
}