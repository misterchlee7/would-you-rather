import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleReceiveQuestions } from '../actions/questions';

import QuestionList from './QuestionList';

class Dashboard extends Component {
  componentDidMount() {
    this.props.receiveQuestions();
  }

  render() { 
    const questionList = this.props.questionList.length === 0
      ? <div>Loading...</div>
      : <QuestionList 
          questionList={this.props.questionList}
          questions={this.props.questions}
          users={this.props.users} />

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