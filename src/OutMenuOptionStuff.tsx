import React from 'react';
import useDimensions, { IDimensionValues } from 'react-use-dimensions';
import { CaseButton } from './CaseButton';
import { IOutOption, OutOptions } from './types';

interface IOutMenuOptionStuff {
  outOptionsMenuRefSizes: IDimensionValues;
  liveMeasure: boolean;
  menuOptions: OutOptions;
  option: IOutOption;
  outOptions: OutOptions;
  onOutOptionsUpdate: (newInOptions: OutOptions) => void;
  setMenuOptions: React.Dispatch<React.SetStateAction<OutOptions>>;
}

export const OutMenuOptionStuff = (props: IOutMenuOptionStuff) => {
  const {
    outOptionsMenuRefSizes: inOptionsMenuRefSizes,
    liveMeasure,
    menuOptions,
    option,
    outOptions: inOptions,
    onOutOptionsUpdate: onInOptionsUpdate,
    setMenuOptions,
  } = props;

  const [suuuRef, suuSizes] = useDimensions({ liveMeasure });
  if (!inOptionsMenuRefSizes) return null;

  const shouldHide = suuSizes.x + suuSizes.width > inOptionsMenuRefSizes.x;

  if (shouldHide) {
    if (menuOptions.find((e: IOutOption) => e.name === option.name)) {
      return null;
    }
    setMenuOptions([...menuOptions, option]);
    return null;
  } else {
    if (menuOptions.find((e: IOutOption) => e.name === option.name)) {
      setMenuOptions([...menuOptions.filter(e => e.name !== option.name)]);
    }
  }

  return (
    <CaseButton
      ref={suuuRef}
      active={option.active}
      onClick={() => {
        const updatedOptions: OutOptions = [
          ...inOptions.map((inOption: IOutOption) => ({
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
