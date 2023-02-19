
import { useState, useEffect, SetStateAction } from "react";
import Fetch from "./Fetch";
import MisdemeanourSelect from "./MisdemeanourSelect";
import { MISDEMEANOURS } from "../types/misdemeanours.types";
/*export interface Misdemeanprops {
  onChangeEvent:(value:string) => {};
}
const Misdemean:React.FC<Misdemeanprops> =(inputProps) => */
const Misdemean:React.FC =() => 
{
  const [demeanourSelect, setDemeanourSelect] = useState("");
  /*function changeFunction(e: React.FormEventHandler<HTMLOptionElement>)
  {
        console.log(e.toString);
        setDemeanourSelect(e.toString);
    return({demeanourSelect});
  } */
  const FETCHURL = `http://localhost:8080/api/misdemeanours/10`;
  return (
  <>
 Misdemeanour!  Here i am 
 <select>
  { typeof MISDEMEANOURS &&  MISDEMEANOURS.map((misdemvalue, index) => {
  return  <option key={index} value = {demeanourSelect} > { misdemvalue }</option>

})}
</select>
 <div className="mainClass"> 
<Fetch url={FETCHURL} />
</div>
 </>
)
}
export default Misdemean;
