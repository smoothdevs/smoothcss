import React from 'react';
import styled from 'styled-components';

import PlaygroundStore from '../../../stores/playground';

const Button: React.FC = ({ children }) => {
  const playground = PlaygroundStore.useContainer();

  const Component = styled.div`
    ${playground.styles.root}
    &:hover {
      ${playground.styles.hover}
    }
  `;

  return <Component>{children}</Component>;
};

export default Button;
