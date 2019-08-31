import {
  SET_MASTER_MODE,
  STARTUP
} from '../actions';
import { DONE_SUCCESS, IDLE, UNKNOWN } from "./constants";

const initialState = {
  master_mode: IDLE,
  master_loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STARTUP: {
      return {
        ...state,
        loading: true
      }
    }
    case SET_MASTER_MODE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
