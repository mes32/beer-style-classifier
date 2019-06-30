import styled from 'styled-components';

interface SRMBadgeProps {
    color: string;
};

const SRMBadge = styled.div<SRMBadgeProps>`
    height: 1rem;
    width: 1rem;

    background-color: ${props => props.color};
    border-radius: 0.5rem;
    display: inline-block;
`;

export default SRMBadge;