import React, { FC, HTMLAttributes, useState, useCallback } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import useDimensions from 'react-use-dimensions';
import { ConvertCard } from './styled/ConvertCard';
import { IconX } from './IconX';
import { IconCopy } from './IconCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { InMenuOptionStuff } from './InMenuOptionStuff';
import { OutMenuOptionStuff } from './OutMenuOptionStuff';
import { IInOption, InOptions, IOutOption, OutOptions } from './types';
import { CaseBar } from './CaseBar';
import { SideBar } from './SideBar';
import { TextAreaContentTop, TextAreaContentBottom } from './TextAreaContent';
import { TextAreaWrapper } from './TextAreaWrapper';
import { Spacer } from './Spacer';
import { OptionsOverlay } from './OptionsOverlay';
import { IconContainer } from './styled/IconContainer';
import { MoreOptionsIconContainer } from './MoreOptionsIconContainer';
import {
  IMaxContentLengthIndicator,
  MaxContentLengthIndicator,
} from './MaxContentLengthIndicator';

export { IInOption, IOutOption, InOptions, OutOptions };

const ConvertCardContent = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const OptionsContainer = styled.div`
  display: flex;

  @media (max-width: 576px) {
    display: none;
  }
`;

type ExampleTextProps = {
  smallerFont?: boolean;
  showCopyCursor?: boolean;
};

