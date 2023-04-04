import styled from 'styled-components';

const StyledForm = styled.form`
  display: grid;
  grid-gap: 45px;
  justify-content: center;
  padding-top: 203px;
  @media (max-width: 768px) {
    padding-top: 236px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  line-height: 58px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 35px;
  }
`;

const Subtitle = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  line-height: 38px;
  color: rgba(117, 108, 108, 0.57);
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

const InputGroup = styled.div`
  display: grid;
  grid-gap: 32px;
  width: 455px;
  @media (max-width: 768px) {
    width: 321px;
    grid-gap: 17px;
  }
`;

const Total = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 35px;
  letter-spacing: -0.3px;
  @media (max-width: 411px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export { StyledForm, Title, Subtitle, InputGroup, Total };
