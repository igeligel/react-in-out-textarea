import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { InOutTextarea, Props, InOptions, OutOptions } from '../src';

export default {
  title: 'Welcome',
  argTypes: {
    font: {
      control: {
        type: 'select',
        options: ['monospace', 'Roboto', 'Arial', 'Comic Sans'],
      },
    },
  },
};

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Default = (props?: Partial<Props>) => {
  const [inValue, setInValue] = useState<string>('Hello');
  const [inOptions, setInOptions] = useState<InOptions>([
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
    },
  ]);

  const [outOptions, setOutOptions] = useState<OutOptions>([
    {
      name: 'English',
      active: true,
      activeClicked: false,
    },
    {
      name: 'German',
      active: false,
      activeClicked: false,
    },
    {
      name: 'Russian',
      active: false,
      activeClicked: false,
    },
    {
      name: 'Chinese 1',
      active: false,
      activeClicked: false,
    },
    {
      name: 'Chinese 2',
      active: false,
      activeClicked: false,
    },
    {
      name: 'Chinese 3',
      active: false,
      activeClicked: false,
    },
    {
      name: 'Chinese 4',
      active: false,
      activeClicked: false,
    },
    {
      name: 'Chinese 5',
      active: false,
      activeClicked: false,
    },
    {
      name: 'Chinese 6',
      active: false,
      activeClicked: false,
    },
  ]);

  return (
    <div style={{ maxWidth: '1100px' }}>
      <InOutTextarea
        {...props}
        inValue={inValue}
        onInInput={newValue => setInValue(newValue)}
        inOptions={inOptions}
        onInOptionsUpdate={newInOptions => {
          setInOptions(newInOptions);
        }}
        outOptions={outOptions}
        onOutOptionsUpdate={newOutOptions => {
          setOutOptions(newOutOptions)
        }}
        outValue={"Hello"}
      />
    </div>
  );
};

type CustomFontProps = Partial<Props> & {font: string};

export const _CustomFont = ({font, ...args}: CustomFontProps) => {
  return (
    <ThemeProvider theme={{ font }}>
      <Default {...args}/>
    </ThemeProvider>
  );
}

export const CustomFont = _CustomFont.bind({});

CustomFont.args = {
  font: 'Roboto'
}

export const WithLengthLimit = () => {
  const [inValue, setInValue] = useState<string>("Has a limit = to 20!")

  return (
    <div style={{ maxWidth: '1100px' }}>
      <InOutTextarea
        inValue={inValue}
        outValue={inValue.split("").reverse().join("")}
        inOptions={[{ active: true, name: "English" }]}
        outOptions={[{ active: true, name: "German", activeClicked: true }]}
        onInInput={setInValue}
        onInOptionsUpdate={() => true}
        onOutOptionsUpdate={() => true}
        maxContentLength={20}
      />
    </div>
  );
}
