import React, { FunctionComponent } from 'react';
import PageWrapperStyle from './style';

const PageWrapper: FunctionComponent = (props) => {
    return (
        <PageWrapperStyle>
            {props.children}
        </PageWrapperStyle>
    );
}

export default PageWrapper