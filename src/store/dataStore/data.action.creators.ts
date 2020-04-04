import actionTypes from "./types";

export interface IActionCreator {
  type: actionTypes;
  payload?: any;
  loading: boolean;
}

export const loadDataPending = (): IActionCreator => ({
  type: actionTypes.LOAD_DATA,
  loading: true,
});

export const loadDataSuccess = (payload: any): IActionCreator => ({
  type: actionTypes.LOAD_DATA_SUCCESS,
  loading: false,
  payload: payload,
});

export const loadDataError = (): IActionCreator => ({
  type: actionTypes.LOAD_DATA_ERROR,
  loading: false,
});
