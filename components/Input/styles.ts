import styled from 'styled-components';

import { InputProps } from './types';

const InputStyled = styled.input<InputProps>`
  padding: 4px;
  font-size: 1.2rem;
  width: 100%;
  max-width: 100%;
  border: 1px solid rgba(30, 30, 30, 0.6);
  background: #fafafa;
  &:hover {
    border-color: rgba(30, 30, 30, 0.9);
  }
`;

export { InputStyled };
