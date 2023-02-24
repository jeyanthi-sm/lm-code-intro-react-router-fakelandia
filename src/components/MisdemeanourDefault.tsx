import React, { createContext } from "react";
import { useState, useEffect,  useMemo } from "react";
import PunishmentImage from "./PunishmentImage";
import { useContext } from "react";
import { FakelandiaContext } from "./context";
/*import Fetch from "./Fetch";
export interface MisdemeanourDefaultProps {
  url:string;
} 
const MisdemeanourDefault:React.FC = () => {
  
  const passedvalue = useContext(FakelandiaContext);
  console.log(passedvalue);
  /*  const fetchedMisdemeanour = useContext(FakelandiaContext);
    const misdemeanourLiftFilter = useMemo(() => fetchedMisdemeanour.misdemeanours.filter(element => element["misdemeanour"] === "lift"), [apiGetMisDemeanour.misdemeanours]);
    const misdemeanourRudenessFilter = useMemo(() =>fetchedMisdemeanour.misdemeanours.filter(element => element["misdemeanour"] === "rudeness"), [apiGetMisDemeanour.misdemeanours]);
    const misdemeanourVegetablesFilter = useMemo(() => fetchedMisdemeanour.misdemeanours.filter(element => element["misdemeanour"] === "vegetables"), [apiGetMisDemeanour.misdemeanours]);
    const misdemeanourUnitedFilter = useMemo(() => fetchedMisdemeanour.misdemeanours.filter(element => element["misdemeanour"] === "united"), [apiGetMisDemeanour.misdemeanours]);
  
    /* const [apiGetMisDemeanour, setapiGetMisDemeanour] = useState({misdemeanours:[]});
    const [apiError, setapiError] = useState<string>();
    
  const FakelandiaContext = createContext({apiGetMisDemeanour, setapiGetMisDemeanour}); 
  
  const fetchedMisdemeanour = useContext(FakelandiaContext);
  const misdemeanourLiftFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "lift"), [apiGetMisDemeanour.misdemeanours]);
  const misdemeanourRudenessFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "rudeness"), [apiGetMisDemeanour.misdemeanours]);
  const misdemeanourVegetablesFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "vegetables"), [apiGetMisDemeanour.misdemeanours]);
  const misdemeanourUnitedFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "united"), [apiGetMisDemeanour.misdemeanours]);
    <FakelandiaContext.Consumer value={{apiGetMisDemeanour,setapiGetMisDemeanour}}> 
<>

  
return (
  <> 
    <FakelandiaContext.Consumer>
      
    </FakelandiaContext.Consumer>   
    </>
  );
  
} */


function MisdemeanourDefault() {
  const misdemeanourFilter = useContext(FakelandiaContext);
  const misdemeanourLiftFilter =  misdemeanourFilter.misdemeanours.filter(element => element["misdemeanour"] === "lift");
  const misdemeanourRudenessFilter =  misdemeanourFilter.misdemeanours.filter(element => element["misdemeanour"] === "rudeness");
  const misdemeanourVegetablesFilter =  misdemeanourFilter.misdemeanours.filter(element => element["misdemeanour"] === "vegetables");
  const misdemeanourUnitedFilter =  misdemeanourFilter.misdemeanours.filter(element => element["misdemeanour"] === "united") ;
  
  
  return (
   <>  
   <table border={1}> 
<tr> 
<thead> CitizenId </thead>
<thead> Date </thead>
<thead> Misdemeanour </thead>
<thead> Punishment Idea </thead>
</tr>
<tbody>

    { misdemeanourLiftFilter  && 
misdemeanourLiftFilter.map((misdemeanour, index) => {
   return <> 
   <tr><td>{misdemeanour["citizenId"]}</td>
       <td>{misdemeanour["date"]}</td>
       <td>{misdemeanour["misdemeanour"]}</td>
       <td><PunishmentImage width={100} height={100}/></td></tr>
    </>
    })
   }  
</tbody>
</table>
</>


      
   
    
  );
}
export default MisdemeanourDefault;