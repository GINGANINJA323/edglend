import styled from 'styled-components';

export const ContainerDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 20% 80%;
    z-index: 1000;
    height: 100vh;
`;

export const HeaderRow = styled.div`
    grid-column: 2;
    grid-row: 1;
    text-align: center;
    background-color: ${(props) => props.theme.foregroundCol};
    z-index: 1
`;

export const ModeButtonContainer = styled.div`
    grid-column: 3;
    grid-row: 1;
    text-align: center;
    margin-top: 4%;
`;

export const ContentArea = styled.div`
    grid-column: 2;
    grid-row: 2;
    background-color: ${(props) => props.theme.foregroundCol};
    z-index: 1;
    padding: 10px;
`;

export const ProjectList = styled.ul`
  list-style: none;
  padding: 0px;
`;