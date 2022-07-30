import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { Img} from './indexStyled.js';

const ImageComponent = ({image}) => {
    return(
            <Img src={image && image.src} alt="ImageComponent"/>
        
    )
}
export default MapTo("reactapp/components/image-componente")(ImageComponent);