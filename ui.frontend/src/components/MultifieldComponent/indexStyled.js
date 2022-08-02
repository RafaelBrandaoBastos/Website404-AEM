import styled from "styled-components";


export const Button = styled.button`
    width: 216px;
    height: 68px;
    font-family: 'Space Mono';
    font-weight: bold;
    color: #FFFFFF;
    border-style: none;
    background-color: ${(props) => props.color2};
    font-size: ${(props) => props.fontSize2};
`;
export const Text = styled.p`
    font-family: 'Space Mono';
    font-weight: normal;
    color: ${(props) => props.color1};
    font-size: ${(props) => props.fontSize1};
    @media (max-width: 1200px) {
    font-size: 18px;
  }
`;
export const Title = styled.h1`
    font-family: 'Space Mono';
    font-size: ${(props) => props.fontSize};
    font-weight: bold;
    color: ${(props) => props.color};
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