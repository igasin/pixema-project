import { ReactNode } from 'react';
import { ROUTE } from 'router';

export interface CustomLinkProps {
  children: ReactNode;
  to: ROUTE;
  onClick?: () => void;
}
