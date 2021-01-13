export interface IInOption {
  name: string;
  active: boolean;
  key?: string;
}

export type InOptions = Array<IInOption>;

export interface IOutOption extends IInOption {
  activeClicked: boolean;
}

export type OutOptions = Array<IOutOption>;
