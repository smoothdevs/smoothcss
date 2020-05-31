import React from 'react';
import styled from 'styled-components';

import { Props } from './types';

const Card: React.FC<Props> = ({ children, className }: Props) => {
  const Component = styled.div`
    * {
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
      font-size: 28px;
    }
  `;

  return <Component className={className}>{children}</Component>;
};

export default Card;
