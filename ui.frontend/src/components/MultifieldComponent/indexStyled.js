import styled from "styled-components";


export const Button = styled.button`
    width: 216px;
    height: 68px;
    font-size: 14px;
    font-family: 'Space Mono';
    font-weight: bold;
    color: #FFFFFF;
    background-color: #333333;
    border-style: none;
`;
export const Text = styled.p`
    font-family: 'Space Mono';
    font-size: 24px;
    font-weight: normal;
    color: #4F4F4F;
    @media (max-width: 1200px) {
    font-size: 18px;
  }
`;
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
export const Container = styled.div`
  margin: 40px 0px 40px 0px;
  max-width: 400px;
  @media (max-width: 1210px) {
    max-width: 600px;
  }
`;