import React from 'react'
import Question from '../data'
import QuestionCollection from './QuestionCollection'
import User from './User'
import UsersList from './UsersList'
export default class QuestionPage extends React.Component {

    state = {
        questions: Question.questions,
        score: 0,
        users: [],
        user: {
            name: "",
            score: 0
        }
    } 
    handleClick = (buttonPressed) => {
        
        if(buttonPressed){
            this.setState(pS => ({
                score: pS.score + 1
            }))
        }
    } 
    handleReset = () => {
        this.setState({score: 0})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const user = {...this.state.user}
        user.score = this.state.score
        console.log(user.score)
        this.setState({user})
        this.updateUsers()
    } 
    updateUsers = () => {
        this.setState(pS => ({
            users: [...pS.users, this.state.user]
        }))
    }
   onChange = (event) => {
        const user = {...this.state.user}
        user.name = event.target.value
        this.setState({user})
    }
    render() {
        
        return (
            <div>
                <h1>Lutrivia</h1>
                <p><button onClick={this.handleReset}>New Game</button><strong>Score: </strong> {this.state.score}</p>
                <QuestionCollection handleClick={this.handleClick} questions={this.state.questions}/>
                
                <User 
                    userName={this.state.user.name} 
                    onChange={this.onChange} 
                    handleSubmit={this.handleSubmit} 
                    id="user"/>

                <UsersList users = {this.state.users}/>
            </div>
           
        )
    }
}