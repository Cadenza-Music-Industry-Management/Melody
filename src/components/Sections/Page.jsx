// ./src/stories/Page.js

import React, {useState} from 'react';

import { NavigationBar } from './NavigationBar';
import './Page.css';

export const Page = () => {
  const [user, setUser] = useState();

  return (
      <article>
        <NavigationBar
            user={user}
            onLogin={() => setUser({ name: 'Jane Doe' })}
            onLogout={() => setUser(undefined)}
            onCreateAccount={() => setUser({ name: 'Jane Doe' })}
        />

        <section className="dark:text-white dark:bg-slate-800">
          <h2>Pages in Storybook</h2>
          <p>
            We recommend building UIs with a{' '}
            <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
              <strong>component-driven</strong>
            </a>{' '}
            process starting with atomic components and ending with pages.
          </p>
          <p>
            Render pages with mock data. This makes it easy to build and review page states without
            needing to navigate to them in your app. Here are some handy patterns for managing page
            data in Storybook:
          </p>
        </section>
      </article>
  );
};