import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Flex, Box } from 'reflexbox';

import FAB from '../../components/FAB';
import ControlPanel from '../../components/ControlPanel';
import blocks from '../../blocks';
import PlaygroundStore from '../../stores/playground';
import { BlocksSet } from '../../blocks/types';

const Preview = dynamic(import('../../components/Preview'), { ssr: false });

const Component: React.FC = () => {
  const router = useRouter();
  const { component } = router.query;
  const playground = PlaygroundStore.useContainer();

  if (!component) return null;

  const componentBlock = blocks[component as BlocksSet];

  const presets = componentBlock.presets;

  useEffect(() => {
    playground.setComponent(componentBlock.name);
    playground.setStyles(presets[playground.preset]!.styles);
    playground.setPresets(presets);
  }, [component, playground.preset]);

  return (
    <Flex p={20} flexWrap='wrap'>
      <Box width={[1, 1 / 10]}>
        <FAB component={component as string} />
      </Box>
      <Box width={[1, 6 / 10]} my={[10, 0]}>
        <Preview />
      </Box>
      <Box width={[1, 3 / 10]} minHeight={['70vh', '85vh']}>
        <ControlPanel />
      </Box>
    </Flex>
  );
};

export default Component;
