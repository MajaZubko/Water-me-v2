import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { H1 } from '../../../theme/typography';
import { localesSelectors } from '../../../modules/locales';
import { ROUTES } from '../../../routes/app.constants';
import { NavbarLink } from '../../navbarLink';
import { Container, Heading, Logo, LinksSection } from './navbar.styles';

export const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState(window.location.pathname);

  const language = useSelector(localesSelectors.selectLocalesLanguage);

  const PATHS = {
    calendar: `/${language || 'en'}${ROUTES.calendar}`,
    allPlants: `/${language || 'en'}${ROUTES.allPlants}`,
  };

  const handleLinkClick = () => {
    if (window.location.pathname !== activeRoute) {
      setActiveRoute(window.location.pathname);
    }
  };

  const isActiveRoute = (route: string): boolean => activeRoute === route;

  return (
    <Container>
      <Heading>
        <H1>
          <FormattedMessage id="pageTitle" defaultMessage="Water me" description="App / Page title" />
        </H1>
        <Logo />
      </Heading>
      <LinksSection>
        <NavbarLink to={PATHS.calendar} onClick={handleLinkClick} active={isActiveRoute(PATHS.calendar)}>
          <FormattedMessage
            id="wateringCalendarLink"
            defaultMessage="Watering calendar"
            description="Watering calendar / Link"
          />
        </NavbarLink>
        <NavbarLink to={PATHS.allPlants} onClick={handleLinkClick} active={isActiveRoute(PATHS.allPlants)}>
          <FormattedMessage id="allPlantsLink" defaultMessage="List of plants" description="All plants / Link" />
        </NavbarLink>
      </LinksSection>
    </Container>
  );
};