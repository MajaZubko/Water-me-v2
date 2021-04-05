import React from 'react';
import { CardContent } from '@material-ui/core';
import { SpinningLoader } from '../../shared/components/spinningLoader';
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

  if (isFetching) {
    return (
      <Container>
        <SpinningLoader />
      </Container>
    );
  }

  return (
    <Container>
      {!!data &&
        data.map((plant) => (
          <StyledCard key={plant.id}>
            <CardContent>
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
