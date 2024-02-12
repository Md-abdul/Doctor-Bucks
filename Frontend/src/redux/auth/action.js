import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionType";

export const Signup = (userData) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  axios
    .post(`http://localhost:3020/user/signup`, userData)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      // Dispatch SIGNUP_ERROR with an optional error message from the API response.
      dispatch({
        type: SIGNUP_ERROR,
        payload: err.response ? err.response.data.error : "Signup failed",
      });
    });
};

export const LoginRouter = (newuser) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post(`http://localhost:3020/user/login`, newuser)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data, isAuth: true });
    })
    .catch((err) => {
      // Dispatch LOGIN_ERROR with an optional error message from the API response.
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data.error : "Login failed",
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
