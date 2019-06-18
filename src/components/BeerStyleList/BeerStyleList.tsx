import React from 'react';

import BeerStyle from '../../classes/BeerStyle';

interface BeerStyleListProps {
    styleList: Array<BeerStyle>;
};

const BeerStyleList: React.FC<BeerStyleListProps> = (props) => {
    return (
        <div>
            <h3>Predicted Beer Styles</h3>
            <ul>
                {props.styleList.map(style => 
                    <li key={style.id}>{style.name}</li>    
                )}
            </ul>
        </div>
    );
}

export default BeerStyleList;
