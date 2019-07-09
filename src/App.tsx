import React from 'react';
import './App.css';
import InputBox from './example/InputBox';
import Apartment from './example/Apartment';
import ApartmentFixtures from './fixtures/ApartmentFixtures';
import SuggestionInput from './example/SuggestionInput';

const App: React.FC = () => {
  return (
    <div className="App">
      <InputBox title="test">
        <SuggestionInput/>
      </InputBox>
      <Apartment {...ApartmentFixtures}/>
    </div>
  );
}

export default App;
