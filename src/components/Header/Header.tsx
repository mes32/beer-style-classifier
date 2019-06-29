import React, { FunctionComponent } from 'react';

import HeaderStyle from './style';

const AppHeader: FunctionComponent = () => {
    return (
        <HeaderStyle>
            <h1>Beer Style Classifier</h1>
        </HeaderStyle>
    );
}

export default AppHeader;