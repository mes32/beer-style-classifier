import React from 'react';
import axios from 'axios';

import './App.css';
import BeerStyleList from '../BeerStyleList/BeerStyleList';
import VitalStatisticsForm from '../VitalStatisticsForm/VitalStatisticsForm';

const App: React.FC = () => {

    const searchBeerStyles = (state: VitalStatisticsForm['state']) => {
        console.log(state);
        try {
            axios.get('/api/search-style').then(response => {
                console.log(response);
            });
            
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
            <BeerStyleList />
        </div>
    );
}

export default App;
 