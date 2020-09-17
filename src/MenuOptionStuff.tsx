import React from 'react';
import useDimensions, { IDimensionValues } from 'react-use-dimensions';
import { CaseButton } from './CaseButton';
import { IInOption } from './types';

interface IMenuOptionStuff {
  inOptionsMenuRefSizes: IDimensionValues;
  liveMeasure: boolean;
  menuOptions: IInOption[];
  option: IInOption;
  inOptions: Array<IInOption>;
  onInOptionsUpdate: (newInOptions: Array<IInOption>) => void;
  setMenuOptions: React.Dispatch<React.SetStateAction<IInOption[]>>;
}

export const MenuOptionStuff = (props: IMenuOptionStuff) => {
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
    if (menuOptions.find((e: IInOption) => e.name === option.name)) return null;
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
        const updatedOptions: IInOption[] = [
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
