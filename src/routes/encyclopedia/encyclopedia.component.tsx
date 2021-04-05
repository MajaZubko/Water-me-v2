import React from 'react';
import { Container } from './encyclopedia.styles';
import { useGetPlants } from './encyclopedia.queries';

export const Encyclopedia = () => {
  const { data, isFetching } = useGetPlants();
  console.log(data);

  return <Container>{!!data && data.map((plant) => <div key={plant.id}>{plant.name}</div>)}</Container>;
};
