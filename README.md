# react-in-out-textarea
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![](https://img.shields.io/github/license/igeligel/react-in-out-textarea) ![](https://img.shields.io/npm/v/react-in-out-textarea) ![](https://img.shields.io/github/workflow/status/igeligel/react-in-out-textarea/CI)

> A simple React.js component that is like Google Translate

![](./docs/showcase.png)

## Used by

- [caseconverter.pro](https://caseconverter.pro/app)

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
      onInInput={newValue => {
        setInValue(newValue);
        setOutValue(newValue);
      }}
      inOptions={inOptions}
      onInOptionsUpdate={newInOptions => {
        setInOptions(newInOptions);
      }}
      outOptions={outOptions}
      onOutOptionsUpdate={newOutOptions => {
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

And open http://localhost:6006/. That should give you the storybook preview.s

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
    <td align="center"><a href="https://www.kevinpeters.net/about/"><img src="https://avatars1.githubusercontent.com/u/12736734?v=4" width="100px;" alt=""/><br /><sub><b>Kevin Peters</b></sub></a><br /><a href="#business-igeligel" title="Business development">💼</a> <a href="https://github.com/igeligel/react-in-out-textarea/commits?author=igeligel" title="Code">💻</a> <a href="#design-igeligel" title="Design">🎨</a> <a href="#infra-igeligel" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-igeligel" title="Maintenance">🚧</a> <a href="#question-igeligel" title="Answering Questions">💬</a> <a href="https://github.com/igeligel/react-in-out-textarea/pulls?q=is%3Apr+reviewed-by%3Aigeligel" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!