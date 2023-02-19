import React from 'react';
import {Carousel} from '../components/Layouts/Carousel';

export default {
  title: 'Layout/Melody Carousel',
  component: Carousel,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    }
  },
};

const Template = (args) => <Carousel {...args} />;

export const CarouselTemplate = Template.bind({});
CarouselTemplate.args = {
  width: "100%",
  height: 300,
  images: ['https://pixy.org/src/477/4774988.jpg', 'https://www.onimodglobal.com/wp-content/uploads/2017/09/Reasons-why-having-a-professional-website-is-important.jpeg']
}