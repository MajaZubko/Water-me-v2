import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { useSelector } from 'react-redux';

import { plantGreen } from '../../../theme/color';
import { getActiveBreakpoint } from '../../../theme/media';
import { localesSelectors } from '../../../modules/locales';
import { FormModal } from '../formModal';
import { emptyPlant, usePlants } from '../plants';
import { Container } from './calendar.styles';

export const Calendar = () => {
  const language = useSelector(localesSelectors.selectLocalesLanguage);

  const breakpoint = getActiveBreakpoint();
  const isMobile = breakpoint === 'mobile';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPlant, setModalPlant] = useState(emptyPlant);

  const { plants, fetchPlants, editPlant } = usePlants();

  useEffect(() => {
    fetchPlants();
  }, []);

  const calendarEvents = plants.map((plant) => {
    return {
      title: `${plant.name} - ${plant.location}`,
      date: plant.nextWatering,
      plant,
    };
  });

  return (
    <Container>
      <FullCalendar
        locale={language || 'en'}
        plugins={[dayGridPlugin, listPlugin]}
        initialView={isMobile ? 'listMonth' : 'dayGridMonth'}
        firstDay={1}
        events={calendarEvents}
        eventClick={(event) => {
          setModalPlant(event.event._def.extendedProps.plant);
          setIsModalOpen(true);
        }}
        eventColor={plantGreen}
        height="auto"
        buttonText={{
          today: language === 'pl' ? 'dzisiaj' : 'today',
        }}
        headerToolbar={{
          start: 'prev,next',
          center: 'title',
          end: `${!isMobile ? 'today' : ''}`,
        }}
      />
      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        action={editPlant}
        plant={modalPlant}
        onlyWatering
        buttonText={'Add watering'}
      />
    </Container>
  );
};
