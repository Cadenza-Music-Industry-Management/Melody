import React from 'react';
import {Tooltip} from "../components/Layouts/Tooltip";
import {Button} from "../components/Inputs/Button";

export default {
  title: 'Layout/Melody Tooltip',
  component: Tooltip,
  argTypes: {

  },
};

const Template = (args) => <Tooltip {...args}>
  <Button label={'Button'} />
</Tooltip>;

export const TooltipTemplate = Template.bind({});
TooltipTemplate.args = {
  message: 'Test'
}