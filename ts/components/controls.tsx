import styled from 'styled-components';
import { Colours } from '../utils/types';

interface ControlProps {
  theme: Colours;
}

export const Button = styled.button<ControlProps>`
  color: ${(props) => props.theme.inverseCol};
  background-color: transparent;
  border: none;
  padding: 5px 10px;
  margin-right: 10px;

  :last-child {
    margin-right: 0px;
  }

  :hover {
    background-color: ${(props) => props.theme.backgroundCol}
  }
`;

export const Select = styled.select<ControlProps>`
  margin-left: 10px;
`;

export const Input = styled.input`
  color: ${(props) => props.theme.inverseCol};
  background-color: ${(props) => props.theme.backgroundCol};
  border: none;
  border-radius: 5px;
  flex-grow: 1;
`;

export const InputLabel = styled.p`
  margin-right: 5px;
  font-size: 14px;
`;

export const Link = styled.a<ControlProps>`
  color: ${(props) => props.theme.color};
  text-decoration: none;

  :hover {
    color: ${(props) => props.theme.hoverCol};
  }
`;
