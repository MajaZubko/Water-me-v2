import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import { useAuth } from '../../shared/services/context/AuthContext';
import { Container } from './logIn.styles';

export const LogIn = () => {
  const intl = useIntl();
  const history = useHistory();
  const { currentUser, loginWithGoogle } = useAuth();

  useEffect(() => {
    if (currentUser) {
      history.push(`/${intl.locale}/calendar`);
    }
  }, [currentUser]);

  return (
    <Container>
      <Helmet
        title={intl.formatMessage({
          id: 'logIn',
          defaultMessage: 'Log in',
          description: 'Log in / page title',
        })}
      />
      <div>
        <h1>Log in</h1>
        <Button onClick={loginWithGoogle}>Log in with Google</Button>
      </div>
    </Container>
  );
};
