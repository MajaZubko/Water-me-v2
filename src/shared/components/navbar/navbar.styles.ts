import styled from 'styled-components';
import Menu from '@material-ui/icons/Menu';
import { plantGreen } from '../../../theme/color';
import { ReactComponent as LogoSVG } from '../../../images/icons/logo.svg';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
`;

type LinksSectionProps = {
  isMenuOpened: boolean;
};

export const LinksSection = styled.section<LinksSectionProps>`
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Logo = styled(LogoSVG)`
  width: 100px;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuIcon = styled(Menu)`
  color: ${plantGreen};
`;
