import React from 'react';
import styled, { css } from 'styled-components';

import PlaygroundStore from '../../../stores/playground';

const Card: React.FC = ({ children }) => {
  const playground = PlaygroundStore.useContainer();

  const Component = styled.div`
    ${() => css`
      ${playground.styles.root};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 200px;
      color: #000;
      font-size: 28px;
    `}
    &:hover {
      ${() => css`
        ${playground.styles.hover};
      `}
    }
  `;

  return <Component>{children}</Component>;
};

export default Card;
