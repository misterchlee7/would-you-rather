import { RECEIVE_QUESTIONS, UPDATE_QUESTIONS_ADD } from '../actions/questions';

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case UPDATE_QUESTIONS_ADD:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: [...state[action.qid][action.answer].votes, action.authUser]
          }
        }
      }
    default:
      return state;
  }
}