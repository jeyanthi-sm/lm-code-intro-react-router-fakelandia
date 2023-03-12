import { HashRouter } from 'react-router-dom';
import './App.css';

import { FakelandiaRouter } from './components/FakelandiaRouter';

function App() {
  return (
    <> 
    <div className="App">
    <HashRouter> 
      <FakelandiaRouter />
    </HashRouter>
    </div>
    </>
    );
}

export default App;
