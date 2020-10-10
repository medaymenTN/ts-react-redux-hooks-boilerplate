import { applyMiddleware, createStore, compose } from 'redux';
import Thunk from 'redux-thunk';
import reducers from './rootReducer';
import { apiMiddleware } from '../middlewares/middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
const store: ReturnType<typeof createStore> = createStore(
  reducers,
  compose(
    applyMiddleware(Thunk),
    applyMiddleware(apiMiddleware),
    composeWithDevTools()
  )
);
export default store;
