import React from 'react';
import {DatePicker} from '../components/Inputs/DatePicker';

export default {
  title: 'Inputs/Melody Date Picker',
  component: DatePicker,
  argTypes: {

  },
};

const Template = (args) => <DatePicker {...args} />;

export const DatePickerTemplate = Template.bind({});
DatePickerTemplate.args = {
  label: {
    label: 'Date Picker'
  },
  startDate: new Date(),
  endDate: new Date(),
  onChange: (dates) => console.log(dates),
}