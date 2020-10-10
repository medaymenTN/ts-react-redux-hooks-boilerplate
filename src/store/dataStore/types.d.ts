import { ActionType } from 'typesafe-actions';
import * as actions from './data.action.creators';

type IDataState = {
  data: any[];
  loading: boolean;
};

type IDataActionType = ActionType<typeof actions>;

export { IDataActionType, IDataState };
