import { applyMiddleware, createStore } from "redux";
import Thunk from "redux-thunk";
import { reducers } from "./rootReducer";

const store: ReturnType<typeof createStore> = createStore(
  reducers,
  applyMiddleware(Thunk)
);
export default store;
