import React, { Component } from 'react';

import Question from './Question';

class QuestionList extends Component {
  render() { 
    const { questionList, questions, users } = this.props;
    return (
      questionList.map(q => (
        <Question
          key={q}
          asker={users[questions[q].author]}
          question={questions[q]} />
      ))
    );
  }
}
 
export default QuestionList;