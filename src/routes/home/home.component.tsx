import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';

import { Calendar } from '../../shared/components/calendar';
import { Container } from './home.styles';

export const Home = () => {
  const intl = useIntl();

  return (
    <Container>
      <Helmet
        title={intl.formatMessage({
          id: 'homepage',
          defaultMessage: 'Homepage',
          description: 'Home / page title',
        })}
      />
      <Calendar />
    </Container>
  );
};
