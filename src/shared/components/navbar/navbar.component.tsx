import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { H1 } from '../../../theme/typography';
import { localesSelectors } from '../../../modules/locales';
import { ROUTES } from '../../../routes/app.constants';
import { getActiveBreakpoint } from '../../../theme/media';
import { NavbarLink } from '../../navbarLink';
import { Container, Heading, Logo, LinksSection, MenuIcon } from './navbar.styles';

export const Navbar = () => {
  const breakpoint = getActiveBreakpoint();
  const isMobile = breakpoint === 'mobile';

  const [activeRoute, setActiveRoute] = useState(window.location.pathname);
  const [isMenuOpened, setIsMenuOpened] = useState(!isMobile);

  const language = useSelector(localesSelectors.selectLocalesLanguage);

  const route = (ROUTE: string): string => `/${language || 'en'}${ROUTE}`;

  const PATHS = {
    calendar: route(ROUTES.calendar),
    allPlants: route(ROUTES.allPlants),
    encyclopedia: route(ROUTES.encyclopedia),
  };

  const handleLinkClick = () => {
    if (window.location.pathname !== activeRoute) {
      setActiveRoute(window.location.pathname);
    }
    if (isMobile) {
      setIsMenuOpened(false);
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
        {isMobile && <MenuIcon onClick={() => setIsMenuOpened(!isMenuOpened)} />}
      </Heading>
      <LinksSection isMenuOpened={isMenuOpened}>
        {isMenuOpened && (
          <>
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
            <NavbarLink to={PATHS.encyclopedia} onClick={handleLinkClick} active={isActiveRoute(PATHS.encyclopedia)}>
              <FormattedMessage
                id="encyclopediaLink"
                defaultMessage="Plant encyclopedia"
                description="Plant encyclopedia / Link"
              />
            </NavbarLink>
          </>
        )}
      </LinksSection>
    </Container>
  );
};
