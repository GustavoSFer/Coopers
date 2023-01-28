import { useState } from 'react';
import MyContext from './MyContext/MyContext';
import Routers from './Routes';
import './App.css';

function App() {
  const [active, setActive] = useState(false);
  const contextValue = {
    active, setActive,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <Routers />
    </MyContext.Provider>
  );
}

export default App;
