import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { FakelandiaRouter } from './components/FakelandiaRouter';

function App() {

  return (
    <> 
    <div className="App">
    <BrowserRouter> 
      <FakelandiaRouter />
    </BrowserRouter>
    </div>
    </>
  );
}
export default App;
