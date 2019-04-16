import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleReceiveQuestions } from '../actions/questions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.receiveQuestions();
  }

  render() { 
    const questionList = this.props.questionList.length === 0
      ? <div>Loading...</div>
      : this.props.questionList.map(q => <p>{q}</p>)

    return (
      <div>
        Dashboard
        {questionList}
      </div>
    );
  }
}

const mapStateToProps = ({ questions }) => ({
  questionList: Object.keys(questions),
});

const mapDispatchToProps = dispatch => ({
  receiveQuestions: () => dispatch(handleReceiveQuestions())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);