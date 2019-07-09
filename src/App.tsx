import React from 'react';
import './App.css';
import SuggestionInput from './example/SuggestionInput';
import Apartment from './example/Apartment';

const App: React.FC = () => {
  return (
    <div className="App">
      <SuggestionInput/>
      <Apartment/>
    </div>
  );
}

export default App;
