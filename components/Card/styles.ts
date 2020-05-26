import styled from 'styled-components';

const CardStyled = styled.div`
  padding: 20px;
  cursor: pointer;
  box-shadow: 1px 3px 8px #dedede;
  transition: box-shadow 0.3s ease-out;
  background: #ffffff;
  border-radius: 5px;
  &:hover {
    box-shadow: 3px 5px 13px #dedede;
  }
`;

export { CardStyled };
