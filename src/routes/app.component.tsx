import React, { Fragment, ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import { translationMessages } from '../i18n';
import { GlobalStyle } from '../theme/global';
import { localesSelectors } from '../modules/locales';
import { Navbar } from '../shared/components/navbar';
import { AuthProvider } from '../shared/services/context/AuthContext';
import { useStartup } from './useStartup';
import { useLanguageFromParams } from './useLanguageFromParams';

export interface AppComponentProps {
  children?: ReactNode;
}

export const AppComponent = ({ children }: AppComponentProps) => {
  useStartup();
  useLanguageFromParams();

  const language = useSelector(localesSelectors.selectLocalesLanguage);

  if (!language) {
    return null;
  }

  return (
    <IntlProvider key={language} locale={language} messages={translationMessages[language]}>
      <AuthProvider>
        <HelmetProvider>
          <Fragment>
            <FormattedMessage id="pageTitle" defaultMessage="Water me" description="App / Page title">
              {([pageTitle]: [string]) => <Helmet titleTemplate={`%s - ${pageTitle}`} defaultTitle={pageTitle} />}
            </FormattedMessage>
            <Navbar />
            <GlobalStyle />
            {React.Children.only(children)}
          </Fragment>
        </HelmetProvider>
      </AuthProvider>
    </IntlProvider>
  );
};
