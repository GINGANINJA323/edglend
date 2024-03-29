import styled from 'styled-components';
import { Colours } from '../utils/types';

interface ContentProps {
    gridRow?: number;
    theme: Colours;
}

interface ContainerProps {
    theme: Colours;
}

export const ContainerDiv = styled.div`
    margin-top: 10px;
    width: 100%;
    color: ${(props) => props.theme.color};
    @media screen and (max-width: 1100px) {
        grid-template-columns: 5% auto 5%;
    }
    display: grid;
    grid-template-columns: 15% auto 15%;
    z-index: 1000;
    height: max-content;
`;

export const HeaderRow = styled.div`
    grid-column: 2;
    grid-row: 1;
    text-align: center;
    background-color: ${(props) => props.theme.foregroundCol};
    z-index: 1;
    border-radius: 5px;
    margin-bottom: 10px;
`;

export const ModeButtonContainer = styled.div`
    @media screen and (max-width: 1100px) {
        grid-column: 2;
        grid-row: auto;
    }
    grid-column: 3;
    grid-row: 1;
    text-align: center;
    margin-top: 4%;
`;

export const ContentArea = styled.div<ContentProps>`
    grid-column: 2;
    grid-row: ${(props) => props.gridRow ? props.gridRow : 'auto'};
    background-color: ${(props) => props.theme.foregroundCol};
    z-index: 1;
    padding: 0 10px;
    border-radius: 5px;
    margin-bottom: 10px;
`;

export const ProjectList = styled.ul`
  list-style: none;
  padding: 0px;
`;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
`;

export const ErrorMessage = styled.p`
    color: #FF0000;
`;