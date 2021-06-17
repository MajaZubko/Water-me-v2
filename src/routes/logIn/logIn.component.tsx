import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';

import { Container } from './logIn.styles';

export const LogIn = () => {
  const intl = useIntl();

  return (
    <Container>
      <Helmet
        title={intl.formatMessage({
          id: 'logIn',
          defaultMessage: 'Log in',
          description: 'Log in / page title',
        })}
      />
      <div>Log in</div>
    </Container>
  );
};
