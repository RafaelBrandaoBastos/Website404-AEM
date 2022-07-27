import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { Text } from './indexStyled.js';

const TextComponent = (props) => {
    return(
        <div>
            <Text>{props.text}</Text>
        </div>
    );
}
export default MapTo('reactapp/components/text-componente')(TextComponent);