# Contributing Guide - react-in-out-textarea

Hello! Thank you for your interest in assisting with react-in-out-textarea. You may help in a variety of ways, and any assistance is always appreciated. All we ask is that you adhere to the following donation guidelines.

All third-party contributors agree that any additions they make will be distributed under the same open source license as the open source project.

## Taking your issue

Most common use case is to actually just take one ticket. I put a lot of effort into making the tickets as easy as possible to understand. Normally, every ticket can be worked on, even if you do not have a lot of knowledge about technologies that are used in this repository.

Once you are ready to take your issue, please write in the issue that you want to take the issue or assign it to yourself. With that you will make sure no one else will do the same work as you. If you are not sure if you can take the issue, please ask in the issue.

## Technologies we use

We use the following core technologies:

- React.js - [Docs](https://reactjs.org/docs/getting-started.html)
- Storybook - [Docs](https://storybook.js.org/docs/react/get-started/introduction)
- TypeScript - [Docs](https://www.typescriptlang.org/docs/handbook/intro.html)
- styled-components - [Docs](https://www.styled-components.com/docs/basics)

If you struggle with the usage of one of them, feel free to follow the documentation linked above or simply ask on your ticket. I will try to help you to understand or onboard quickly to the technologies.

## Setting up the project

You can find a lot of information on how to set up the project in the [development section of the README](https://github.com/igeligel/react-in-out-textarea#development).

## Creating Issues

You cab create issues, but please use the [GitHub search](https://github.com/igeligel/react-in-out-textarea/search) first to look if you can find the same issue. If you find an issue that you think you can fix, please create a new issue and we will discuss it.

If you cannot find a discussion or issue with the same problem or request, feel free to create a new issue, ideally with one of the templates that we have created and you [can find here when creating a new issue](https://github.com/igeligel/react-in-out-textarea/issues/new/choose).

## Code style

Code style is not important per se. But we like to have our code consistent. We use [Prettier](https://prettier.io/) to format our code with the following rules:

```json
{
  "prettier": {
    "printWidth": 80,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "es5"
  }
}
```

And ESLint to validate our code. You can check for linting errors with:

```sh
yarn lint
```

Normally, the autoformatter and the linter will be run before you commit code, because we have a pre-commit hook.
