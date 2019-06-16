import React from 'react';
import './App.css';

import BeerStyleList from '../BeerStyleList/BeerStyleList';
import VitalStatisticsForm from '../VitalStatisticsForm/VitalStatisticsForm';

const App: React.FC = () => {

  const searchBeerStyles = (state: VitalStatisticsForm['state']) => {
      console.log(state);
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
 