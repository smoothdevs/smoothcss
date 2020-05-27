import React from 'react';
import styled from 'styled-components';

import PlaygroundStore from '../../../stores/playground';

const Input: React.FC = ({ children }) => {
  const playground = PlaygroundStore.useContainer();

  const Component = styled.input`
    ${playground.styles.root}
    &:hover {
      ${playground.styles.hover}
    }
  `;

  return <Component placeholder={children as string} />;
};

export default Input;
