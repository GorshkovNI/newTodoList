import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { MainWindow } from './models/MainWindow/MainWindow';
import { store } from './store'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainWindow />
      </div>
    </Provider>
  );
}

export default App;
