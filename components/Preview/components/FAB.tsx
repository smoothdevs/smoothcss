import React from 'react';
import styled from 'styled-components';
import { Props } from './types';

const FAB: React.FC<Props> = ({ children, className }: Props) => {
  const Component = styled.div`
    * {
      font-size: 24px;
      cursor: pointer;
      border: none;
    }
  `;

  return <Component className={className}>{children}</Component>;
};

export default FAB;
