import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { Error} from './indexStyled.js';

const ErrorComponent = (props) => {
    return(
            <Error>{props.text}</Error>
    );
}
export default MapTo('reactapp/components/error-componente')(ErrorComponent);