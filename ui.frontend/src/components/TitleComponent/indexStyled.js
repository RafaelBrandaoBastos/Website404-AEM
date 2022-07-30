import styled from "styled-components";

export const Title = styled.h1`
    font-family: 'Space Mono';
    font-size: 64px;
    font-weight: bold;
    color: #4F4F4F;
    margin: 0px;
    padding: 0px;
    max-width: 700px;
    @media (max-width: 1210px) {
    /*margin-top: 20%;*/
    font-size: 48px;
    padding: 0px;
  }
  @media (max-width: 500px) {
    font-size: 36px;
    padding: 0px;
  }
`;
