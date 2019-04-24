import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Result extends Component {
  render() { 
    const { user, question, totalVotes, userChoice } = this.props.location.state;

    const chosenStyle = { backgroundColor: 'red' };

    return ( 
      <div>
        <header>
          Asked by {question.author}
        </header>
        <div>
          <img 
            src={user.avatarURL}
            alt='logo' />
        </div>
        <div>
          <h3>Results:</h3>
          <div style={userChoice === 'optionOne' ? chosenStyle : null}>
            <div>
              <h5>{question.optionOne.text}</h5>
              <div>{question.optionOne.votes.length / totalVotes * 100}%</div>
              <div>{question.optionOne.votes.length}/{totalVotes} voted</div>
            </div>
          </div>
          <div style={userChoice === 'optionTwo' ? chosenStyle : null}>
            <div>
              <h5>{question.optionTwo.text}</h5>
              <div>{question.optionTwo.votes.length / totalVotes * 100}%</div>
              <div>{question.optionTwo.votes.length}/{totalVotes} voted</div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}
 

export default withRouter(Result);