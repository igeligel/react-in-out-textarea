import React from 'react';
import styled from 'styled-components';

export type IMaxContentLengthIndicator = {
  show: boolean;
  tooltip?: React.ReactNode;
};

type MaxContentLengthIndicatorProps = {
  maxContentLengthIndicator: IMaxContentLengthIndicator;
  maxContentLength: number;
  currentLength: number;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-top: 24px;
`;

const SmallContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const IndicatorText = styled.a`
  font-family: Roboto;
`;

export const MaxContentLengthIndicator: React.FC<MaxContentLengthIndicatorProps> =
  (props) => {
    const { maxContentLength, maxContentLengthIndicator, currentLength } =
      props;

    return (
      <Container>
        <SmallContainer>
          {maxContentLengthIndicator.tooltip}
          <IndicatorText data-tip="React-tooltip">
            {currentLength} / {maxContentLength}
          </IndicatorText>
        </SmallContainer>
      </Container>
    );
  };
