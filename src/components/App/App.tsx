import React from 'react';
import './App.css';

import VitalStatisticsForm from '../VitalStatisticsForm/VitalStatisticsForm';

const App: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Beer Style Classifier</h1>
      </header>
      <VitalStatisticsForm />
    </div>
  );
}

export default App;
 