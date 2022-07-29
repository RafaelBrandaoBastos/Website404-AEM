import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { Button } from './indexStyled.js';

const ButtonComponent = (props) => {
    return(
        <div>
            <Button>{props.text}</Button>
        </div>
    );
}
export default MapTo('reactapp/components/button-componente')(ButtonComponent);