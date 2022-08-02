import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { Button } from './indexStyled.js';

const ButtonComponent = (props) => {
    return(
            <Button>{props.text}</Button>
    );
}
export default MapTo('reactapp/components/button-componente')(ButtonComponent);