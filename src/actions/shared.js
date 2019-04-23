import { _saveQuestionAnswer } from '../utils/_DATA';
import { updateUsers } from './users';
import { answerQuestion } from './questions';

export function handleAnswerQuestion(authedUser, qid, answer) {
  return dispatch => {
    Promise.all([
      dispatch(updateUsers(authedUser, qid, answer)),
      dispatch(answerQuestion(authedUser, qid, answer))
    ])
    .then(() => {
      const obj = {
        authedUser,
        qid,
        answer,
      }
      _saveQuestionAnswer(obj) });
  }
}
