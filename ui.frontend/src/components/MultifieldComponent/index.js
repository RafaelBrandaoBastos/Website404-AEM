import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components"
import { Button, Title, Text, Container} from './indexStyled.js';

const Multifield = ({textcontent}) => {
    return(
        <>
            {textcontent.map(({title, titleColor, titleSize, text, textColor, textSize, label, labelColor, labelSize = {} }, index) => (
                <div key={index}>
                    <Title color = {titleColor} fontSize = {titleSize}>{title}</Title>
                    <Container><Text color1 = {textColor} fontSize1 = {textSize}>{text}</Text></Container>
                    <Button color2 = {labelColor} fontSize2 = {labelSize}>{label}</Button>
                </div>               
            ))} 
        </>
    );
};

Multifield.defaultProps = {
    textcontent: [ 
        {
            title: "I have bad news for you",
            text: "The page you are looking for might be removed or is temporarily unavailable",
            label: "BACK TO HOMEPAGE",
            color: "#333333",
            fontSize: "64px",
            color1: "#4F4F4F",
            fontSize1: "24px",
            color2: "#FFFFFF",
            fontSize2: "14px",
        },
    ],
};

export default MapTo("reactapp/components/multifield-component")(Multifield);