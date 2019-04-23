import { RECEIVE_USERS, UPDATE_USERS_ADD_QUESTION } from '../actions/users';

export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      }
    case UPDATE_USERS_ADD_QUESTION:
      return {
        ...state,
        [action.authUser]: {
          ...state[action.authUser],
          answers: {
            ...state[action.authUser].answers,
            [action.qid]: action.answer,
          }
        }
      }
    default:
      return state;
  }
}