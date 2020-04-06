import React from "react";
import "./styles.css";
import { useDispatch, useSelector, DefaultRootState } from "react-redux";
import { LoginAction } from "../../store/userStore/user.actions";
import { RootState } from "../../store/rootReducer";
import { useTranslation } from "react-i18next";
const Login: React.FC<{}> = () => {
  const { t } = useTranslation();
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const state = useSelector<DefaultRootState, any>(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();

  const handleOnClick = (): void => {
    dispatch(LoginAction(username, password));
  };

  return (
    <div className="container">
      <div>
        <p>{t("username")}</p>
        <input
          type="text"
          name="username"
          id="username"
          placeholder={t("username")}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <p>{t("password")}</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder={t("password")}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>{state.loading ? <div>Loading ...</div> : <></>}</div>
      <div>{state.errorMessage}</div>
      <div>
        <input type="button" value="login" onClick={handleOnClick} />
      </div>
    </div>
  );
};

export default Login;
