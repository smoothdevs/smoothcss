import React from 'react';

import { InputStyled } from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = (props: InputProps) => {
  return <InputStyled {...props} />;
};

export default Input;
