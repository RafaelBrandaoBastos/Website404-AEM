import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components"
import { Button, Title, Text, Container} from './indexStyled.js';

const Multifield = ({textcontent}) => {
    return(
        <>
            {textcontent.map(({title, text, label, color = {} }, index) => (
                <div key={index}>
                    <Title style={{color: color}}>{title}</Title>
                    <Container><Text>{text}</Text></Container>
                    <Button>{label}</Button>
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
        },
    ],
};

export default MapTo("reactapp/components/multifield-component")(Multifield);