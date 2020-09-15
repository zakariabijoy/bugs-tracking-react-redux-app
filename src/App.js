import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bugs from './components/bugs';
import configureStore from './store/configureStore';
import StoreContext from './contexts/storeContext';

const store = configureStore();

function App() {
  return (
    <StoreContext.Provider value={store}>
      <Bugs />
    </StoreContext.Provider>

  );
}

export default App;
