import React from 'react';
import { Flex, Box } from 'reflexbox';

import PlaygroundStore from '../../stores/playground';

import { Button, Input } from './components';

const Preview: React.FC = () => {
  const playground = PlaygroundStore.useContainer();
  const component = playground.component;
  let Component = null;

  switch (component) {
    case 'Button':
      Component = Button;
      break;
    case 'Input':
      Component = Input;
      break;
    default:
      Component = Button;
  }

  return (
    <Flex height='100%' justifyContent='center' alignItems='center'>
      <Box>
        <Component>{component}</Component>
      </Box>
    </Flex>
  );
};

export default Preview;
