import { REQUEST_USERS, RECEIVE_USERS, REQUEST_USERS_ERROR } from "../actions/userActions";

const initialState = {
  users: {},
  loading: false,
  error: false,
  errorMessage: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: null
      };
    case RECEIVE_USERS:
      return {
        ...state,
        users: action.users,
        loading: false,
        error: false,
        errorMessage: null
      };
    case REQUEST_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: "Error loading users"
      };
    default:
      return state;
  }
};

export default userReducer;