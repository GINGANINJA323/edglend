import React, { useEffect, useState } from 'react';
import { Button, Select, Input, Link, InputLabel } from './components/controls';
import { ThemeProvider } from 'styled-components';
import { ContainerDiv, HeaderRow, ModeButtonContainer, ContentArea, ProjectList, InputContainer } from './components/elements';
import { ParticleBackground } from './components/particle-background'; 
import OptBar from './components/opt-bar';
import colours from './components/colours';
import GitActivity from './components/git-activity';
import '../public/styles.css'

const App = (): JSX.Element => {
    const initialTheme = localStorage.getItem('theme') || 'light';
    const [ theme, setTheme ] = useState(colours(initialTheme));
    const [ particleCount, setParticleCount ] = useState(40);
    const [ userParticleCount, setUserParticleCount ] = useState(particleCount);

    const onChangeColMode = (): void => {
        const newTheme = theme.theme === 'dark' ? 'light' : 'dark';
        setTheme(colours(newTheme));
    }

    const resetBg = (): void => {
        setParticleCount(0);
    }

    const onChangeParticleCount = (particles: number): void => {
        if (particles > 200) {
            setParticleCount(200);
        } else {
            setParticleCount(particles);
        }
    }

    useEffect(() => {
        onChangeParticleCount(userParticleCount || 40);
    }, [particleCount, userParticleCount]);

    useEffect(() => {
        localStorage.setItem('theme', theme.theme);
    }, [theme]);

    const options = {
        'Change Colour Mode': () => onChangeColMode(),
        'Reset Background': () => resetBg()
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
                            onChange={(e) => setUserParticleCount(Number(e.target.value))}
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
                <ContentArea>
                    <GitActivity />
                </ContentArea>
                <ParticleBackground theme={theme} particleCount={particleCount} />
            </ContainerDiv>
        </ThemeProvider>
    );
};

export default App;