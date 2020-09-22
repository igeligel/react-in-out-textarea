export interface IInOption {
  name: string;
  active: boolean;
}

export type InOptions = Array<IInOption>;

export interface IOutOption extends IInOption {
  activeClicked: boolean;
}

export type OutOptions = Array<IOutOption>;
