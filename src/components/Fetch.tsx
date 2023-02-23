//import React, { createContext } from "react";
import { useState, createContext, useEffect, useMemo, useContext } from "react";
import MisdemeanourDefault from "./MisdemeanourDefault";
//import { useState, useEffect } from "react";
import PunishmentImage from "./PunishmentImage";
import { FakelandiaContext, MisdemeanourContext } from './context';
import Misdemean from "./Misdemean";

export interface FetchProps {
  url?:string;
  misdemeanourSelect?:string;
}
const FETCHURL = 'http://localhost:8080/api/misdemeanours/10';

const Fetch:React.FC<FetchProps> = (inputFetchProps:FetchProps) => {
    
    const {url, misdemeanourSelect} = inputFetchProps;
    
    const passedvalue = useContext(MisdemeanourContext);
    console.log(passedvalue);
    
    const [apiGetMisDemeanour, setapiGetMisDemeanour] = useState({misdemeanours:[]});
       
    
    const [apiError, setapiError] = useState<string>();
    
    useEffect(() => {const fetchApiDemeanour = async () => {
      try {
        if (typeof url === "string") {

        const response = await fetch(url);
        const json = await response.json();
        
        setapiGetMisDemeanour(json);
        }} catch (error) {
        if (typeof error === "string") setapiError(error);
      }
      
    };
    fetchApiDemeanour()}, [url] );

    /*const handleChange= (event: React.ChangeEvent<HTMLSelectElement>) =>
    {  
          console.log(event.target.value);
          console.log("Handlechange in Misdemean");
          
    
    } */
    //const FakelandiaContext = createContext(); 
    //const fetchedMisdemeanour = useContext(FakelandiaContext);
    const misdemeanourLiftFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "lift"), [apiGetMisDemeanour.misdemeanours]);
    const misdemeanourRudenessFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "rudeness"), [apiGetMisDemeanour.misdemeanours]);
    const misdemeanourVegetablesFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "vegetables"), [apiGetMisDemeanour.misdemeanours]);
    const misdemeanourUnitedFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "united"), [apiGetMisDemeanour.misdemeanours]);
    
//const FakelandiaContext = createContext({apiGetMisDemeanour, setapiGetMisDemeanour}); 
//<FakelandiaContext.Provider value={{apiGetMisDemeanour,setapiGetMisDemeanour}}> 
//<FakelandiaContext.Provider value={apiGetMisDemeanour}> 


return ( 
  <>
  
{misdemeanourSelect === "ALL" ? (

<table border={1}> 
<tr> 
<thead> CitizenId </thead>
<thead> Date </thead>
<thead> Misdemeanour </thead>
<thead> Punishment Idea </thead>
</tr>
<tbody>
    
    { apiGetMisDemeanour && 
apiGetMisDemeanour.misdemeanours.map((misdemeanour, index) => {
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
):
misdemeanourSelect === "lift" ? (
<table border={1}> 
<tr> 
<thead> CitizenId </thead>
<thead> Date </thead>
<thead> Misdemeanour </thead>
<thead> Punishment Idea </thead>
</tr>
<tbody>
    
    {misdemeanourLiftFilter && 
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
):
misdemeanourSelect === "rudeness" ? (
<table border={1}> 
<tr> 
<thead> CitizenId </thead>
<thead> Date </thead>
<thead> Misdemeanour </thead>
<thead> Punishment Idea </thead>
</tr>
<tbody>
    
    {misdemeanourRudenessFilter && 
misdemeanourRudenessFilter.map((misdemeanour, index) => {
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
):
misdemeanourSelect === "vegetables" ? ( 
<table border={1}> 
<tr> 
<thead> CitizenId </thead>
<thead> Date </thead>
<thead> Misdemeanour </thead>
<thead> Punishment Idea </thead>
</tr>
<tbody>
    
    {misdemeanourVegetablesFilter &&
misdemeanourVegetablesFilter.map((misdemeanour, index) => {
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

)
:(
<table border={1}> 
<tr> 
<thead> CitizenId </thead>
<thead> Date </thead>
<thead> Misdemeanour </thead>
<thead> Punishment Idea </thead>
</tr>
<tbody>
    
    {misdemeanourUnitedFilter &&
misdemeanourUnitedFilter.map((misdemeanour, index) => {
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
)}
</>
)}
export default Fetch;
