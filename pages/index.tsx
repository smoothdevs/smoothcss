import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
`;

export default function Home() {
  return <Title>SmoothCSS[dot]com</Title>;
}
