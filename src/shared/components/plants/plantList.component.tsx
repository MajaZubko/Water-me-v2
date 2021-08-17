import React, { useEffect, useState } from 'react';
import { sortBy } from 'lodash';
import { FormattedMessage } from 'react-intl';
import { Delete, Edit, Opacity, ExpandMore } from '@material-ui/icons';
import { AccordionSummary } from '@material-ui/core';

import { FormModal } from '../formModal';
import {
  ButtonSection,
  Container,
  Detail,
  IconButton,
  StyledButton,
  StyledAccordion,
  StyledAccordionDetails,
} from './plantList.styles';
import { usePlants } from './usePlants.hook';
import { emptyPlant } from './emptyPlant';

export const PlantsList = () => {
  const { plants, fetchPlants, editPlant, addPlant, deletePlant } = usePlants();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [modalPlant, setModalPlant] = useState(emptyPlant);

  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <Container>
      <FormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        action={modalMode === 'add' ? addPlant : editPlant}
        plant={modalPlant}
        buttonText={modalMode}
        onlyWatering={modalMode === 'water'}
      />
      <StyledButton
        onClick={() => {
          setModalPlant(emptyPlant);
          setModalMode('add');
          setIsModalOpen(true);
        }}
      >
        <FormattedMessage id="addPlantsButton" defaultMessage="Add plants" description="Add plants / Button" />
      </StyledButton>
      <>
        {sortBy(plants, 'name').map((plant, i) => (
          <StyledAccordion key={i}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              {`${plant.name} - ${plant.location}`}
              <ButtonSection>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalPlant(plant);
                    setModalMode('water');
                    setIsModalOpen(true);
                  }}
                >
                  <Opacity />
                </IconButton>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalPlant(plant);
                    setModalMode('edit');
                    setIsModalOpen(true);
                  }}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    deletePlant(plant);
                  }}
                >
                  <Delete />
                </IconButton>
              </ButtonSection>
            </AccordionSummary>
            <StyledAccordionDetails>
              <Detail>
                <FormattedMessage id="plantName" defaultMessage="Plant name" description="Plant name / Header" />
                <div>{plant.name}</div>
              </Detail>
              <Detail>
                <FormattedMessage id="location" defaultMessage="Location" description="Location / Header" />
                <div>{plant.location}</div>
              </Detail>
              <Detail>
                <FormattedMessage id="waterNeeds" defaultMessage="Water needs" description="Water needs / Header" />
                <div>{plant.waterNeeds}</div>
              </Detail>
              <Detail>
                <FormattedMessage id="lastWatered" defaultMessage="Last watered" description="Last watered / Header" />
                <div>{plant.lastWatered}</div>
              </Detail>
            </StyledAccordionDetails>
          </StyledAccordion>
        ))}
      </>
    </Container>
  );
};
