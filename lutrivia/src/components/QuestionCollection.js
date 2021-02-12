import React from 'react'
import Question from './Question'

export default class QuestionCollection extends React.Component {
    
    questionList = () => {
        return this.props.questions.map((question,index) => <Question key={index} handleClick={this.props.handleClick} question={question}/>)
    }
    
   render() {

       return (
           
           <div id="questions_container">
                {this.questionList()}
           </div>
       )
   }
}