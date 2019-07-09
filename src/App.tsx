import React from 'react';
import './App.css';
import SuggestionInput from './example/SuggestionInput';
import Apartment from './example/Apartment';
import ApartmentFixtures from './fixtures/ApartmentFixtures';

const App: React.FC = () => {
  return (
    <div className="App">
      <SuggestionInput/>
      <Apartment {...ApartmentFixtures}/>
    </div>
  );
}

export default App;
