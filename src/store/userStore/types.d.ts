import { ActionType } from 'typesafe-actions';
import * as actions from './user.action.creators';

type IUserState = {
  userData: {};
  loading: boolean;
  isLoggedIn: boolean;
  errorMessage: string;
};

type IUserPayload = Partial<{
  errorMessage: string;
  userData: {};
  token: string;
}>;

type IUserActionType = ActionType<typeof actions>;

export { IUserState, IUserActionType, IUserPayload };
