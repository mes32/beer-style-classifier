import styled from 'styled-components';
import { theme } from '../../themes/Theme';

const HeaderStyle = styled.header`
    h1 {
        margin: 0;
        color: #82a1c0;
    }

    padding: 1rem ${theme.leftMargin};
    background-color: #2f3440;
`;

export default HeaderStyle;