import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

type ExampleTextProps = {
  smallerFont?: boolean;
  showCopyCursor?: boolean;
};

export const Textarea = styled(TextareaAutosize)<ExampleTextProps>`
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