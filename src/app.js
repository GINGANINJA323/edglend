import React, { useEffect, useState } from 'react';
import { Button, Select, Input, Link } from './components/controls';
import { ThemeProvider } from 'styled-components';
import { ContainerDiv, HeaderRow, ModeButtonContainer, ContentArea, ProjectList } from './components/elements';
import colours from './components/colours';
import './css/styles.css'

const App = () => {
    const [ theme, setTheme ] = useState(colours('light'));

    const onChangeColMode = () => {
        const newTheme = theme.theme === 'dark' ? 'light' : 'dark';
        setTheme(colours(newTheme));
    }

    useEffect(() => {
        document.body.style =
            `background-color: ${theme.backgroundCol};
            color: ${theme.color};`;
    }, [theme]);

    console.log('Theme: ', theme);

    return (
        <ThemeProvider theme={theme}>
            <ContainerDiv>
                <HeaderRow>
                    <h1>edglend</h1>
                </HeaderRow>
                <ModeButtonContainer>
                    <Button theme={theme} onClick={onChangeColMode}>Change Colour Mode</Button>
                </ModeButtonContainer>
                <ContentArea>
                    <h2>Personal Website of Ed Glendinning. Here's what I've been working on!</h2>
                    <h3>Stuff I've made:</h3>
                    <ProjectList>
                        <li><Link href={`/mmi-gamedeck/index.php`}>GameDeck - Uni Assignment Games Website</Link></li>
                        <li><Link href={`/project-tracker/index.php?p=login`}>Project Tracker - Another Uni assignment</Link></li>
                    </ProjectList>
                </ContentArea>
            </ContainerDiv>
        </ThemeProvider>
    );
};

export default App;