import { _getUsers } from '../utils/_DATA';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_USERS_ADD_QUESTION = 'UPDATE_USERS_ADD_QUESTION';

function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function handleReceiveUsers() {
  return (dispatch) => {
    return _getUsers()
      .then(users => dispatch(receiveUsers(users)))
  }
}

export function updateUsers(authUser, qid, answer) {
  return {
    type: UPDATE_USERS_ADD_QUESTION,
    authUser,
    qid,
    answer,
  }
}