import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import Confession from './Confession';
import Misdemeanour from './Misdemeanour'
import MainLayout from './MainLayout';
import NotFound from './NotFound';

export const FakelandiaRouter : React.FC = () => <> 
   
   <Routes>
      <Route path="/" element={<MainLayout />} > 
      <Route index element={<Home/>} />
      <Route path='Confession' element={<Confession />} />
      <Route path='Misdemeanour' element={<Misdemeanour />} />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    
    </>;