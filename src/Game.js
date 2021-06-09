import React from 'react';
import styled from 'styled-components';
import GameButton from './GameButton'; 

const Styles = styled.div`
    .game {

        align-items: center;
        display: block;
    }

    .game-button {
        background-color: #dddddd;
        border: 1px solid grey;
        width: 100%;
        float: none;
        margin: 10px;
        padding: 10px;
        display: block;
        text-align: center;
    }

    .game-button:hover {
        background-color: #ccc;
        cursor: pointer;
    }

    .game-header {
        background-color: #dddddd;
        border: 1px solid grey;
        width: 100%;
        float: none;
        margin: 10px;
        padding: 10px;
        display: block;
        text-align: center;
    }
`;

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            questions: [
                [
                    [<h2>In F. Scott Fitzgerald's book <i>The Great Gatsby</i>, Daisy says...</h2>],
                    ["\"'The West Egg is my new home', Daisy states.\" (Fitzgerald, p. 35)", 0],
                    ["\"'What if I'm not a hero. What if I'm the bad guy?' Edward cries.\" (Meyer, p. 221)", 0],
                    ["\"'They're such beautiful shirts,' she sobbed, her voice muffled in the thick folds. 'It makes me sad because I've never seen such-such beautiful shirts before.'\" (Fitzgerald, p. 92)", 1],
                    ["\"'There's Myrtle!', Daisy exclaims as she steps on the gas.\" (Fitzgerald, p. 166)", 0]
                ],
                [
                    [<h2>"'They're such beautiful shirts,' she sobbed, her voice muffled in the thick folds. 'It makes me sad because I've never seen such-such beautiful shirts before.'” represents Daisy's symbol of...</h2>],
                    ["Her heart", 1],
                    ["Her voice", 0],
                    ["Her dress", 0],
                ],
                [
                    [<h2>In F. Scott Fitzgerald's book <i>The Great Gatsby</i>, this quote reveals a symbol of Daisy.</h2>],
                    ["\"That was the inexhaustible charm that rose and fell in it, the jingle of it, the cymbals' song of it.\" (Fitzgerald, p. 105)", 1],
                    ["\"'Real macaroni and cheese doesn't come from a box, babe. It eventually comes from an oven with a crust bubbling on top'\" (Noel, p. 601)", 0],
                    ["\"'My dress! Oh god, my dress! It's stained! And right before the party!'\" (Fitzgerald, p. 26)", 0],
                    ["\"Maybe she just wanted to wear something different this time when meeting Gatsby.\" (Lazaryev, p. 1)", 0]
                ],
                [
                    [<h2>"That was the inexhaustible charm that rose and fell in it, the jingle of it, the cymbals' song of it.” represents Daisy's symbol of...</h2>],
                    ["Her heart", 0],
                    ["Her voice", 1],
                    ["Her dress", 0],
                ],
                [
                    [<h2>In F. Scott Fitzgerald's book <i>The Great Gatsby</i>, this quotes introduces a symbol of Daisy.</h2>],
                    ["\"You know you're in love when you can't fall asleep because reality is finally better than your dreams.\" (Seuss, p. 123)", 0],
                    ["\"'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.'\" (Fitzgerald, p. 4)", 0],
                    ["\"'I don't want to repeat my innocence. I want the pleasure of losing it again.'\" (Fitzgerald, p. 184)", 0],
                    ["\"They were both in white and their dresses were rippling and fluttering.\" (Fitzgerald, p. 2)", 1]
                ],
                [
                    [<h2>"They were both in white and their dresses were rippling and fluttering.” represents Daisy's symbol of...</h2>],
                    ["Her heart", 0],
                    ["Her voice", 0],
                    ["Her dress", 1],
                ],
                [
                    [<h2>In F. Scott Fitzgerald's book <i>The Great Gatsby</i>, this quotes introduces a symbol of Daisy.</h2>],
                    ["\"You know you're in love when you can't fall asleep because reality is finally better than your dreams.\" (Seuss, p. 123)", 0],
                    ["\"'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.'\" (Fitzgerald, p. 4)", 0],
                    ["\"'I don't want to repeat my innocence. I want the pleasure of losing it again.'\" (Fitzgerald, p. 184)", 0],
                    ["\"They were both in white and their dresses were rippling and fluttering.\" (Fitzgerald, p. 2)", 1]
                ],
            ],
            current: 0,
            over: false
        };
    }

    getButtons() {
        if(this.state.over) return (<br />);
        const idx = this.state.current;
        const questions = this.state.questions[idx];

        let buttons = [];

        for(let i = 1; i < questions.length; i++) { 
            buttons.push(<GameButton content={questions[i]} onClick={() => this.click(questions[i][1])}></GameButton>);
        }

        return buttons;
    }

    click(isCorrect) {
        if(isCorrect === 1) {
            alert("yay!");
            if(this.state.current+1 >= this.state.questions.length) {
                alert("you win!");
                this.setState({time: this.state.time, questions: this.state.questions, current: this.state.current+1, over: true});
            } else {
                this.setState({time: this.state.time, questions: this.state.questions, current: this.state.current+1, over: false});
            }
        } else {
            alert("you suck!");

        }
    }

    render() {
        return (
            <Styles>
                <div className="game">
                <div class="game-header">{this.state.questions[this.state.current][0]}</div>

                {this.getButtons()}

                </div>
            </Styles>
        );
    }
};

export default Game;