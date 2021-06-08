import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbo {
        color: #131313;
        background-color: #f6eabd;
        height: 220px;
        position: relative;
        z-index: -2;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <Container>
                <h1>Dissecting Daisy</h1>
                <h4>An analysis of F. Scott Fitzgerald's <i>The Great Gatsby</i> character.</h4>
            </Container>
        </Jumbo>
    </Styles>
)