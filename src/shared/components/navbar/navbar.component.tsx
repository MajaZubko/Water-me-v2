import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { H1, StyledLink } from '../../../theme/typography';
import { localesSelectors } from '../../../modules/locales';
import { Container, Heading, Logo, LinksSection } from './navbar.styles';

export const Navbar = () => {
  const language = useSelector(localesSelectors.selectLocalesLanguage);

  return (
    <Container>
      <Heading>
        <H1>
          <FormattedMessage id="pageTitle" defaultMessage="Water me" description="App / Page title" />
        </H1>
        <Logo />
      </Heading>
      <LinksSection>
        <StyledLink to={`/${language || 'en'}/calendar`}>
          <FormattedMessage
            id="wateringCalendarLink"
            defaultMessage="Watering calendar"
            description="Watering calendar / Link"
          />
        </StyledLink>
        <StyledLink to={`/${language || 'en'}/allPlants`}>
          <FormattedMessage id="allPlantsLink" defaultMessage="List of plants" description="All plants / Link" />
        </StyledLink>
      </LinksSection>
    </Container>
  );
};
