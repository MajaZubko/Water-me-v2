import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';

import { auth, firestore } from '../../config/firebase';
import { Plant } from '../../modules/plants/plants.types';
import { Container } from './signUp.styles';

export const SignUp = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);

  const intl = useIntl();
  const usersRef = firestore.collection('users');

  useEffect(() => {
    usersRef.onSnapshot((snapshot) => {
      const user = snapshot.docs.find((doc) => doc.id === auth.currentUser?.uid);
      const data = user?.data().plants;
      setPlants(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <Container>
      <Helmet
        title={intl.formatMessage({
          id: 'signUp',
          defaultMessage: 'Sign up',
          description: 'Sign up / page title',
        })}
      />
      <div>{plants && plants.map((plant) => <p key={plant.id}>{plant.name}</p>)}</div>
    </Container>
  );
};
