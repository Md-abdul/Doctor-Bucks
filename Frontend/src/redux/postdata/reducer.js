
import {
  DATA_DELETE,
  DATA_EDIT,
  DATA_POST,
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case GET_DATA_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case DATA_DELETE: {
      return { ...state, data: payload };
    }
    case DATA_POST: {
      return { ...state, data: payload };
    }
    case DATA_EDIT: {
      // return { ...state, isLoading: false };
      return {
        ...state,
        isLoading: false,
        // data: state.data.map(item => (item._id === payload._id ? payload : item)),
      };
    }
    default: {
      return state;
    }
  }
};
