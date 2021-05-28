import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import jatsby from '../assets/jatsby.png';

const Styles = styled.div`
    .jumbo {
        background: url(${jatsby}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 800px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: black;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className='overlay'></div>
            <Container>
                <h1>THE BIG JATSBY WOOHOO :) !!!!!</h1>
                <p> he is gay for nick and they kissed on the mouth</p>
            </Container>
        </Jumbo>
    </Styles>
)