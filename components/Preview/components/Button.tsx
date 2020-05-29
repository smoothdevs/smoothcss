import React from 'react';
import styled, { css } from 'styled-components';

import PlaygroundStore from '../../../stores/playground';

const Button: React.FC = ({ children }) => {
  const playground = PlaygroundStore.useContainer();

  const Component = styled.button`
    ${() => css`
      ${playground.styles.root};
    `}
    font-size: 32px;
    cursor: pointer;
    &:hover {
      ${() => css`
        ${playground.styles.hover};
      `}
    }
    &:active {
      ${() => css`
        ${playground.styles.active};
      `}
    }
  `;

  return <Component>{children}</Component>;
};

export default Button;
