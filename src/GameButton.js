import { Component } from "react";

class GameButton extends Component {
    render() {
        return(<div className="game-button" onClick={this.props.onClick}>{this.props.content[0]}</div>);
    }
}

export default GameButton;