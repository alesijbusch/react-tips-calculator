import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 13px;
  font-size: 24px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: -0.3px;
  color: #ffffff;
  background: #2ed2c9;
  border: 0;
  cursor: pointer;
  :disabled {
    opacity: 0.5;
  }
`;

export { StyledButton };
