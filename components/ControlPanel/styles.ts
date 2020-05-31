import styled from 'styled-components';
import shadows from '../../mixins/shadows';

const ControlPanelStyled = styled.div`
  ${shadows}
  background: #ffffff;
  padding: 20px;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
`;

const Pre = styled.pre`
  text-align: left;
  margin: 0;
  padding: 0.5em;
  overflow: scroll;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

export { ControlPanelStyled, Pre, Line, LineNo, LineContent };
