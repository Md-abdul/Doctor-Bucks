// action.js
import axios from "axios";
import {
  DATA_DELETE,
  DATA_EDIT,
  DATA_POST,
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionType";

// export const getData = () => (dispatch) => {
//   dispatch({ type: GET_DATA_REQUEST });
//   axios
//     .get(`http://localhost:3020/post/`)
//     .then((res) => {
//       dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
//     })
//     .catch((err) => {
//       dispatch({ type: GET_DATA_ERROR });
//     });
// };

export const getData = (filters) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get(`http://localhost:3020/post/`, { params: filters } )
    .then((res) => {
      dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_DATA_ERROR });
    });
};

//https://tame-lime-pangolin-ring.cyclic.cloud/post/
//http://localhost:3020/post/
// http://localhost:3020/post/sort-by-fee?order=asc

export const postData = (bookData) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .post(`http://localhost:3020/post/appointments`, bookData)
    .then((res) => {
      dispatch({ type: DATA_POST, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: GET_DATA_ERROR });
    });
};

export const deleteData = (_id) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .delete(`http://localhost:3020/post/delete/${_id}`)
    .then((res) => {
      dispatch({ type: DATA_DELETE, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: GET_DATA_ERROR });
    });
};


export const editData = (_id, doctors) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .patch(`http://localhost:3020/post/update/${_id}`, doctors)
    .then((res) => {
      dispatch({ type: DATA_EDIT, payload: res.data });
    })
    .catch((error) => {
      console.error("Error updating data:", error);
      dispatch({ type: GET_DATA_ERROR });
    });
};
