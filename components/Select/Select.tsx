import React from 'react';

import { SelectStyled } from './styles';
import { SelectProps } from './types';

const Select: React.FC<SelectProps> = ({ children, onChange, value }: SelectProps) => {
  return (
    <SelectStyled onChange={onChange} value={value}>
      {children}
    </SelectStyled>
  );
};

export default Select;
