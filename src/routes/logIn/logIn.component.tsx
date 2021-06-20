import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firebase } from '../../config/firebase';
import { Button } from '../../shared/components/button';
import { Container } from './logIn.styles';

export const LogIn = () => {
  const intl = useIntl();
  const history = useHistory();

  console.log(intl);

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      history.push(`/${intl.locale}/calendar`);
    }
  }, [user]);

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

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
