import React from 'react';
import useDimensions, { IDimensionValues } from 'react-use-dimensions';
import { CaseButton } from './CaseButton';
import { IOption, Options } from './types';

export interface IMenuOptionStuff {
  optionsMenuRefSizes: IDimensionValues;
  liveMeasure: boolean;
  menuOptions: Options;
  option: IOption;
  options: Options;
  onOptionsUpdate: (newOptions: Options) => void;
  setMenuOptions: React.Dispatch<React.SetStateAction<Options>>;
  className?: string;
}

export const MenuOptionStuff = (props: IMenuOptionStuff) => {
  const {
    optionsMenuRefSizes,
    liveMeasure,
    menuOptions,
    option,
    options,
    onOptionsUpdate,
    setMenuOptions,
    className,
  } = props;

  const [suuuRef, suuSizes] = useDimensions({ liveMeasure });
  if (!optionsMenuRefSizes) return null;

  const shouldHide = suuSizes.x + suuSizes.width > optionsMenuRefSizes.x;

  if (shouldHide) {
    if (menuOptions.find((e: IOption) => e.name === option.name)) {
      return null;
    }
    setMenuOptions([...menuOptions, option]);
    return null;
  } else {
    if (menuOptions.find((e: IOption) => e.name === option.name)) {
      setMenuOptions([...menuOptions.filter(e => e.name !== option.name)]);
    }
  }

  return (
    <CaseButton
      ref={suuuRef}
      className={className}
      active={option.active}
      onClick={() => {
        const updatedOptions: Options = [
          ...options.map((inOption: IOption) => ({
            ...inOption,
            active: inOption.name === option.name,
          })),
        ];
        onOptionsUpdate(updatedOptions);
      }}
    >
      {option.name}
    </CaseButton>
  );
};
