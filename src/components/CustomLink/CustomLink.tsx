import { ReactNode } from 'react';
import { useMatch } from 'react-router-dom';
import { ROUTE } from 'router';
import { StyledCustomLink } from './styles';

interface CustomLinkProps {
  children: ReactNode;
  to: ROUTE;
  onClick?: () => void;
}

export const CustomLink = ({ children, to, onClick }: CustomLinkProps) => {
  const isActive = useMatch(to);
  return (
    <StyledCustomLink to={to} $isActive={isActive} onClick={onClick}>
      {children}
    </StyledCustomLink>
  );
};

CustomLink.defaultProps = {
  onClick: () => {},
};
