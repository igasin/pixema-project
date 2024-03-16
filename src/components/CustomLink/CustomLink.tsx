import { useMatch } from 'react-router-dom';
import { StyledCustomLink } from './styles';
import { CustomLinkProps } from './CustomLink.interface';

export const CustomLink = ({ children, to, onClick }: CustomLinkProps) => {
  const isActive = useMatch(to);
  return (
    <StyledCustomLink to={to} $isActive={isActive} onClick={onClick}>
      {children}
    </StyledCustomLink>
  );
};
