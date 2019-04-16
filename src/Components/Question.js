import React, { Component } from 'react';

class Question extends Component {
  render() {
    const { asker, question } = this.props;

    return (
      <div className='question-block'>
        <header>{question.author} asks:</header>
        <div className='question'>
          <img src={asker.avatarURL} alt='profile' width='100' height='100' />
          <div className='choices'>
            <h4>Would you rather...</h4>
            <button>
              {question.optionOne.text}
            </button>
            <button>
              {question.optionTwo.text}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;