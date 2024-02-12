import axios from "axios";
import {
  GET_PATIENT_REQUEST,
  GET_PATIENT_SUCCESS,
  GET_PATIENT_ERROR,
  POST_PATIENT_DATA,
} from "./actionType";

export const getPatientData = (dispatch) => {
  dispatch({ type: GET_PATIENT_REQUEST });
  axios
    .get(`http://localhost:3020/patient/patient`)
    .then((res) => {
      dispatch({ type: GET_PATIENT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_PATIENT_ERROR });
    });
};

export const postPatientData = (newPatient) => (dispatch) => {
  dispatch({ type: GET_PATIENT_REQUEST });
  axios
    .post(`http://localhost:3020/patient/Bookappointments`, newPatient)
    .then((res) => {
      dispatch({ type: POST_PATIENT_DATA, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_PATIENT_ERROR });
    });
};
