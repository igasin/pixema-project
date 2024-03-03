import React, { ReactNode } from 'react';
import { StyledButton } from './styles';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: ReactNode;
}

export const Button = ({ type, children }: ButtonProps) => <StyledButton type={type} children={children} />;
