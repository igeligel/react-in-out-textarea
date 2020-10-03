import styled from 'styled-components';

export const CaseBar = styled.div`
  border-bottom: ${props =>
    props.theme.main === 'dark'
      ? '1px solid rgba(229, 229, 229, 0.2)'
      : '1px solid rgba(20, 33, 61, 0.2)'};
  display: flex;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
