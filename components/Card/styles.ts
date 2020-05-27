import styled from 'styled-components';
import shadows from '../../mixins/shadows';

const CardStyled = styled.div`
  ${shadows}
  padding: 20px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-out;
  background: #ffffff;
  border-radius: 5px;
`;

export { CardStyled };
