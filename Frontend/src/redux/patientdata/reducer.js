import {
  GET_PATIENT_ERROR,
  GET_PATIENT_REQUEST,
  GET_PATIENT_SUCCESS,
  POST_PATIENT_DATA,
} from "./actionType";

const initialState = {
  patientDoc: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PATIENT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_PATIENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        patientDoc: payload,
      };
    }
    case GET_PATIENT_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case POST_PATIENT_DATA: {
      return { ...state, data: payload };
    }
    default: {
      return state;
    }
  }
};
