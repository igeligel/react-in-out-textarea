import React, { FC, HTMLAttributes, ReactChild, useState } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import useDimensions from 'react-use-dimensions';
import { IconX } from './IconX';
import { IconCopy } from './IconCopy';

const ConvertCard = styled.div`
  font-family: 'Roboto';
  min-height: 50px;
  background-color: #white;
  box-shadow: ${props =>
    props.theme.main === 'dark'
      ? '0 1px 4px 0 rgb(41, 57, 93)'
      : '0 1px 4px 0 rgba(0, 0, 0, 0.37)'};
  border-radius: 8px;

  ${props => {
    if (props.theme.main === 'dark') {
      return 'border: 1px solid hsl(221, 25%, 65%)';
    }
    return null;
  }}
`;

const CaseBar = styled.div`
  border-bottom: ${props =>
    props.theme.main === 'dark'
      ? '1px solid rgba(229, 229, 229, 0.2)'
      : '1px solid rgba(20, 33, 61, 0.2)'};
  display: flex;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ConvertCardContent = styled.div`
  width: 100%;
  display: flex;

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
`;

const MidCaseBar = styled.div``;

const RightCaseBar = styled.div`
  flex: 1;
  display: flex;
  color: #14213d;
  overflow: hidden;

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

type CaseButtonProps = {
  active?: boolean;
  activeClicked?: boolean;
};

const CaseButton = styled.div<CaseButtonProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 20px;
  padding-top: 12px;
  cursor: pointer;
  color: ${props => {
    if (props.theme.main === 'dark') {
      if (props.active || props.activeClicked) {
        return '#fff';
      } else {
        return '#E5E5E5';
      }
    } else {
      if (props.active || props.activeClicked) {
        return '#14213d';
      } else {
        return 'color: rgba(20,33,61,0.4);';
      }
    }
  }};
  border-bottom: ${props => {
    if (props.active) {
      return '2px solid #fca311';
    } else if (props.activeClicked) {
      return '2px solid #5ba4ca';
    } else {
      return '2px solid transparent';
    }
  }};
  box-sizing: border-box;
`;

const LeftContent = styled.div`
  flex: 1;
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
  font-family: 'Roboto';
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

const RightContent = styled.div`
  flex: 1;
  background-color: ${props =>
    props.theme.main === 'dark' ? 'rgb(24, 37, 66)' : 'rgb(249, 250, 250)'};
`;

interface IInOption {
  name: string;
  active: boolean;
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  inOptions: Array<IInOption>;
}

export const fontFaces = css`
  @font-face {
    font-family: 'Roboto';
    src: url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-style: normal;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${fontFaces}
`;

const liveMeasure = true;

// @ts-ignore
export const InOutTextarea: FC<Props> = props => {
  const [menuOptions, setMenuOptions] = useState<Array<IInOption>>([]);
  const [leftBarRef, leftBarSizes] = useDimensions({ liveMeasure });

  // @ts-ignore
  const { children, inOptions } = props;

  console.log(JSON.stringify(leftBarSizes));
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <ConvertCard>
        <CaseBar>
          <LeftCaseBar ref={leftBarRef}>
            <OptionsContainer>
              {inOptions
                .sort((a, b) => {
                  if (a.active) return -1;
                  return 0;
                })
                .map(option => {
                  const [suuuRef, suuSizes] = useDimensions({ liveMeasure });

                  const shouldHide =
                    suuSizes.x + suuSizes.width >
                    leftBarSizes.width - leftBarSizes.y;

                  if (shouldHide) {
                    if (menuOptions.find(e => e.name === option.name)) return;
                    setMenuOptions([...menuOptions, option]);
                    return;
                  } else {
                    if (menuOptions.find(e => e.name === option.name)) {
                      setMenuOptions([
                        ...menuOptions.filter(e => e.name !== option.name),
                      ]);
                    }
                  }

                  return (
                    <CaseButton ref={suuuRef} active={option.active}>
                      {option.name}
                    </CaseButton>
                  );
                })}
            </OptionsContainer>
          </LeftCaseBar>
          <MidCaseBar>
            <div style={{ width: '40px' }}>{/* <IconRefreshCw /> */}</div>
          </MidCaseBar>
          <RightCaseBar>
            <CaseButton activeClicked={true} active={false} onClick={() => {}}>
              PascalCase
            </CaseButton>
          </RightCaseBar>
        </CaseBar>
        <ConvertCardContent>
          <LeftContent>
            <LeftContentContent>
              <TextareaContainer>
                <Textarea
                  data-test="from-textarea"
                  placeholder="..."
                  rows={2}
                  smallerFont={false}
                  value={'awdawdawdawd'}
                  maxLength={100}
                  // @ts-ignore
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    // setInputText(e.target.value);
                  }}
                />
                <IconContainer
                  onClick={() => {
                    // setInputText('');
                    // setCalculatedTargetCaseType('');
                    // setTargetCaseType('');
                  }}
                >
                  <IconX size={32} />
                </IconContainer>
              </TextareaContainer>
            </LeftContentContent>
          </LeftContent>
          <RightContent>
            <LeftContentContent>
              <TextareaContainer>
                <Textarea
                  disabled
                  smallerFont={false}
                  showCopyCursor={true}
                  value={'awawawaw'}
                />
                <IconContainer
                  onClick={() => {
                    // ignored
                  }}
                >
                  <IconCopy size={24} />
                </IconContainer>
              </TextareaContainer>
            </LeftContentContent>
          </RightContent>
        </ConvertCardContent>
      </ConvertCard>
      <div>
        {menuOptions.map(e => {
          return <div>{e.name}</div>;
        })}
      </div>
    </>
  );
};
