import React from 'react';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import { Flex, Box } from 'reflexbox';

import Card from '@components/Card';
import blocks from '@blocks/index';

const Home: NextPage = () => (
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

Home.getInitialProps = (ctx: NextPageContext) => {
  const allBlocks = Object.keys(blocks);

  const component = allBlocks[Math.floor(Math.random() * allBlocks.length)];

  const { res } = ctx;
  if (res) {
    res.writeHead(301, {
      Location: `/components/${component}`,
    });

    res.end();
  }
  return {};
};

export default Home;
