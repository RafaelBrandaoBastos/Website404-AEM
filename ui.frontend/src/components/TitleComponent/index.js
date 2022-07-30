import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { Title } from './indexStyled.js';

const TitleComponent = (props) => {
    return(
        
            <Title>{props.text}</Title>
        
    );
}
export default MapTo('reactapp/components/title-componente')(TitleComponent);