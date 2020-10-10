import actionTypes from './action.enum';
import { IUserActionType, IUserState } from './types';

const INITIAL_STATE: IUserState = {
  userData: {},
  loading: false,
  isLoggedIn: false,
  errorMessage: '',
};
/**
 *
 * @param state
 * @param action
 */
const userReducer = (
  state = INITIAL_STATE,
  action: IUserActionType,
): IUserState => {
  switch (action.type) {
    case actionTypes.LOGIN_PENDING:
      return { ...state, loading: true };
    case actionTypes.LOGIN__SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        isLoggedIn: true,
      };
    case actionTypes.LOGIN__ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage || ' ',
      };
    default:
      return state;
  }
};
export default userReducer;
