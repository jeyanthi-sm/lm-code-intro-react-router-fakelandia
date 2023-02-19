import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import Confession from './Confession';
import Misdemeanour from './Misdemean'
import MainLayout from './MainLayout';
import NotFound from './NotFound';
import { useState,SetStateAction } from 'react';
export const FakelandiaRouter : React.FC = () => {
  const [demeanourSelect, setDemeanourSelect] = useState("");
  const handleChange= (event: { target: { value: SetStateAction<string>; }; }) =>
  {
        console.log(event.target.value);
        setDemeanourSelect(event.target.value);
  
  }
   
   return <> 
   <Routes>
      <Route path="/" element={<MainLayout />} > 
      <Route index element={<Home/>} />
      <Route path='Confession' element={<Confession />} />
      <Route path='Misdemeanour' element={<Misdemeanour onChange={handleChange}/>} />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
}