import React from 'react';
import { StyledLink } from '../../theme/typography';
import { LinkBody } from './navbarLink.styles';

type NavbarLinkProps = {
  to: string;
  children: JSX.Element;
  active: boolean;
  onClick: () => void;
};

export const NavbarLink = ({ to, children, active, onClick }: NavbarLinkProps): JSX.Element => {
  return (
    <LinkBody active={active} onClick={onClick}>
      <StyledLink to={to}>{children}</StyledLink>
    </LinkBody>
  );
};
