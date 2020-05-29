import styled, { css } from 'styled-components';
import shadows from '../../mixins/shadows';

const FABStyled = styled.div<{ open: boolean }>`
  ${shadows}
  border-radius: 50%;
  height: 56px;
  width: 56px;
  line-height: 56px;
  text-align: center;
  font-size: 26px;
  cursor: pointer;
  * {
    vertical-align: text-top;
    transition: all 0.3s ease-out;
  }
  color: #ffffff;
  ${({ theme: { colors }, open }) => css`
    background: ${colors.primary};
    ${open &&
    css`
      background: ${colors.primaryLight};
      svg {
        transition: all 0.3s ease-out;
        transform: rotate(90deg);
      }
    `}
  `}
`;

const FABDropdown = styled.div<{ open: boolean }>`
  ${shadows}
  position: absolute;
  width: auto;
  display: none;
  color: #000000;
  background: #ffffff;
  padding: 10px;
  ${({ open }) => css`
    ${open &&
    css`
      transition: all 1s ease-out;
      display: block;
    `}
  `}
`;

const FABElement = styled.div<{ active: boolean }>`
  padding-right: 20px;
  text-align: left;
  ${({ active, theme: { colors } }) => css`
    &:hover {
      color: ${colors.primaryLight};
    }
    ${active &&
    css`
      color: ${colors.primary};
    `}
  `}
`;

export { FABStyled, FABDropdown, FABElement };
