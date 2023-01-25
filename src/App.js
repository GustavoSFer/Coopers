import MyContext from './MyContext/MyContext';
import './App.css';

function App() {
  const contextValue = {};

  return (
    <MyContext.Provider value={contextValue}>
      <Routers />
    </MyContext.Provider>
  );
}

export default App;
