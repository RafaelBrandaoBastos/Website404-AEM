import styled from "styled-components";

export const Img = styled.img`
    width: 500px;
    height: auto;
    @media (max-width: 600px) {
    width: 400px;  
    }
    @media (max-width: 480px) {
    width: 300px;  
    }
    @media (max-width: 370px) {
    width: 100%;
    height: auto; 
    }
`;


