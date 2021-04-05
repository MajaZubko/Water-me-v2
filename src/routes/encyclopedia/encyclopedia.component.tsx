import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { Container, LatinName, NeedsContainer, PlantName, WaterNeed } from './encyclopedia.styles';
import { useGetPlants } from './encyclopedia.queries';
import { EncyclopediaPlant } from './encyclopedia.types';

export const Encyclopedia = () => {
  const { data, isFetching }: { data?: EncyclopediaPlant[]; isFetching: boolean } = useGetPlants();
  console.log(data);

  return (
    <Container>
      {!!data &&
        data.map((plant) => (
          <Card>
            <CardContent key={plant.id}>
              <PlantName>{plant.name}</PlantName>
              <LatinName>{plant.latinName}</LatinName>
              <NeedsContainer>
                <WaterNeed>Water: every {plant.waterNeeds} days </WaterNeed>
                <div>Sun: {plant.sunNeeds}</div>
              </NeedsContainer>
            </CardContent>
          </Card>
        ))}
    </Container>
  );
};
