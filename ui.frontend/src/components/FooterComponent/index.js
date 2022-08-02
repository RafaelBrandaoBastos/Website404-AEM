import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { Footer, Container } from './indexStyled.js';

const FooterComponent = (props) => {
    return(
        <Container>
            <Footer>{props.text}</Footer>
        </Container>
    );
}
export default MapTo('reactapp/components/footer-componente')(FooterComponent);