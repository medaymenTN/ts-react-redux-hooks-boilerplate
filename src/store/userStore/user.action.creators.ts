import actionTypes from "./types";

export interface IActionCreator {
  type: actionTypes;
  payload?: any;
  loading: boolean;
}

export const loginIsPending = (): IActionCreator => ({
  type: actionTypes.LOGIN_PENDING,
  loading: true,
});

export const loginSuccess = (payload: any): IActionCreator => ({
  type: actionTypes.LOGIN__SUCCESS,
  loading: false,
  payload: payload,
});

export const loginError = (payload: any): IActionCreator => ({
  type: actionTypes.LOGIN__ERROR,
  loading: false,
  payload: payload,
});
