import React from 'react';
import Apartment from './example/Apartment';
import ApartmentFixtures from './fixtures/ApartmentFixtures';
import SearchInput from './example/SearchInput';
import ThemeContext from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeContext.Provider value="dark">
        <SearchInput/>
        <Apartment {...ApartmentFixtures}/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
