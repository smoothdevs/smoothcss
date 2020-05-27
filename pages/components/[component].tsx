import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Flex, Box } from 'reflexbox';

import TitleBar from '../../components/TitleBar';
import FAB from '../../components/FAB';
import Preview from '../../components/Preview';
import ControlPanel from '../../components/ControlPanel';
import blocks from '../../blocks';
import PlaygroundStore from '../../stores/playground';

const Component: React.FC = () => {
  const router = useRouter();
  const { component } = router.query;
  const playground = PlaygroundStore.useContainer();

  if (!component) return null;

  const componentBlock = blocks[component as string];

  const presets = componentBlock.presets;

  useEffect(() => {
    playground.setComponent(componentBlock.name);
    playground.setStyles(presets[playground.preset].styles);
  }, [component]);

  return (
    <>
      <TitleBar />
      <Flex p={20} flexWrap='wrap'>
        <Box width={[1, 1 / 10]}>
          <FAB component={component as string} />
        </Box>
        <Box width={6 / 10}>
          <Preview />
        </Box>
        <Box width={3 / 10}>
          <ControlPanel />
        </Box>
      </Flex>
    </>
  );
};

export default Component;
