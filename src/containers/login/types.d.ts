import { type } from 'os';

type ILoginStateProps = {
  loading: boolean;
  errorMessage: string;
};

type ILoginDispatchProps = {
  dispatchLoginAction: (username: string, password: string) => void;
};

type ILoginProps = ILoginDispatchProps & ILoginStateProps;
