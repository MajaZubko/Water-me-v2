import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';

import { PlantsList } from '../../shared/components/plants';
import { Container } from './allPlants.styles';

export const AllPlants = () => {
  const intl = useIntl();

  return (
    <Container>
      <Helmet
        title={intl.formatMessage({
          id: 'allPlants',
          defaultMessage: 'All plants',
          description: 'All plants / page title',
        })}
      />
      <PlantsList />
    </Container>
  );
};
