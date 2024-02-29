import React, { ReactNode } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import { ROUTE } from '../../router/routes';

interface CustomLinkProps {
  children: ReactNode;
  to: ROUTE;
}

export const CustomLink = ({ children, to }: CustomLinkProps) => {
  const match = useMatch(to);
  return (
    <NavLink to={to} className={`${match && 'text-primary'}`}>
      {children}
    </NavLink>
  );
};
