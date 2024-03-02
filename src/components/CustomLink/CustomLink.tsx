import React, { ReactNode } from 'react';
import { useMatch } from 'react-router-dom';
import { ROUTE } from 'router';
import { StyledCustomLink } from './styles';

interface CustomLinkProps {
  children: ReactNode;
  to: ROUTE;
}

export const CustomLink = ({ children, to }: CustomLinkProps) => {
  const isActive = useMatch(to);
  return (
    <StyledCustomLink to={to} $isActive={!isActive}>
      {children}
    </StyledCustomLink>
  );
};
