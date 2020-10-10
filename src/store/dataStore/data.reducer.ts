import { IDataActionType, IDataState } from './types';
import actionTypes from './action.enum';

const AppState: IDataState = {
  data: [],
  loading: false,
};
const dataReducer = (state = AppState, action: IDataActionType) => {
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
