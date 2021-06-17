import React from 'react';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { DEFAULT_LOCALE, appLocales, translationMessages } from '../i18n';
import { asyncComponent } from '../shared/utils/asyncComponent';
import { AppComponent as App } from './app.component';
import { ROUTES } from './app.constants';
import { AllPlants } from './allPlants';
import { Encyclopedia } from './encyclopedia';
import { LogIn } from './logIn';
import { SignUp } from './signUp';
//<-- IMPORT ROUTE -->

const Home = asyncComponent(() => import('./home'), 'Home');
const NotFound = asyncComponent(() => import('./notFound'), 'NotFound');

const MatchedLanguageComponent = () => {
  const match = useRouteMatch();
  return (
    <App>
      <Switch>
        <Route exact path={`${match.path}${ROUTES.calendar}`}>
          <Home />
        </Route>
        <Route exact path={`${match.path}${ROUTES.allPlants}`}>
          <AllPlants />
        </Route>
        <Route exact path={`${match.path}${ROUTES.encyclopedia}`}>
          <Encyclopedia />
        </Route>
        <Route exact path={`${match.path}${ROUTES.logIn}`}>
          <LogIn />
        </Route>
        <Route exact path={`${match.path}${ROUTES.signUp}`}>
          <SignUp />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </App>
  );
};

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={`${DEFAULT_LOCALE}/calendar`} />
      </Route>

      <Route path={`/:lang(${appLocales.join('|')})`}>
        <MatchedLanguageComponent />
      </Route>

      <IntlProvider locale={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
        <Route>
          <NotFound />
        </Route>
      </IntlProvider>
    </Switch>
  );
};
