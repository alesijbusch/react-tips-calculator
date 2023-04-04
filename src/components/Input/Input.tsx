import React, { ChangeEvent } from 'react';
import { StyledInput } from './styles';

interface InputProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, type, value, onChange }: InputProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
