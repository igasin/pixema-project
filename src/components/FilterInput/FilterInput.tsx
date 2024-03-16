import { InputProps } from './FilterInput.interface';
import { StyledFilterInput } from './styles';

export const FilterInput = ({ type, placeholder, ...rest }: InputProps) => (
  <StyledFilterInput type={type} placeholder={placeholder} {...rest} />
);
