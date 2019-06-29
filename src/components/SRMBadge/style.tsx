import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface SRMBadgeProps {
    color: string;
};

const SRMBadge: FunctionComponent<SRMBadgeProps> = styled.div`
    height: 1rem;
    width: 1rem;

    background-color: ${props => props.color};
    border-radius: 0.5rem;
    display: inline-block;
`;

export default SRMBadge;