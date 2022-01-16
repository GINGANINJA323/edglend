import React, { useEffect, useState } from 'react';
import { Button, Select, Input, Link, InputLabel } from './components/controls';
import { ThemeProvider } from 'styled-components';
import { ContainerDiv, HeaderRow, ModeButtonContainer, ContentArea, ProjectList, InputContainer } from './components/elements';
import { ParticleBackground } from './components/particle-background'; 
import OptBar from './components/opt-bar';
import colours from './components/colours';
import './css/styles.css'

const App = () => {
    const initialTheme = localStorage.getItem('theme') || 'light';
    const [ theme, setTheme ] = useState(colours(initialTheme));
    const [ particleCount, setParticleCount ] = useState(80);
    const [ userParticleCount, setUserParticleCount ] = useState(particleCount);

    const onChangeColMode = () => {
        const newTheme = theme.theme === 'dark' ? 'light' : 'dark';
        setTheme(colours(newTheme));
    }

    const resetBg = () => {
        setParticleCount(0);
    }

    const onChangeParticleCount = (particles) => {
        if (particles > 200) {
            setParticleCount(200);
        } else {
            setParticleCount(particles);
        }
    }

    useEffect(() => {
        onChangeParticleCount(userParticleCount || 80);
    }, [particleCount, userParticleCount]);

    useEffect(() => {
        localStorage.setItem('theme', theme.theme);

        document.body.style =
            `background-color: ${theme.backgroundCol};
            color: ${theme.color};`;
    }, [theme]);

    const options = {
        'Change Colour Mode': () => onChangeColMode(),
        'Reset Background': () => resetBg(),
        'GitHub Account': () => window.open('https://github.com/GINGANINJA323')
    };

    return (
        <ThemeProvider theme={theme}>
            <ContainerDiv>
                <HeaderRow>
                    <h1>edglend</h1>
                </HeaderRow>
                <OptBar options={options}>
                    <InputContainer>
                        <InputLabel>{'Node Count: '}</InputLabel>
                        <Input 
                            title={'Max number of particles is 200.'}
                            placeholder={'Enter particle count...'}
                            value={userParticleCount}
                            onChange={(e) => setUserParticleCount(e.target.value)}
                        />
                    </InputContainer>
                </OptBar>
                <ContentArea>
                    <h2>Personal Website of Ed Glendinning. Here's what I've been working on!</h2>
                    <h3>Stuff I've made:</h3>
                    <ProjectList>
                        <li><Link href={'/mmi-gamedeck/index.php'}>GameDeck - Games Website</Link></li>
                        <li><Link href={'/project-tracker/index.php?p=login'}>Project Tracker</Link></li>
                    </ProjectList>
                </ContentArea>
                <ParticleBackground theme={theme} particleCount={particleCount} />
            </ContainerDiv>
        </ThemeProvider>
    );
};

export default App;