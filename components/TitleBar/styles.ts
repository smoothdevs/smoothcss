import styled, { css } from 'styled-components';
import { Flex } from 'reflexbox';

const TitleBarStyled = styled(Flex)`
  height: auto;
  box-shadow: 1px 3px 8px #dedede;
  background: #ffffff;
`;

const Title = styled.span`
  font-size: 32px;
  font-weight: 500;
  ${({ theme: { colors } }) => css`
    color: ${colors.primary};
  `}
`;

export { TitleBarStyled, Title };
