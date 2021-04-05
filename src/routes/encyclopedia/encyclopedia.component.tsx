import React from 'react';
import { CardContent } from '@material-ui/core';
import {
  Container,
  LatinName,
  NeedsContainer,
  NeedLabel,
  PlantName,
  SunNeed,
  StyledCard,
  WaterNeed,
} from './encyclopedia.styles';
import { useGetPlants } from './encyclopedia.queries';
import { EncyclopediaPlant } from './encyclopedia.types';

export const Encyclopedia = () => {
  const { data, isFetching }: { data?: EncyclopediaPlant[]; isFetching: boolean } = useGetPlants();

  return (
    <Container>
      {!!data &&
        data.map((plant) => (
          <StyledCard>
            <CardContent key={plant.id}>
              <PlantName>{plant.name}</PlantName>
              <LatinName>{plant.latinName}</LatinName>
              <NeedsContainer>
                <WaterNeed>
                  <NeedLabel>Water: </NeedLabel> every {plant.waterNeeds} days{' '}
                </WaterNeed>
                <SunNeed>
                  <NeedLabel>Sun: </NeedLabel> {plant.sunNeeds}
                </SunNeed>
              </NeedsContainer>
            </CardContent>
          </StyledCard>
        ))}
    </Container>
  );
};
