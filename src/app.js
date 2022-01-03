import React, { useEffect, useState } from 'react';
import { Button, Select, Input } from './components/controls';
import { ContainerDiv, HeaderRow, ModeButtonContainer, ContentArea } from './components/elements';
import colours from './components/colours';
import styled from 'styled-components';
import './css/styles.css'

const App = () => {
    const [ colMode, setColMode ] = useState('light');

    const onChangeColMode = () => {
        colMode === 'light' ? setColMode('dark') : setColMode('light');

        document.body.style =
            `background-color: ${colours(colMode).backgroundCol};
            color: ${colours(colMode).color};`;

        console.log(document.body.style);
    }

    useEffect(() => {
        onChangeColMode();
    }, []);

    return (
        <ContainerDiv>
            <HeaderRow>
                <h1>edglend</h1>
            </HeaderRow>
            <ModeButtonContainer>
                <Button theme={colMode} onClick={onChangeColMode}>Change Colour Mode</Button>
            </ModeButtonContainer>
            <ContentArea>
                <h2>Personal Website of Ed Glendinning. Here's what I've been working on!</h2>
            </ContentArea>
        </ContainerDiv>
    );
};

export default App;