import { applyMiddleware, createStore, compose } from 'redux';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './rootReducer';
import { apiMiddleware } from '../middlewares/middleware';

const store: ReturnType<typeof createStore> = createStore(
  reducers,
  compose(
    applyMiddleware(Thunk),
    applyMiddleware(apiMiddleware),
    composeWithDevTools(),
  ),
);
export default store;
