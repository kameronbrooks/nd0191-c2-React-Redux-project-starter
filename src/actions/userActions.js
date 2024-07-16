import * as API from "../_DATA";

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REQUEST_USERS_ERROR = 'REQUEST_USERS_ERROR';

const _requestUsers = () => {
  return {
    type: REQUEST_USERS
  }
}

const _receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

const _requestUsersError = () => {
  return {
    type: REQUEST_USERS_ERROR
  }
}

export const fetchUsers = async (dispatch) => {
  dispatch(_requestUsers());

  try {
    const users = await API._getUsers();
    dispatch(_receiveUsers(users));
  } catch (error) {
    dispatch(_requestUsersError());
  }
  
}
