import styled from 'styled-components';

export const TextAreaContentTop = styled.div`
  flex: 1;
  padding-left: 28px;
  padding-top: 20px;
  padding-bottom: 42px;
  padding-right: 14px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
`;

export const TextAreaContentBottom = styled.div`
  flex: 1;
  padding-left: 28px;
  padding-top: 20px;
  padding-bottom: 42px;
  padding-right: 14px;
  width: 100%;
  box-sizing: border-box;
  display: flex;

  @media (max-width: 720px) {
    background-color: hsl(0 0% 98% / 1);
  }
`;
