import styled from 'styled-components';
import Toolbar from '../components/Toolbar';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
`;

const Home: React.FC = () => {
  return (
    <>
      <Toolbar />
      <Title>SmoothCSS[dot]com</Title>
    </>
  );
};
export default Home;
