import styled from "styled-components";

export const Text = styled.p`
    font-family: 'Space Mono';
    font-size: 24px;
    font-weight: normal;
    color: #4F4F4F;
    @media (max-width: 1200px) {
    font-size: 18px;
  }
`;
export const Container = styled.div`
  margin: 40px 0px 40px 0px;
  max-width: 400px;
  @media (max-width: 1210px) {
    max-width: 600px;
  }
`;
