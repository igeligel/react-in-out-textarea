# react-in-out-textarea

![](https://img.shields.io/github/license/igeligel/react-in-out-textarea) ![](https://img.shields.io/npm/v/react-in-out-textarea) ![](https://img.shields.io/github/workflow/status/igeligel/react-in-out-textarea/CI)

> A simple React.js component that is like Google Translate

![](./docs/showcase.png)

## Features

react-in-out-textarea is a highly customisable React component, for all of your input and output text needs.

Some of the unique features this component offers include:

- Textarea fields for input and output
- Customisable input and output labels
- Selection of input and output types
- Dropdown to show all your labels when they won't fit on one line
- Fully controllable
- Ability to copy the output text to your clipboard
- Minimalistic, visually pleasing style
- Variable content length


## Used by

- [caseconverter.pro](https://caseconverter.pro/app)

## Mentioned In

- [Hacktoberfest and Open Sourcing a React.js Component](https://www.kevinpeters.net/hacktoberfest-and-open-sourcing-a-react-js-component)

## Installation

<details>
  <summary>Install via NPM</summary>

  ```bash
  npm install --save react-in-out-textarea
  # You might want to install react-tooltip if you activate the max length option
  npm install --save react-tooltip
  ```
</details>

<details>
  <summary>Install via yarn</summary>

  ```bash
  yarn add react-in-out-textarea
  # You might want to install react-tooltip if you activate the max length option
  yarn add react-tooltip
  ```
</details>

## Props

| Name  | Type | Required |  Description |
| --- | --- | --- | --- |
| inValue  | string  | ✔️ | The value that is shown on the left-handed side. |
| outValue  | string  | ✔️ | The value that is shown on the right-handed side. |
| inOptions | array | ✔️ | An array of options filled with names marked true or false |
| onInInput | function | ✔️ | Called to listen to when the text on the left-hand side changes | ✔️ |
| onInOptionsUpdate | function | ✔️ | Updated with new options as the parameter when inOptions language clicked |
| outOptions | array | ✔️ | An array of options filled with names marked true or false and an activeClicked boolean |
| onOutOptionsUpdate | function | ✔️ | Updated with new options as the parameter when outOptions language clicked |
| maxContentLength | number | ❌  | Value that defines the maximum number of characters allowed in the text area. |
| maxContentLengthIndicator | Object | ❌ | An Object describing how the length indicator is shown. |

## Usage

<details>
 <summary>React + TypeScript</summary>

[CodeSandbox Example](https://codesandbox.io/s/react-in-out-textarea-typescript-react-egi57?file=/src/ExampleComponent.tsx)

Code Example:

```tsx
import React, { useState } from 'react';
import { InOutTextarea, InOptions, OutOptions } from 'react-in-out-textarea';

export const ExampleComponent = () => {
  const [inValue, setInValue] = useState<string>('');
  const [outValue, setOutValue] = useState<string>('');
  const [inOptions, setInOptions] = useState<InOptions>([
    {
      name: 'English',
      active: true,
    },
    {
      name: 'German',
      active: false,
    },
  ]);
  const [outOptions, setOutOptions] = useState<OutOptions>([
    {
      name: 'Chinese',
      active: true,
      activeClicked: false,
    },
  ]);

  return (
    <InOutTextarea
      inValue={inValue}
      outValue={outValue}
      onInInput={(newValue) => {
        setInValue(newValue);
        setOutValue(newValue);
      }}
      inOptions={inOptions}
      onInOptionsUpdate={(newInOptions) => {
        setInOptions(newInOptions);
      }}
      outOptions={outOptions}
      onOutOptionsUpdate={(newOutOptions) => {
        setOutOptions(newOutOptions);
      }}
    />
  );
};
```

</details>

<details>
  <summary>React + Javascript</summary>

  [CodeSandbox Example](https://codesandbox.io/s/react-in-out-textarea-javascript-react-kcl37?file=/src/ExampleComponent.js)

  Code Example:

  ```js
  import React, { useState } from "react";
  import { InOutTextarea } from "react-in-out-textarea";

  export const ExampleComponent = () => {
    const [inValue, setInValue] = useState("");
    const [outValue, setOutValue] = useState("");
    const [inOptions, setInOptions] = useState([
      {
        name: "English",
        active: true
      },
      {
        name: "German",
        active: false
      }
    ]);
    const [outOptions, setOutOptions] = useState([
      {
        name: "Chinese",
        active: true,
        activeClicked: false
      }
    ]);

    return (
      <InOutTextarea
        inValue={inValue}
        outValue={outValue}
        onInInput={(newValue) => {
          setInValue(newValue);
          setOutValue(newValue);
        }}
        inOptions={inOptions}
        onInOptionsUpdate={(newInOptions) => {
          setInOptions(newInOptions);
        }}
        outOptions={outOptions}
        onOutOptionsUpdate={(newOutOptions) => {
          setOutOptions(newOutOptions);
        }}
      />
    );
  };
  ```
</details>


## Development

To start developing you need the following tools installed:

- Node.js version 12 - [Download](https://nodejs.org/en/download/)
- yarn - [Download](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

After installing all the tools, you can install all dependencies by using in your terminal

```bash
yarn
```

After that just type:

```bash
yarn storybook
```

And open http://localhost:6006/. That should give you the storybook preview.

## Storybook

> Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building stunning UIs organized and efficient.

[Storybook](https://storybook.js.org/) is a tool used here for easy development of components for the web. Since this project uses React.js, the decision for storybook was kind of easy. It makes the development workflow seamless.

Our stories are saved under the [`./stories`](./stories) directory. Feel free to have a look.

## License

The code is licensed under [MIT](./LICENSE).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.kevinpeters.net/about/"><img src="https://avatars1.githubusercontent.com/u/12736734?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kevin Peters</b></sub></a><br /><a href="#business-igeligel" title="Business development">💼</a> <a href="https://github.com/igeligel/react-in-out-textarea/commits?author=igeligel" title="Code">💻</a> <a href="#design-igeligel" title="Design">🎨</a> <a href="#infra-igeligel" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-igeligel" title="Maintenance">🚧</a> <a href="#question-igeligel" title="Answering Questions">💬</a> <a href="https://github.com/igeligel/react-in-out-textarea/pulls?q=is%3Apr+reviewed-by%3Aigeligel" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://codepen.io/SheWolf/"><img src="https://avatars3.githubusercontent.com/u/11381749?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Amber</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=SheW0lf" title="Code">💻</a></td>
    <td align="center"><a href="http://katieannabelle.dev"><img src="https://avatars0.githubusercontent.com/u/50029859?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Katie</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=katieraby" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/hambali999"><img src="https://avatars3.githubusercontent.com/u/61378823?v=4?s=100" width="100px;" alt=""/><br /><sub><b>chorongbali</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=hambali999" title="Code">💻</a></td>
    <td align="center"><a href="http://devcer.github.io/"><img src="https://avatars1.githubusercontent.com/u/3799600?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Santosh Viswanatham</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=devcer" title="Code">💻</a> <a href="#infra-devcer" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/xen0m29"><img src="https://avatars2.githubusercontent.com/u/44066914?v=4?s=100" width="100px;" alt=""/><br /><sub><b>xen0m29</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=xen0m29" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/merelj"><img src="https://avatars3.githubusercontent.com/u/3993495?v=4?s=100" width="100px;" alt=""/><br /><sub><b>merelj</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=merelj" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Silver292"><img src="https://avatars3.githubusercontent.com/u/5542588?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tom Scott</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=Silver292" title="Code">💻</a> <a href="https://github.com/igeligel/react-in-out-textarea/commits?author=Silver292" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/aman601"><img src="https://avatars1.githubusercontent.com/u/22266039?v=4?s=100" width="100px;" alt=""/><br /><sub><b>aman601</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=aman601" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/dasshield"><img src="https://avatars0.githubusercontent.com/u/29631512?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dasshield</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=dasshield" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/av-dx"><img src="https://avatars3.githubusercontent.com/u/56360160?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aashwin Vaish</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=av-dx" title="Code">💻</a></td>
    <td align="center"><a href="https://silltho.github.io/"><img src="https://avatars0.githubusercontent.com/u/5812228?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thomas Siller</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=silltho" title="Code">💻</a></td>
    <td align="center"><a href="https://ggolubic.github.io/"><img src="https://avatars0.githubusercontent.com/u/25390319?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabrijel Golubić</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=ggolubic" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Tshamp7"><img src="https://avatars1.githubusercontent.com/u/54377075?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tom Shamp</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=Tshamp7" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/binkpitch"><img src="https://avatars0.githubusercontent.com/u/20456165?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Bink</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=binkpitch" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/GabrielFalcom"><img src="https://avatars0.githubusercontent.com/u/33941931?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabriel Paixão</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=GabrielFalcom" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/rohitgeddam"><img src="https://avatars2.githubusercontent.com/u/48797475?v=4?s=100" width="100px;" alt=""/><br /><sub><b>rohitgeddam</b></sub></a><br /><a href="#tool-rohitgeddam" title="Tools">🔧</a> <a href="https://github.com/igeligel/react-in-out-textarea/commits?author=rohitgeddam" title="Code">💻</a></td>
    <td align="center"><a href="https://emalsha.wordpress.com"><img src="https://avatars3.githubusercontent.com/u/7451018?v=4?s=100" width="100px;" alt=""/><br /><sub><b>G.H.B.Emalsha Rasad</b></sub></a><br /><a href="#tool-Emalsha" title="Tools">🔧</a> <a href="https://github.com/igeligel/react-in-out-textarea/commits?author=Emalsha" title="Documentation">📖</a></td>
    <td align="center"><a href="https://emmadawson.dev"><img src="https://avatars.githubusercontent.com/u/57045550?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Emma Dawson</b></sub></a><br /><a href="https://github.com/igeligel/react-in-out-textarea/commits?author=emmalearnscode" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
