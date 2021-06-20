import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';

import { Container } from './signUp.styles';

export const SignUp = () => {
  const intl = useIntl();

  return (
    <Container>
      <Helmet
        title={intl.formatMessage({
          id: 'signUp',
          defaultMessage: 'Sign up',
          description: 'Sign up / page title',
        })}
      />
      <div>SIGN UP</div>
    </Container>
  );
};
