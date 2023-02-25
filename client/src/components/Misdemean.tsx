import { useState, useContext } from "react";
import { ALLMISDEMEANOURS, MISDEMEANOURS } from "../types/misdemeanours.types";
import { MisdemeanourContext } from "./context";
import Fetch from "./Fetch";
import MisdemeanourDefault from "./MisdemeanourDefault";
export interface Misdemeanprops {
  onChange:( e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FETCHURL = 'http://localhost:8080/api/misdemeanours/10';
const Misdemean:React.FC<Misdemeanprops> =(inputProps) => 
{
  const [demeanourSelect, setDemeanourSelect] = useState<number>(4);

    
  const handleChange= (event: React.ChangeEvent<HTMLSelectElement>) =>
  {  
        console.log(parseInt(event.target.value));
        console.log("Handlechange in Misdemean current");
        setDemeanourSelect(parseInt(event.target.value));
        
  } 
  return (
    
  <>
 <select value={demeanourSelect} onChange={handleChange}>
 { typeof ALLMISDEMEANOURS  &&  ALLMISDEMEANOURS.map((misdemvalue, index) => {
  return  <option key={index} value = {index}>  { misdemvalue }</option>
 })}
  </select>
  <Fetch url={FETCHURL} />
 
  <MisdemeanourContext.Provider value = {demeanourSelect} > 
 <div>The Selected Value is {demeanourSelect} </div>;
 <MisdemeanourDefault />
 </MisdemeanourContext.Provider>
 
 
  </>
)
}
export default Misdemean;
