import React from 'react';
import Link from 'next/link';
import { Flex, Box } from 'reflexbox';

import TitleBar from '../components/TitleBar';
import Card from '../components/Card';
import blocks from '../blocks';

const Home: React.FC = () => {
  return (
    <>
      <TitleBar />
      <Flex p={['5px', '30px']} flexDirection={['column', 'row']} flexWrap='wrap' textAlign='center'>
        {blocks.map((block) => (
          <Link href='/components/[component]' as={`/components/${block.path}`} key={block.path}>
            <Box width={[1, 1 / 3]} p={['10px']}>
              <Card>{block.name}</Card>
            </Box>
          </Link>
        ))}
      </Flex>
    </>
  );
};

export default Home;
