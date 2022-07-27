import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { Error} from './indexStyled.js';

const ErrorComponent = (props) => {
    return(
        <div>
            <Error>{props.text}</Error>
        </div>
    );
}
export default MapTo('reactapp/components/error-componente')(ErrorComponent);