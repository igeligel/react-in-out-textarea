import React from 'react';
import { InOutTextarea, Props } from '../src';

export default {
  title: 'Welcome',
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = (props?: Partial<Props>) => (
  <div style={{ maxWidth: '1100px' }}>
    <InOutTextarea
      {...props}
      inOptions={[
        {
          name: 'English',
          active: false,
        },
        {
          name: 'German',
          active: true,
        },
        {
          name: 'Russian',
          active: false,
        },
        {
          name: 'Turkish',
          active: false,
        },
        {
          name: 'Swedish',
          active: false,
        },
        {
          name: 'Spanish',
          active: false,
        },
        {
          name: 'Chinese',
          active: false,
        },
        {
          name: 'Chinese 1',
          active: false,
        },
        {
          name: 'Chinese 2',
          active: false,
        },
        {
          name: 'Chinese 3',
          active: false,
        },
        {
          name: 'Chinese 4',
          active: false,
        },
        {
          name: 'Chinese 5',
          active: false,
        },
        {
          name: 'Chinese 6',
          active: false,
        },
        {
          name: 'Chinese 7',
          active: false,
        }
      ]}
    />
  </div>
);
