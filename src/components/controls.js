import styled from 'styled-components';
import colours from './colours';

export const Button = styled.button`
  color: ${(props) => colours(props.theme).inverseCol};
  background-color: ${(props) => colours(props.theme).inverseBgCol};
  padding: 10px;
  border-radius: 3px;
  font-size: 16px;
`;

export const Select = styled.select`
  margin-left: 10px;
`;

export const Input = styled.input`
  flex-grow: 1;
`;
