import React, { useState } from 'react';
import axios from 'axios';

import './App.css';
import BeerStyle from '../../classes/BeerStyle';
import BeerStyleList from '../BeerStyleList/BeerStyleList';
import VitalStatisticsForm from '../VitalStatisticsForm/VitalStatisticsForm';

interface BeerStyleListProps {
    styleList?: Array<BeerStyle>;
};

const EMPTY_STYLE_LIST = Array<BeerStyle>();

const App: React.FC<BeerStyleListProps> = () => {
    const [styleList, setStyleList] = useState(EMPTY_STYLE_LIST);

    const searchBeerStyles = (vitalStats: VitalStatisticsForm['state']) => {
        try {
            if (vitalStats.ibu || vitalStats.srm || vitalStats.og || vitalStats.fg) {
                axios.get('/api/search-style', { params: vitalStats }).then(response => {
                    console.log(response.data);
                    const styleList = BeerStyle.loadQuery(response.data);
                    setStyleList(styleList);
                });
            } else {
                setStyleList(EMPTY_STYLE_LIST);
            }
        } catch (error) {
            const errorMessage = `Unable to fetch beer styles from server. ${error}`;
            console.log(errorMessage);
            alert(errorMessage);
        }
    };

    return (
        <div>
            <header>
                <h1>Beer Style Classifier</h1>
            </header>
            <VitalStatisticsForm searchBeerStyles={searchBeerStyles} />
            <BeerStyleList styleList={styleList} />
        </div>
    );
}

export default App;
 