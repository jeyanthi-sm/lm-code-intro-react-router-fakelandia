import { BrowserRouter } from 'react-router-dom';
import './App.css';

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
