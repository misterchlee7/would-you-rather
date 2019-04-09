import { _getUsers, _getQuestions } from '../utils/_DATA';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from './authedUser';

// export function handleInitialData() {
//   return (dispatch) => {
//     return Promise.all([_getUsers(), _getQuestions()])
//       .then(res => {
//         let users = res[0];
//         let questions = res[1];
//         console.log('USERS', users);
//         // console.log('QUESTIONS', questions);
//         dispatch(receiveUsers(users));
//         // dispatch(receiveQuestions(questions));
//       })
//   };
// }