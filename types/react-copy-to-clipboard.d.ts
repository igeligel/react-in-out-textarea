declare module 'react-copy-to-clipboard' {
  import * as React from "react";

  interface Options {
    debug?: boolean;
    format?: "text/html" | "text/plain";
    message?: string;
  }

  interface IReactCopyToClipboard {
    children: React.ReactNode;
    text: string;
    onCopy?(text: string, result: boolean): void;
    options?: Options;
  }

  export const CopyToClipboard: (props: IReactCopyToClipboard) => JSX.Element
}