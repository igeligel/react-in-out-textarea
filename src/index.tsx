import React, { FC, HTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import useDimensions from 'react-use-dimensions';
import { ConvertCard } from './styled/ConvertCard';
import { IconX } from './IconX';
import { IconCopy } from './IconCopy';
import { IconChevronDown } from './IconChevronDown';
import { IconChevronUp } from './IconChevronUp';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { InMenuOptionStuff } from './InMenuOptionStuff';
import { OutMenuOptionStuff } from './OutMenuOptionStuff';
import { IInOption, InOptions, IOutOption, OutOptions } from './types';
import { Content } from './Content';
import { CaseBar } from './CaseBar';

export { IInOption, IOutOption, InOptions, OutOptions };

const ConvertCardContent = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const LeftCaseBar = styled.div`
  flex: 1;
  display: flex;
  color: #14213d;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
`;

const MidCaseBar = styled.div``;

const RightCaseBar = styled.div`
  flex: 1;
  display: flex;
  color: #14213d;
  overflow: hidden;
  position: relative;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const OptionsContainer = styled.div`
  display: flex;

  @media (max-width: 576px) {
    display: none;
  }
`;

const LeftContentContent = styled.div`
  padding-left: 28px;
  padding-top: 20px;
  padding-bottom: 16px;
  padding-right: 14px;
  // border-right: 1px solid rgba(20, 33, 61, 0.2);
`;

const TextareaContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding-bottom: 26px;
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
  font-family: Roboto;
  font-size: ${props => (props.smallerFont ? '1.2em' : '1.61em')};
  ${props => (props.showCopyCursor ? 'cursor: text;' : '')};

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

const IconContainer = styled.div`
  cursor: pointer;
  color: rgb(190, 196, 210);

  :hover {
    color: rgba(107, 120, 146, 1);
  }
`;

interface IMoreOptionsIconContainer {
  right?: boolean;
}

const MoreOptionsIconContainer = styled.div<IMoreOptionsIconContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: hsl(222deg 18% 78%);
  position: absolute;
  right: 0;
  height: 100%;
  padding-left: 15px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 40%,
    rgba(255, 255, 255, 1) 100%
  );

  padding-right: ${props => (props.right ? '10px' : '0px')};

  :hover {
    color: hsl(220deg 15% 50%);
  }
`;

interface OptionsOverlay {
  minHeight?: string;
  maxHeight?: string;
}

const OptionsOverlay = styled.div<OptionsOverlay>`
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

const liveMeasure = true;

export interface Props extends HTMLAttributes<HTMLDivElement> {
  inOptions: InOptions;
  inValue: string;
  outValue: string;
  onInInput: (text: string) => void;
  onInOptionsUpdate: (newInOptions: InOptions) => void;
  outOptions: OutOptions;
  onOutOptionsUpdate: (newOutOptions: OutOptions) => void;
}

export const InOutTextarea: FC<Props> = props => {
  const [menuOptions, setMenuOptions] = useState<InOptions>([]);
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

  const {
    inOptions,
    inValue,
    onInInput,
    onInOptionsUpdate,
    outOptions,
    onOutOptionsUpdate,
    outValue,
  } = props;

  return (
    <ConvertCard>
      <CaseBar>
        <LeftCaseBar>
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
                    menuOptions={menuOptions}
                    option={option}
                    inOptions={inOptions}
                    onInOptionsUpdate={onInOptionsUpdate}
                    setMenuOptions={setMenuOptions}
                  />
                );
              })}
          </OptionsContainer>
          <MoreOptionsIconContainer
            ref={inOptionsMenuRef}
            onClick={() => {
              setShowAdditionalOutOptions(false);
              setShowAdditionalInOptions(!showAdditionalInOptions);
            }}
          >
            {!showAdditionalInOptions && <IconChevronDown />}
            {showAdditionalInOptions && <IconChevronUp />}
          </MoreOptionsIconContainer>
        </LeftCaseBar>
        <MidCaseBar>
          <div style={{ width: '40px' }}>{/* <IconRefreshCw /> */}</div>
        </MidCaseBar>
        <RightCaseBar>
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
            onClick={() => {
              setShowAdditionalInOptions(false);
              setShowAdditionalOutOptions(!showAdditionalOutOptions);
            }}
          >
            {!showAdditionalOutOptions && <IconChevronDown />}
            {showAdditionalOutOptions && <IconChevronUp />}
          </MoreOptionsIconContainer>
        </RightCaseBar>
      </CaseBar>
      <ConvertCardContent ref={convertCardRef}>
        {showAdditionalOutOptions && (
          <OptionsOverlay
            minHeight={`${convertCardSizes.height}px`}
            maxHeight={`${convertCardSizes.height}px`}
          >
            {menuOutOptions.map(option => {
              return (
                <OverlayOption
                  onClick={() => {
                    const updatedOptions = [
                      ...outOptions.map(outOption => ({
                        ...outOption,
                        active: outOption.name === option.name,
                      })),
                    ];
                    onOutOptionsUpdate(updatedOptions);
                  }}
                >
                  {option.name}
                </OverlayOption>
              );
            })}
          </OptionsOverlay>
        )}
        {showAdditionalInOptions && (
          <OptionsOverlay
            minHeight={`${convertCardSizes.height}px`}
            maxHeight={`${convertCardSizes.height}px`}
          >
            {menuOptions.map(option => {
              return (
                <OverlayOption
                  onClick={() => {
                    const updatedOptions = [
                      ...inOptions.map(inOption => ({
                        ...inOption,
                        active: inOption.name === option.name,
                      })),
                    ];
                    onInOptionsUpdate(updatedOptions);
                  }}
                >
                  {option.name}
                </OverlayOption>
              );
            })}
          </OptionsOverlay>
        )}
        <Content>
          <LeftContentContent>
            <TextareaContainer>
              <Textarea
                data-test="from-textarea"
                placeholder="..."
                rows={2}
                smallerFont={false}
                value={inValue}
                maxLength={100}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                  if (
                    event.target.value === null ||
                    event.target.value === undefined
                  )
                    return;
                  onInInput(event.target.value);
                }}
              />
              <IconContainer onClick={() => onInInput('')}>
                <IconX size={32} />
              </IconContainer>
            </TextareaContainer>
          </LeftContentContent>
        </Content>
        <Content>
          <LeftContentContent>
            <TextareaContainer>
              <Textarea
                disabled
                smallerFont={false}
                showCopyCursor={true}
                value={outValue}
              />
              <CopyToClipboard text={outValue} onCopy={() => {}}>
                <IconContainer>
                  <IconCopy size={24} />
                </IconContainer>
              </CopyToClipboard>
            </TextareaContainer>
          </LeftContentContent>
        </Content>
      </ConvertCardContent>
    </ConvertCard>
  );
};
