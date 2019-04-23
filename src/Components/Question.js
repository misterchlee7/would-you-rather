import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/shared';

class Question extends Component {
  handleClick = async (e) => {
    const { answerQuestion, authUser, qid } = this.props;
    const answer = e.target.value;
    await answerQuestion(authUser, qid, answer);
  }

  render() {
    const { asker, question } = this.props;

    return (
      <div className='question-block'>
        <header>{question.author} asks:</header>
        <div className='question'>
          <img src={asker.avatarURL} alt='profile' width='100' height='100' />
          <div className='choices'>
            <h4>Would you rather...</h4>
            <button 
              value='optionOne' 
              onClick={this.handleClick}>
                {question.optionOne.text}
            </button>
            <button 
              value='optionTwo' 
              onClick={this.handleClick}>
                {question.optionTwo.text}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }, { question }) => ({
  authUser: authedUser,
  qid: question.id,
});

const mapDispatchToProps = dispatch => ({
  answerQuestion: (authUser, qid, answer) => dispatch(handleAnswerQuestion(authUser, qid, answer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);