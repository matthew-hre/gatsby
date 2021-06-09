import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbo {
        color: #131313;
        background: rgb(255, 255, 255);
        background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 1) 9%,
          rgba(253, 253, 150, 1) 100%
        );
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