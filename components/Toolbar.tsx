import { Box, Flex } from 'reflexbox';

export default function Toolbar() {
  return (
    <Flex color='#37352F' bg='white' alignItems='center' fontFamily='Roboto'>
      <Box>
        <img src='/logo-32.png' alt='logo' />
      </Box>
      <Box p={2} fontWeight='600' fontSize='20px'>
        SmoothCSS
      </Box>
      <Box ml='20px' fontSize='14px'>
        Scribble pad
      </Box>
    </Flex>
  );
}
