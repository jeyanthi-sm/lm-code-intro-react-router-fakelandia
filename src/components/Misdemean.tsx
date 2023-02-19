
import { useState, useEffect, SetStateAction } from "react";
import Fetch from "./Fetch";
import MisdemeanourSelect from "./MisdemeanourSelect";
import { MISDEMEANOURS } from "../types/misdemeanours.types";
export interface Misdemeanprops {
  onChange:( e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Misdemean:React.FC<Misdemeanprops> =(inputProps) => 
//const Misdemean:React.FC =() => 
{
  const [demeanourSelect, setDemeanourSelect] = useState("");
  const handleChange= (event: { target: { value: SetStateAction<string>; }; }) =>
  {
        console.log(event.target.value);
        console.log("Handlechange in Misdemean");
        setDemeanourSelect(event.target.value);
  
  } 
  const FETCHURL = `http://localhost:8080/api/misdemeanours/10`;
  return (
  <>
 Misdemeanour!  Here i am 
 <select>
  { typeof MISDEMEANOURS &&  MISDEMEANOURS.map((misdemvalue, index) => {
  return  <option key={index} value = {demeanourSelect} onChange={() =>
    handleChange}> { misdemvalue }</option>
  
})}
</select>
 <div className="mainClass"> 
<Fetch url={FETCHURL} />
</div>
 </>
)
}
export default Misdemean;
