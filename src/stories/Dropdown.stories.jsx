import React from 'react';
import {Dropdown} from '../components/Inputs/Dropdown';

export default {
  title: 'Inputs/Melody Dropdown',
  component: Dropdown,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <Dropdown {...args} />;

export const DropdownTemplate = Template.bind({});
DropdownTemplate.args = {
  label: 'Dropdown',
  name: 'DropdownName',
  value: { label: "Test", value: 0 },
  options: [{ label: "Test", value: 0 }, { label: "Test 2", value: 1 }],
  onChange: (value) => console.log(value),
  isClearable: true,
  isSearchable: true,
  isDisabled: false,
  isLoading: false
}