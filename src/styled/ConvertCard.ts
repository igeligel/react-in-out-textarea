import styled from 'styled-components';

const ConvertCard = styled.div`
  font-family: Roboto, sans-serif;
  min-height: 50px;
  background-color: white;
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

export default ConvertCard;
