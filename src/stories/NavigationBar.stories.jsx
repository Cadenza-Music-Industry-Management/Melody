import { NavigationBar } from '../components/Sections/NavigationBar';

export default {
  title: 'Section/Melody Nav Bar',
  component: NavigationBar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <NavigationBar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Lars Olson',
    username: 'larsolson',
    uid: '1',
    icon: 'https://cadenzamim.com/static/media/lars.70f21bc82a7152b65c15.jpg'
  },
  navigation: [
    { name: 'Dashboard', onClick: () => console.log("a"), current: true }, //TODO support both onClick and href
    { name: 'Support', href: '/support', current: false },
    { name: 'Tools', href: '#', current: false },
    { name: 'Pricing', href: '#', current: false },
  ]
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
