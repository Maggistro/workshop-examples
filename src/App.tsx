import React from 'react';
import Apartment from './example/Apartment';
import ApartmentFixtures from './fixtures/ApartmentFixtures';
import SearchInput from './example/SearchInput';

const App: React.FC = () => {
  return (
    <div className="App">
      <SearchInput/>
      <Apartment {...ApartmentFixtures}/>
    </div>
  );
}

export default App;
