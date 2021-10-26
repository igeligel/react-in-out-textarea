import React from 'react';
import styled from 'styled-components';
import { IDimensionValues } from 'react-use-dimensions';
import { IInOption, IOutOption } from './types';

interface IContainer {
  minHeight?: string;
  maxHeight?: string;
}

const Container = styled.div<IContainer>`
  position: absolute;
  width: 100%;
  min-height: ${props => props.minHeight || 'initial'};
  max-height: ${props => props.maxHeight || 'initial'};
  background-color: white;
  opacity: 0.99;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  padding-left: 10px;
  padding-right: 20px;
  box-sizing: border-box;
  padding-top: 8px;
  padding-bottom: 8px;
  z-index: 2;
`;

const OverlayOption = styled.div`
  box-sizing: border-box;
  font-size: 14px;
  font-family: Roboto;
  line-height: 30px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 10px;
  display: inline-block;
  min-width: 15%;
  cursor: pointer;

  :hover {
    border-radius: 3px;
    background-color: #f5f5f5;
  }
`;

type Options = Array<IInOption | IOutOption>;

interface IOptionsOverlay<T extends Options> {
  convertCardSizes: IDimensionValues;
  shownMenuOptions: T;
  allMenuOptions: T;
  onAllMenuOptionsUpdate: (updatedOptions: T) => void;
  onOptionClick: (option: IInOption | IOutOption) => void;
}

export const OptionsOverlay = <T extends Options>(
  props: IOptionsOverlay<T>
) => {
  const {
    convertCardSizes,
    shownMenuOptions,
    allMenuOptions,
    onAllMenuOptionsUpdate,
    onOptionClick,
  } = props;

  return (
    <Container
      minHeight={`${convertCardSizes.height}px`}
      maxHeight={`${convertCardSizes.height}px`}
    >
      {shownMenuOptions.map(option => {
        return (
          <OverlayOption
            key={option.name}
            onClick={() => {
              const updatedOptions = [
                ...allMenuOptions.map(outOption => ({
                  ...outOption,
                  active: outOption.name === option.name,
                })),
              ];
              onAllMenuOptionsUpdate(updatedOptions as T);
              onOptionClick(option);
            }}
          >
            {option.name}
          </OverlayOption>
        );
      })}
    </Container>
  );
};
