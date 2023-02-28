import { useState, useEffect } from "react";
import { ALLMISDEMEANOURS } from "../types/misdemeanours.types";
import PunishmentImage from "./PunishmentImage";
export interface NewMisdemeanprops {
  onChange:( e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FETCHURL = 'http://localhost:8080/api/misdemeanours/10';
const NewMisdemean:React.FC<NewMisdemeanprops> =(inputProps) => 
{
  const [demeanourSelect, setDemeanourSelect] = useState<string>("ALL");
  
  const [apiGetMisDemeanour, setapiGetMisDemeanour] = useState({misdemeanours:[]});
       
  const handleChange= (event: React.ChangeEvent<HTMLSelectElement>) =>
  {  
        setDemeanourSelect(event.target.value);
  
              
  } 
    const [apiError, setapiError] = useState<string>();
    
    
    const fetchApiDemeanour = async () => {
      try {
        
        const response = await fetch(FETCHURL);
        if (response.ok)
        {
        const json = await response.json();
         setapiGetMisDemeanour(json);
        }    
  } catch (error) {
        if (typeof error === "string") setapiError(error);
      }
      
    };
    useEffect(() => {fetchApiDemeanour()}, [] );

   

  const misdemeanourSelectFilter = (inputDemeanourSelect:string) => {
    if (inputDemeanourSelect === 'ALL')
     return apiGetMisDemeanour.misdemeanours;
    else
      return apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === inputDemeanourSelect)
    


  }
  const buildSelectMisdemeanours = () => {
    let cols:Array<JSX.Element>  = [];
    const misdemeanourSelectedValues = misdemeanourSelectFilter(demeanourSelect);
    cols.push(
      <> 
      <table border={1}> 

              <tr> 
              <thead> CitizenId</thead>
              <thead> Date </thead>
              <thead> Misdemeanour </thead>
              <thead> Punishment Idea </thead>
              </tr>
              
     
          {misdemeanourSelectedValues &&
            misdemeanourSelectedValues.map((misdemean, index) => {
              return <> 
              <tr><td> {misdemean["citizenId"]}</td>
              <td>{misdemean["date"]}</td>
              <td>{misdemean["misdemeanour"]}</td>
              <td><PunishmentImage width={100} height={100}/></td></tr>
              </>
       
              
            })}
</table>
              </>
    )
      return cols;
 
  }


  return (
    
  <>
 <select value={demeanourSelect} onChange={handleChange}>
 { typeof ALLMISDEMEANOURS  &&  ALLMISDEMEANOURS.map((misdemvalue, index) => {
  return  <option key={misdemvalue} value = {misdemvalue}>  { misdemvalue }</option>
 })}
  </select>
  {buildSelectMisdemeanours()}  
</>
)
}
export default NewMisdemean;
