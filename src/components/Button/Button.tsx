import React from 'react';
import { StyledButton } from './styles';

interface ButtonProps {
  disabled: boolean;
}

export const Button = ({ disabled }: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} type="submit">
      Ohhhoooo 🍻
    </StyledButton>
  );
};
