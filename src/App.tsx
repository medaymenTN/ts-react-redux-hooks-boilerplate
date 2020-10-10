import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import store from './store/store';
import routes from './routes/routes';
import i18n from './i18n/i18next';

const App = () => {
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    i18n.changeLanguage(e.target.value);

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <div>
          <select onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
        </div>
        <Router>
          <Switch>
            {routes.map((route: RouteProps) => (
              <Route key={`routes-${route.location}`} {...route} />
            ))}
          </Switch>
        </Router>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
