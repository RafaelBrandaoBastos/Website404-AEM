import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { Text, Container } from './indexStyled.js';

const TextComponent = (props) => {
    return(
        <Container>
            <Text>{props.text}</Text>
        </Container>
    );
}
export default MapTo('reactapp/components/text-componente')(TextComponent);