const Textarea = styled(TextareaAutosize)<ExampleTextProps>`
  box-sizing: border-box;
  border: 0;
  resize: none;
  flex-grow: 1;
  color: ${props => (props.theme.main === 'dark' ? '#fff' : '#14213d')};
  background-color: transparent;
  font-family: ${props =>
    props.theme && props.theme.font ? props.theme.font : 'Roboto'};
  font-size: ${props => (props.smallerFont ? '1.2em' : '1.61em')};
  ${props => (props.showCopyCursor ? 'cursor: text;' : '')};
  width: 100%;

  ::placeholder {
    color: ${props =>
      props.theme.main === 'dark'
        ? 'hsl(221, 51%, 64%)'
        : 'rgba(20, 33, 61, 0.4)'};
  }

  :focus {
    outline: none;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const liveMeasure = true;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  inOptions: InOptions;
  inValue: string;
  outValue: string;
  onInInput: (text: string) => void;
  onInOptionsUpdate: (newInOptions: InOptions) => void;
  outOptions: OutOptions;
  onOutOptionsUpdate: (newOutOptions: OutOptions) => void;
  maxContentLength?: number;
  onCopy?: () => void;
  maxContentLengthIndicator?: null | IMaxContentLengthIndicator;
}

export const InOutTextarea: FC<Props> = props => {
  const [menuInOptions, setMenuInOptions] = useState<InOptions>([]);
  const [menuOutOptions, setMenuOutOptions] = useState<OutOptions>([]);
  const [inOptionsMenuRef, inOptionsMenuRefSizes] = useDimensions({
    liveMeasure,
  });
  const [outOptionsMenuRef, outOptionsMenuRefSizes] = useDimensions({
    liveMeasure,
  });
  const [convertCardRef, convertCardSizes] = useDimensions({ liveMeasure });

  const [showAdditionalInOptions, setShowAdditionalInOptions] = useState<
    boolean
  >(false);

  const [showAdditionalOutOptions, setShowAdditionalOutOptions] = useState<
    boolean
  >(false);

  const onInMoreOptionsClick = useCallback(() => {
    setShowAdditionalOutOptions(false);
    setShowAdditionalInOptions(!showAdditionalInOptions);
  }, [showAdditionalInOptions]);

  const onOutMoreOptionsClick = useCallback(() => {
    setShowAdditionalInOptions(false);
    setShowAdditionalOutOptions(!showAdditionalOutOptions);
  }, [showAdditionalOutOptions]);

  const {
    inOptions,
    inValue,
    onInInput,
    onInOptionsUpdate,
    outOptions,
    onOutOptionsUpdate,
    outValue,
    maxContentLength,
    onCopy,
    maxContentLengthIndicator,
  } = props;

  return (
    <ConvertCard>
      <CaseBar>
        <SideBar>
          <OptionsContainer>
            {inOptions
              .sort(a => {
                if (a.active) return -1;
                return 0;
              })
              .map(option => {
                return (
                  <InMenuOptionStuff
                    inOptionsMenuRefSizes={inOptionsMenuRefSizes}
                    liveMeasure={liveMeasure}
                    menuOptions={menuInOptions}
                    option={option}
                    inOptions={inOptions}
                    onInOptionsUpdate={onInOptionsUpdate}
                    setMenuOptions={setMenuInOptions}
                  />
                );
              })}
          </OptionsContainer>
          <MoreOptionsIconContainer
            ref={inOptionsMenuRef}
            onClick={onInMoreOptionsClick}
            active={showAdditionalInOptions}
          />
        </SideBar>
        <Spacer />
        <SideBar>
          <OptionsContainer>
            {outOptions
              .sort(a => {
                if (a.activeClicked) return -1;
                if (a.active) return -1;
                return 0;
              })
              .map(option => {
                return (
                  <OutMenuOptionStuff
                    outOptionsMenuRefSizes={outOptionsMenuRefSizes}
                    liveMeasure={liveMeasure}
                    menuOptions={menuOutOptions}
                    option={option}
                    outOptions={outOptions}
                    onOutOptionsUpdate={onOutOptionsUpdate}
                    setMenuOptions={setMenuOutOptions}
                  />
                );
              })}
          </OptionsContainer>
          <MoreOptionsIconContainer
            right
            ref={outOptionsMenuRef}
            onClick={onOutMoreOptionsClick}
            active={showAdditionalOutOptions}
          />
        </SideBar>
      </CaseBar>
      <ConvertCardContent ref={convertCardRef}>
        {showAdditionalOutOptions && (
          <OptionsOverlay
            convertCardSizes={convertCardSizes}
            shownMenuOptions={menuOutOptions}
            allMenuOptions={outOptions}
            onAllMenuOptionsUpdate={onOutOptionsUpdate}
          />
        )}
        {showAdditionalInOptions && (
          <OptionsOverlay
            convertCardSizes={convertCardSizes}
            shownMenuOptions={menuInOptions}
            allMenuOptions={inOptions}
            onAllMenuOptionsUpdate={onInOptionsUpdate}
          />
        )}
        <TextAreaContentTop>
          <Flex>
            <TextAreaWrapper>
              <Textarea
                data-test="from-textarea"
                placeholder="..."
                rows={2}
                smallerFont={false}
                value={inValue}
                maxLength={maxContentLength}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                  if (
                    event.target.value === null ||
                    event.target.value === undefined
                  )
                    return;
                  onInInput(event.target.value);
                }}
              />
            </TextAreaWrapper>
            <IconContainer onClick={() => onInInput('')}>
              <IconX size={32} />
            </IconContainer>
          </Flex>
          {maxContentLengthIndicator &&
            maxContentLengthIndicator.show &&
            maxContentLength && (
              <MaxContentLengthIndicator
                currentLength={inValue ? inValue.length : 0}
                maxContentLength={maxContentLength}
                maxContentLengthIndicator={maxContentLengthIndicator}
              />
            )}
        </TextAreaContentTop>
        <TextAreaContentBottom>
          <TextAreaWrapper>
            <Textarea
              disabled
              smallerFont={false}
              showCopyCursor={true}
              value={outValue}
            />
          </TextAreaWrapper>
          <CopyToClipboard
            text={outValue}
            onCopy={() => {
              if (onCopy) {
                onCopy();
              }
            }}
          >
            <IconContainer>
              <IconCopy size={24} />
            </IconContainer>
          </CopyToClipboard>
        </TextAreaContentBottom>
      </ConvertCardContent>
    </ConvertCard>
  );
};
