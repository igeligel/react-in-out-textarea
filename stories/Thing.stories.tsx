import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ReactTooltip from 'react-tooltip';
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
    maxContentLength: {
      control: {
        type: 'range',
        options: {
          min: 1,
          max: 100,
          step: 1,
        },
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
          setOutOptions(newOutOptions);
        }}
        outValue={'Hello'}
      />
    </div>
  );
};

type CustomFontProps = Partial<Props> & { font: string };

export const _CustomFont = ({ font, ...args }: CustomFontProps) => {
  return (
    <ThemeProvider theme={{ font }}>
      <Default {...args} />
    </ThemeProvider>
  );
};

export const CustomFont = _CustomFont.bind({});

CustomFont.args = {
  font: 'Roboto',
};

type CustomMaxContentLengthProps = Partial<Props> & {
  maxContentLength: number;
};

const _WithLengthLimit = ({
  maxContentLength,
  ...args
}: CustomMaxContentLengthProps) => {
  const [inValue, setInValue] = useState<string>(
    `Has a limit = to ${maxContentLength}!`
  );

  return (
    <div style={{ maxWidth: '1100px' }}>
      <InOutTextarea
        inValue={inValue}
        outValue={inValue
          .split('')
          .reverse()
          .join('')}
        inOptions={[{ active: true, name: 'English' }]}
        outOptions={[{ active: true, name: 'German', activeClicked: true }]}
        onInInput={setInValue}
        onInOptionsUpdate={() => true}
        onOutOptionsUpdate={() => true}
        maxContentLength={maxContentLength}
        maxContentLengthIndicator={{
          show: true,
          // See https://www.npmjs.com/package/react-tooltip for more information
          tooltip: (
            <ReactTooltip place="top" type="dark" effect="solid">
              You can only use up to {maxContentLength} characters
            </ReactTooltip>
          ),
        }}
      />
    </div>
  );
};

export const WithLengthLimit = _WithLengthLimit.bind({});
WithLengthLimit.args = {
  maxContentLength: 100,
};

export const WithCustomKey = (props?: Partial<Props>) => {
  const [inValue, setInValue] = useState<string>('Hello');
  const [inOptions, setInOptions] = useState<Options>([
    {
      name: 'English',
      key: 'en',
      active: false,
    },
    {
      name: 'German',
      key: 'de',
      active: true,
    },
    {
      name: 'Russian',
      key: 'ru',
      active: false,
    },
  ]);

  const [outOptions, setOutOptions] = useState<Options>([
    {
      name: 'English',
      key: 'en',
      active: true,
    },
    {
      name: 'German',
      key: 'de',
      active: false,
    },
    {
      name: 'Russian',
      key: 'ru',
      active: false,
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
          setOutOptions(newOutOptions);
        }}
        outValue={'Hello'}
      />
    </div>
  );
};
