import React from 'react'


export default class Question extends React.Component {
    handleClick = (event) => {
        this.props.handleClick(this.props.question.answer.toString() === event.target.innerText.toLowerCase())
    }
    render() {
        return (
            <div className="question">
                <p>{this.props.question.text}</p>
                <button onClick={this.handleClick}>True</button> <button onClick={this.handleClick}>False</button>
            </div>
        )
    }
}