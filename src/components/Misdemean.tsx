import { useState, useContext } from "react";
import { MISDEMEANOURS } from "../types/misdemeanours.types";
import Fetch from "./Fetch";
export interface Misdemeanprops {
  onChange:( e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const FETCHURL = 'http://localhost:8080/api/misdemeanours/10';
const Misdemean:React.FC<Misdemeanprops> =(inputProps) => 
{
  const [demeanourSelect, setDemeanourSelect] = useState("lift");

    
  const handleChange= (event: React.ChangeEvent<HTMLSelectElement>) =>
  {  
        console.log(event.target.value);
        console.log("Handlechange in Misdemean current");
        setDemeanourSelect(event.target.value);
        
  } 
  return (
    
  <>
 
 <select value={demeanourSelect} onChange={handleChange}>
 { typeof MISDEMEANOURS &&  MISDEMEANOURS.map((misdemvalue, index) => {
  return  <option key={index} value = {misdemvalue}>  { misdemvalue }</option>
 })}
  </select>
  <Fetch url={FETCHURL} />
  </>
)
}
export default Misdemean;
