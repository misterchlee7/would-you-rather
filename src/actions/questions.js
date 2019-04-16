import { _getQuestions } from '../utils/_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

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