import React from "react";
import "./styles.css";
import { useDispatch, useSelector, DefaultRootState } from "react-redux";
import { LoginAction } from "../../store/userStore/user.actions";
import { RootState } from "../../store/rootReducer";

const Login: React.FC<{}> = () => {
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
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
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
