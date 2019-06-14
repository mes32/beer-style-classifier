import React from 'react';
import './App.css';

import BeerStyleList from '../BeerStyleList/BeerStyleList';
import VitalStatisticsForm from '../VitalStatisticsForm/VitalStatisticsForm';

const App: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Beer Style Classifier</h1>
      </header>
      <VitalStatisticsForm />
      <BeerStyleList />
    </div>
  );
}

export default App;
 