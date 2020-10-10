import { action } from 'typesafe-actions';
import actionTypes from './action.enum';

export const loadDataPending = () => action(actionTypes.LOAD_DATA);

export const loadDataSuccess = (payload: any) =>
  action(actionTypes.LOAD_DATA_SUCCESS, payload);

export const loadDataError = () => action(actionTypes.LOAD_DATA_ERROR);
