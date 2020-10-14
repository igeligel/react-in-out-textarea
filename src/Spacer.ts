import styled from 'styled-components';

type CaseSpacerProps = {
  vertical?: boolean;
};

export const Spacer = styled.div<CaseSpacerProps>`
  ${props => (props.vertical ? `width: 40px; height: 40px;` : `width: 40px;`)}
`;
