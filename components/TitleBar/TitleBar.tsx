import React from 'react';
import Link from 'next/link';
import { Box } from 'reflexbox';
import { FaGithub } from 'react-icons/fa';

import { TitleBarStyled, Title } from './styles';

const TitleBar: React.FC = () => {
  return (
    <nav>
      <TitleBarStyled p='5px'>
        <Box width={9 / 10}>
          <Link href='/'>
            <a>
              <img src='/logo.svg' alt='SmoothCSS Logo' height='30px' width='30px' />
              <Title>SmoothCSS</Title>
            </a>
          </Link>
        </Box>
        <Box width={1 / 10} textAlign='right' pr='10px'>
          <a href='https://github.com/smoothdevs/smoothcss' target='_blank' rel='noreferrer'>
            <FaGithub fontSize='1.8rem' />
          </a>
        </Box>
      </TitleBarStyled>
    </nav>
  );
};

export default TitleBar;
