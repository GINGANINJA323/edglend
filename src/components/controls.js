import styled from 'styled-components';
export const Button = styled.button`
  color: ${(props) => props.theme.inverseCol};
  background-color: transparent;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;

  :last-child {
    margin-right: 0px;
  }

  :hover {
    background-color: ${(props) => props.theme.backgroundCol}
  }
`;

export const Select = styled.select`
  margin-left: 10px;
`;

export const Input = styled.input`
  flex-grow: 1;
`;

export const InputLabel = styled.p`
  margin-right: 5px;
  font-size: 14px;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.color};
  text-decoration: none;

  :hover {
    color: ${(props) => props.theme.hoverCol};
  }
`;
