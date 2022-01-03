import styled from 'styled-components';

export const Button = styled.button`
  color: ${(props) => props.theme.inverseCol};
  background-color: ${(props) => props.theme.inverseBgCol};
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

export const Link = styled.a`
  color: ${(props) => props.theme.color};
  text-decoration: none;

  :hover {
    color: ${(props) => props.theme.hoverCol};
  }
`;
