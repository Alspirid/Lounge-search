import * as userAPI from '../utils/user_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';


const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const fetchUser = id => dispatch => (
  userAPI.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const fetchUsers = () => dispatch => (
  userAPI.fetchUsers().then(users => (
    dispatch(receiveUsers(users))
  ))
);
