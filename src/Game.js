import React from 'react';
import Sketch from 'react-p5';
import styled from 'styled-components';

const Styles = styled.div`
    .react-p5 {
        padding-left: 0;
        padding-right: 0;
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 800px;
    }
`;

let x = 100;
let y = 100;

let xInc = 5;
let yInc = 6.5;

let canvasW = 700;
let canvasH = 1000;

let color = [255, 255, 255];
const Game = (props) => {

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(canvasW, canvasH).parent(canvasParentRef);
    }

    const draw = (p5) => {
		p5.background(0);
        p5.fill(color[0], color[1], color[2]);
		p5.ellipse(x, y, 140, 140);

        if(x < 70 || x > canvasW - 70) {
            xInc = -xInc;
            color = [p5.random(255), p5.random(255), p5.random(255)];
        }
        if(y < 70 || y > canvasH - 70) {
            yInc = -yInc;
            color = [p5.random(255), p5.random(255), p5.random(255)];
        }

        x += xInc;
        y += yInc;
	};  

    return (<Styles><Sketch width={canvasW} setup={setup} draw={draw} /></Styles>);
};

export default Game;