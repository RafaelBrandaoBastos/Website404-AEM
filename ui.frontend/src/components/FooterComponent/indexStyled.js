import styled from "styled-components";

export const Footer = styled.p`
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: normal;
    color: #BDBDBD;
    align-items: center;
    justify-content: center;
`;
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 250px;
    @media (max-width: 1200px) {
    margin-top: 2vh;  
    }
    @media (max-width: 600px) {
    margin-top: 10vh;  
    }
`;
