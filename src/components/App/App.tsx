import React, { useState } from 'react';
import axios from 'axios';

import './App.css';
import BeerStyle from '../../classes/BeerStyle';
import BeerStyleList from '../BeerStyleList/BeerStyleList';
import CategoryForm from '../CategoryForm/CategoryForm';
import VitalStatisticsForm from '../VitalStatisticsForm/VitalStatisticsForm';

const DEFAULT_CONTEXT = {
    ibu: '',
    srm: '',
    og: '',
    fg: '',
    abv: '',
    categoryID: ''
};
const AppContext = React.createContext(DEFAULT_CONTEXT);

interface BeerStyleListProps {
    styleList?: Array<BeerStyle>;
};

const EMPTY_STYLE_LIST = Array<BeerStyle>();
const DEFAULT_STATE = {
    styleList: EMPTY_STYLE_LIST,
    ibu: '',
    srm: '',
    og: '',
    fg: '',
    abv: ''
};

const App: React.FC<BeerStyleListProps> = () => {
    const [state, setState] = useState(DEFAULT_STATE);

    const setStyleList = (newList: Array<BeerStyle>) => {
        setState({ ...state, styleList: newList });
    }

    const setVitalStatistics = (stats: VitalStatisticsForm['state']) => {
        const newState = {
            ...state,
            ibu: stats.ibu,
            srm: stats.srm,
            og: stats.og,
            fg: stats.fg,
            abv: stats.abv
        }
        setState(newState);
        console.log(state);
        searchBeerStyles();
    };

    // const searchBeerStyles = (stats: VitalStatisticsForm['state']) => {
    //     try {
    //         if (stats.ibu || stats.srm || stats.og || stats.fg || stats.abv) {
    //             axios.get('/api/search-style', { params: stats }).then(response => {
    //                 const styleList = BeerStyle.loadQuery(response.data);
    //                 setStyleList(styleList);
    //             });
    //         } else {
    //             setStyleList(EMPTY_STYLE_LIST);
    //         }
    //     } catch (error) {
    //         const errorMessage = `Unable to fetch beer styles from server. ${error}`;
    //         console.log(errorMessage);
    //         alert(errorMessage);
    //     }
    // };

    const searchBeerStyles = () => {
        try {
            if (state.ibu || state.srm || state.og || state.fg || state.abv) {
                axios.get('/api/search-style', { params: state }).then(response => {
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
            <VitalStatisticsForm setVitalStatistics={setVitalStatistics} />
            <CategoryForm />
            <BeerStyleList styleList={state.styleList} />
        </div>
    );
}

export default App;
 