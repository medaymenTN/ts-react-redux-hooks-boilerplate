import { IActionCreator } from "./data.action.creators";
import actionTypes from "./types";

interface IINITIAL_STATE {
  data: [];
  loading: boolean;
}

const AppState: IINITIAL_STATE = {
  data: [],
  loading: false,
};
const dataReducer = (state = AppState, action: IActionCreator) => {
  switch (action.type) {
    case actionTypes.LOAD_DATA:
      return { ...state, loading: true };
    case actionTypes.LOAD_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case actionTypes.LOAD_DATA_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default dataReducer;
