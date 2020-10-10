import axios from 'axios';
import { Middleware, MiddlewareAPI, Dispatch, AnyAction, Action } from 'redux';

// Set config defaults when creating the API
export const API = axios.create({
  baseURL: '',
});
/**
 * setting up middleware in order to dispatch redux actions
 */
export const apiMiddleware: Middleware = (api: MiddlewareAPI<any>) => (
  next: Dispatch<AnyAction>,
) => (action: Action) => {
  API.interceptors.request.use(
    (config) => {
      // Do something before request is sent(exemple check access token on localStorage)
      console.log('interceptor Working!!', config);
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  API.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      console.log('response handler is Working!!', response);
      return response;
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );
  // call the next action
  next(action);
};
