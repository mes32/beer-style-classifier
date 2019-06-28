import React, { useState } from 'react';
import axios from 'axios';

import './App.css';
import BeerStyle from '../../classes/BeerStyle';
import BeerStyleList from '../BeerStyleList/BeerStyleList';
import CategoryForm from '../CategoryForm/CategoryForm';
import VitalStatisticsForm from '../VitalStatisticsForm/VitalStatisticsForm';

interface BeerStyleListProps {
    styleList?: Array<BeerStyle>;
};

const EMPTY_STYLE_LIST = Array<BeerStyle>();
const EMPTY_VITAL_STATS = {
    ibu: '',
    srm: '',
    og: '',
    fg: '',
    abv: ''
};
const DEFAULT_CATEGORY = '';

const App: React.FC<BeerStyleListProps> = () => {
    const [styleList, setStyleList] = useState(EMPTY_STYLE_LIST);
    const [vitalStatistics, setVitalStatistics] = useState(EMPTY_VITAL_STATS);
    const [category, setCategory] = useState(DEFAULT_CATEGORY);

    const searchBeerStyles = (stats: VitalStatisticsForm['state']) => {
        setVitalStatistics(stats);
        const params = {
            ...stats,
            category
        };
        try {
            if (category || stats.ibu || stats.srm || stats.og || stats.fg || stats.abv) {
                axios.get('/api/search-style', { params }).then(response => {
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
            <CategoryForm setCategory={setCategory} />
            <BeerStyleList styleList={styleList} />
        </div>
    );
}

export default App;
 