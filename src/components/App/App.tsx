import React, { useState } from 'react';
import axios from 'axios';

import BeerStyle from '../../classes/BeerStyle';
import BeerStyleList from '../BeerStyleList/BeerStyleList';
import CategoryForm from '../CategoryForm/CategoryForm';
import Header from '../Header';
import PageWrapper from '../PageWrapper';
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

    const searchFromStatistics = (stats: VitalStatisticsForm['state']) => {
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

    const searchFromCategory = (category: string) => {
        setCategory(category);
        const params = {
            ...vitalStatistics,
            category
        };
        try {
            if (category || vitalStatistics.ibu || vitalStatistics.srm || vitalStatistics.og || vitalStatistics.fg || vitalStatistics.abv) {
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
            <Header />
            <PageWrapper>
                <VitalStatisticsForm search={searchFromStatistics} />
                <CategoryForm search={searchFromCategory} />
                <BeerStyleList styleList={styleList} />
            </PageWrapper>
        </div>
    );
}

export default App;
 