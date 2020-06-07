import styled, { css } from 'styled-components';
import shadows from '../../mixins/shadows';

const ControlPanelStyled = styled.div`
  ${shadows}
  background: #ffffff;
  padding: 20px;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
`;

const StyledEditor = styled.div<{ html: boolean }>`
  overflow: auto;

  flex-basis: 50%;
  width: 100%;
  max-width: 100%;

  height: 180px;
  max-height: 180px;

  ${({ html }) => css`
    ${html &&
    css`
      height: 68px;
      max-height: 68px;
    `}
  `}

  * > textarea:focus {
    outline: none;
  }
`;

export { ControlPanelStyled, StyledEditor };
