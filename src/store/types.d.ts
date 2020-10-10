import { IUserState } from './userStore/types';
import { IDataState } from './dataStore/types';

type RootState = {
  user: IUserState;
  data: IDataState;
};

export default RootState;
