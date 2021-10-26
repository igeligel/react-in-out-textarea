import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { IconChevronDown } from './IconChevronDown';
import { IconChevronUp } from './IconChevronUp';

interface IMoreOptionsIconContainer {
  right: boolean;
}

const MoreOptionsIconContainerStyle = styled.div<IMoreOptionsIconContainer>`
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

type MoreOptionsIconContainerProps = {
  onClick:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  active: boolean;
  right?: boolean;
  style?: CSSProperties;
};

type ReactRef =
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined;

export const MoreOptionsIconContainer = React.forwardRef(
  (props: MoreOptionsIconContainerProps, ref: ReactRef) => {
    const { onClick, active, right, style } = props;
    return (
      <MoreOptionsIconContainerStyle
        right={right || false}
        ref={ref}
        onClick={onClick}
        style={style}
      >
        {!active && <IconChevronDown />}
        {active && <IconChevronUp />}
      </MoreOptionsIconContainerStyle>
    );
  }
);
