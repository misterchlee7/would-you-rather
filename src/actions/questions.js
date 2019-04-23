import { _getQuestions } from '../utils/_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const UPDATE_QUESTIONS_ADD = 'UPDATE_QUESTIONS_ADD';

function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function handleReceiveQuestions() {
  return dispatch => {
    return _getQuestions()
      .then(questions => dispatch(receiveQuestions(questions)))
      // .then(questions => console.log('QUESTIONS', questions))
  }
}

export function answerQuestion(authUser, qid, answer) {
  return {
    type: UPDATE_QUESTIONS_ADD,
    authUser,
    qid,
    answer,
  }
}