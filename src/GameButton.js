import { Component } from "react";

class GameButton extends Component {
    render() {
        return(<button onClick={this.props.onClick} className={this.props.content[1]}>{this.props.content[0]}</button>);
    }
}

export default GameButton;