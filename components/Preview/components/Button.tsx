import React from 'react';
import styled, { css } from 'styled-components';

import PlaygroundStore from '../../../stores/playground';

const Button: React.FC = ({ children }) => {
  const playground = PlaygroundStore.useContainer();

  const Component = styled.button`
    ${() => css`
      ${playground.styles.root};
    `}
    &:hover {
      ${() => css`
        ${playground.styles.hover};
      `}
    }
  `;

  return <Component>{children}</Component>;
};

export default Button;
