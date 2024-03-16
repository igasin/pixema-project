import { StyledButton } from './styles';
import { ButtonProps } from './Button.interface';

export const Button = ({ type, children }: ButtonProps) => (
  <StyledButton type={type}>{children}</StyledButton>
);
