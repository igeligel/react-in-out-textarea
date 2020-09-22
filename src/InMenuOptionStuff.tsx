import React from 'react';
import useDimensions, { IDimensionValues } from 'react-use-dimensions';
import { CaseButton } from './CaseButton';
import { IInOption, InOptions } from './types';

interface IInMenuOptionStuff {
  inOptionsMenuRefSizes: IDimensionValues;
  liveMeasure: boolean;
  menuOptions: InOptions;
  option: IInOption;
  inOptions: InOptions;
  onInOptionsUpdate: (newInOptions: InOptions) => void;
  setMenuOptions: React.Dispatch<React.SetStateAction<InOptions>>;
}

export const InMenuOptionStuff = (props: IInMenuOptionStuff) => {
  const {
    inOptionsMenuRefSizes,
    liveMeasure,
    menuOptions,
    option,
    inOptions,
    onInOptionsUpdate,
    setMenuOptions,
  } = props;

  const [suuuRef, suuSizes] = useDimensions({ liveMeasure });
  if (!inOptionsMenuRefSizes) return null;

  const shouldHide = suuSizes.x + suuSizes.width > inOptionsMenuRefSizes.x;

  if (shouldHide) {
    if (menuOptions.find((e: IInOption) => e.name === option.name)) {
      return null;
    }
    setMenuOptions([...menuOptions, option]);
    return null;
  } else {
    if (menuOptions.find((e: IInOption) => e.name === option.name)) {
      setMenuOptions([...menuOptions.filter(e => e.name !== option.name)]);
    }
  }

  return (
    <CaseButton
      ref={suuuRef}
      active={option.active}
      onClick={() => {
        const updatedOptions: InOptions = [
          ...inOptions.map((inOption: IInOption) => ({
            ...inOption,
            active: inOption.name === option.name,
          })),
        ];
        onInOptionsUpdate(updatedOptions);
      }}
    >
      {option.name}
    </CaseButton>
  );
};
