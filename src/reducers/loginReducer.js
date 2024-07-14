
import { LOGIN_USER, LOGOUT_USER, REQUEST_USER_LOGIN, LOGIN_USER_ERROR} from "../actions/loginActions";

const initialState = {
  user: null,
  isLoggedIn: false,
  loginError: false,
  loginErrorMessage: null,
  loading: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER_LOGIN:        // Dispatched when the user clicks the login button
      return {
        ...state,
        loginError: false,
        loginErrorMessage: null,
        loading: true
      };
    case LOGIN_USER:                // Dispatched when the user is successfully logged in
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        loginError: false,
        loginErrorMessage: null,
        loading: false
      };
    case LOGOUT_USER:               // Dispatched when the user clicks the logout button
      return {
        ...state,
        user: null,
        isLoggedIn: false
      };
    case LOGIN_USER_ERROR:          // Dispatched when the user enters an invalid username or password
      return {
        ...state,
        loginError: true,
        loginErrorMessage: "Invalid username or password",
        loading: false
      };
    default:
      return state;
  }
};

export default loginReducer;