import { IActionCreator } from "./user.action.creators";
import actionTypes from "./types";

interface IUserState {
  userData: {};
  loading: boolean;
  token: string;
  isLoggedIn: boolean;
  errorMessage: string;
}

const AppState: IUserState = {
  userData: {},
  loading: false,
  token: "",
  isLoggedIn: false,
  errorMessage: "",
};
/**
 *
 * @param state
 * @param action
 */
const userReducer = (state = AppState, action: IActionCreator): IUserState => {
  switch (action.type) {
    case actionTypes.LOGIN_PENDING:
      return { ...state, loading: true };
    case actionTypes.LOGIN__SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        userData: action.payload.userData,
        isLoggedIn: true,
      };
    case actionTypes.LOGIN__ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export default userReducer;
