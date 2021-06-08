import React from 'react';
import styled from 'styled-components';
import GameButton from './GameButton'; 

const Styles = styled.div`
    .game {
        justify-content: center;
        align-items: center;
        display: flex;
    }

    .game-button {
        background-color: #dddddd;
        border: 1px solid grey;
        width: 50%;
        margin: 10px;
        padding: 10px;
    }
`;

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            questions: [
                [["\"'I am a priveledged white girl', Daisy states.\" (Fitzgerald, p. 35)", 0], ["\"'Tom, the Klan is here!', Daisy grins while she gets the fruit salad out.\" (Fitzgerald, p. 11)", 0], ["\"'Oh you really are Great, Mr. Jatsby', Daisy foams at the mouth.\" (Fitzgerald, p. 115)", 1], ["\"'There's the tramp!', Daisy exclaims as she lays on the gas.\" (Fitzgerald, p. 166)", 0]],
                [["hello world!!!", 0], ["cia!!!o", 0], ["jatsb!!!y", 1], ["myrtl!!!!!!t", 0]]
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

        for(let i = 0; i < questions.length; i++) { 
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

                {this.getButtons()}

                </div>
            </Styles>
        );
    }
};

export default Game;