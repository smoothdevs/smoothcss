import styled, { css } from 'styled-components';

const PanelTitleStyled = styled.div`
  color: white;
  padding: 5px;
  font-size: 22px;
  text-transform: capitalize;
  ${({ theme: { colors } }) => css`
    background: linear-gradient(to right, ${colors.primary}, #ffffff);
  `}
`;

export { PanelTitleStyled };
