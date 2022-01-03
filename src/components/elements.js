import styled from 'styled-components';

export const ContainerDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
`;

export const HeaderRow = styled.div`
    grid-column: 2;
    grid-row: 1;
`;

export const ModeButtonContainer = styled.div`
    grid-column: 3;
    grid-row: 1;
`;

export const ContentArea = styled.div`
    grid-column: 2;
    grid-row: 2;
`;

export const ProjectList = styled.ul`
  list-style: none;
  padding: 0px;
`;