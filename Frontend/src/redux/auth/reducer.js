import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: null,
  refreshToken: null,
};

// console.log(isAuth)

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS: {
      localStorage.setItem('token', action.payload);
      return { ...state, isLoading: false, isAuth: true, token: action.payload };
    }
    case LOGIN_ERROR:
    case SIGNUP_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case LOGOUT: {
      localStorage.removeItem('token');
      return { ...state, isAuth: false, token: null };
    }
    default: {
      return state;
    }
  }
};
