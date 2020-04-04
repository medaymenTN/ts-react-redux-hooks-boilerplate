import { RouteProps } from "react-router-dom";
import Login from "../containers/login";
import Home from "../containers/home";
const routes: RouteProps[] = [
  {
    component: Login,
    path: "/",
    exact: true,
  },
  {
    component: Home,
    path: "/login",
  },
];

export default routes;
