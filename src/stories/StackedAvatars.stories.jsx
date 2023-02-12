import React from 'react';
import {StackedAvatars} from '../components/Layouts/StackedAvatars';

export default {
  title: 'Layout/Melody Stacked Avatars',
  component: StackedAvatars,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <StackedAvatars {...args} />;

export const PlaceholderStackedAvatars = Template.bind({});
PlaceholderStackedAvatars.args = {
  size: 'medium'
}

//TODO need image example component here