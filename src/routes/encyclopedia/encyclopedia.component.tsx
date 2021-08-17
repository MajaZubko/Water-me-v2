import React, { useEffect, useState } from 'react';
import { CardContent } from '@material-ui/core';
import { firestore } from '../../config/firebase';
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
import { EncyclopediaPlant } from './encyclopedia.types';

export const Encyclopedia = () => {
  const [plants, setPlants] = useState<EncyclopediaPlant[]>([]);

  const encyclopediaRef = firestore.collection('encyclopedia');
  useEffect(() => {
    encyclopediaRef.onSnapshot((snapshot) => {
      const encyclopediaPlants = snapshot.docs;
      const fetchedPlants: any[] | ((prevState: EncyclopediaPlant[]) => EncyclopediaPlant[]) = [];
      encyclopediaPlants.forEach((plant) => {
        fetchedPlants.push(plant.data().plant);
      });

      setPlants(fetchedPlants);
    });
  }, []);

  return (
    <Container>
      {!!plants &&
        plants.map((plant) => (
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
