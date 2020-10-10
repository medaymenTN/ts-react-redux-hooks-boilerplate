import { combineReducers, CombinedState } from 'redux';
import { Reducer } from 'react';
import dataReducer from './dataStore/data.reducer';
import userReducer from './userStore/user.reducer';

const reducers: Reducer<CombinedState<any>, any> = combineReducers({
  data: dataReducer,
  user: userReducer,
});

export default reducers;
