import React, { Component } from 'react';

class Question extends Component {
  render() {
    const { asker, question } = this.props;

    return (
      <div>
        <header>{question.author} asks:</header>
        <div>
          <img src={asker.avatarURL} alt='profile' />
          <div>
            <h4>Would you rather</h4>
            <form>
              {question.optionOne.text}
              <button>Vote</button>
            </form>
            <form>
              {question.optionTwo.text}
              <button>Vote</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;