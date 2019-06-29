import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface ColorDotProps {
    color: string;
};

const ColorDot: FunctionComponent<ColorDotProps> = styled.div`
    height: 1rem;
    width: 1rem;

    background-color: ${props => props.color};
    border-radius: 0.5rem;
    display: inline-block;
`;

export default ColorDot;