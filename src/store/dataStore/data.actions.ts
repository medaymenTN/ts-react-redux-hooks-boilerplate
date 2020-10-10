import { ThunkDispatch, ThunkAction } from 'redux-thunk';

import { AnyAction } from 'redux';

import {
  loadDataSuccess,
  loadDataPending,
  loadDataError,
} from './data.action.creators';
import { API } from '../../middlewares/middleware';

export const loadDataFromServer = (): ThunkAction<
  Promise<void>,
  {},
  {},
  AnyAction
> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch(loadDataPending());
    try {
      const response = await API.get('');
      if (response) {
        dispatch(loadDataSuccess(response));
      }
    } catch (error) {
      dispatch(loadDataError());
    }
  };
};
