import { ThunkDispatch, ThunkAction } from "redux-thunk";
import Axios from "Axios";
import { AnyAction } from "redux";

import {
  loadDataSuccess,
  loadDataPending,
  loadDataError,
} from "./data.action.creators";
export const loadDataFromServer = (): ThunkAction<
  Promise<void>,
  {},
  {},
  AnyAction
> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(loadDataPending());
    try {
      const response = await Axios.get("");
      if (response) {
        dispatch(loadDataSuccess(response));
      }
    } catch (error) {
      dispatch(loadDataError());
    }
  };
};
