import React from 'react';
import Link from 'next/link';
import { Flex, Box } from 'reflexbox';

import Card from '../components/Card';
import blocks from '../blocks';

const Home: React.FC = () => {
  return (
    <Flex p={['5px', '30px']} flexDirection={['column', 'row']} flexWrap='wrap' textAlign='center'>
      {Object.entries(blocks).map((block) => (
        <Link href='/components/[component]' as={`/components/${block[0]}`} key={block[0]}>
          <Box width={[1, 1 / 3]} p={['10px']}>
            <Card>{block[1].name}</Card>
          </Box>
        </Link>
      ))}
    </Flex>
  );
};

export default Home;
