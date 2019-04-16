import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleReceiveQuestions } from '../actions/questions';

import Question from './Question';

class Dashboard extends Component {
  componentDidMount() {
    this.props.receiveQuestions();
  }

  render() { 
    const questionList = this.props.questionList.length === 0
      ? <div>Loading...</div>
      : this.props.questionList.map(q => {
        return (
          <Question
            key={q}
            asker={this.props.users[this.props.questions[q].author]}
            question={this.props.questions[q]} />
        )})

    return (
      <div className='question-list'>
        Dashboard
        {questionList}
      </div>
    );
  }
}

const mapStateToProps = ({ users, questions }) => ({
  questionList: Object.keys(questions),
  users,
  questions
});

const mapDispatchToProps = dispatch => ({
  receiveQuestions: () => dispatch(handleReceiveQuestions())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);