import React from 'react';
import './styles.css';
import {
  MapStateToPropsParam,
  connect,
  MapDispatchToPropsParam,
} from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { LoginAction } from '../../store/userStore/user.actions.async';
import { ILoginDispatchProps, ILoginProps, ILoginStateProps } from './types';
import RootState from '../../store/types';

const Login: React.FC<ILoginProps> = (props) => {
  const { dispatchLoginAction, errorMessage, loading } = props;
  const { t } = useTranslation();
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleOnClick = (): void => {
    dispatchLoginAction(username, password);
  };

  return (
    <div className="container">
      <div>
        <p>{t('username')}</p>
        <input
          type="text"
          name="username"
          id="username"
          placeholder={t('username')}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <p>{t('password')}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder={t('password')}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>{loading ? <div>Loading ...</div> : <></>}</div>
      <div>{errorMessage}</div>
      <div>
        <input type="button" value="login" onClick={handleOnClick} />
      </div>
    </div>
  );
};

const mapStateToProps: MapStateToPropsParam<ILoginStateProps, {}, RootState> = (
  state: RootState,
) => {
  return {
    errorMessage: state.user.errorMessage,
    loading: state.user.loading,
  };
};

const mapDispatchToProps: MapDispatchToPropsParam<ILoginDispatchProps, {}> = (
  dispatch: ThunkDispatch<RootState, {}, Action>,
) => {
  return {
    dispatchLoginAction: (username: string, password: string) => {
      return dispatch(LoginAction(username, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
