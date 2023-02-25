//import React, { createContext } from "react";
import { useState, useContext, useEffect, useMemo } from "react";
import PunishmentImage from "./PunishmentImage";
import { FakelandiaContext } from './context';
import Misdemean from "./Misdemean";
import MisdemeanourDefault from "./MisdemeanourDefault";

export interface FetchProps {
  url?:string;
 }
//const FETCHURL = 'http://localhost:8080/api/misdemeanours/10';

const Fetch:React.FC<FetchProps> = (inputFetchProps:FetchProps) => {
    
    const {url} = inputFetchProps;
    
    const contextGetMisdemeanour = useContext(FakelandiaContext);

    
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

    //const contextGetMisdemeanour = useContext(FakelandiaContext);
   

    const handleChange= (event: React.ChangeEvent<HTMLSelectElement>) =>
    {  
          console.log(event.target.value);
          console.log("Handlechange in Misdemean");
          
    
    } 
    //const FakelandiaContext = createContext(); 
    let fetchedMisdemeanour = useContext(FakelandiaContext);
    
    const misdemeanourLiftFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "lift"), [apiGetMisDemeanour.misdemeanours]);
    const misdemeanourRudenessFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "rudeness"), [apiGetMisDemeanour.misdemeanours]);
    const misdemeanourVegetablesFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "vegetables"), [apiGetMisDemeanour.misdemeanours]);
    const misdemeanourUnitedFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "united"), [apiGetMisDemeanour.misdemeanours]);
    


return (
    <FakelandiaContext.Provider value={apiGetMisDemeanour}>  
  <>
  

<table border={1}> 
<tr> 
<thead> CitizenId </thead>
<thead> Date </thead>
<thead> Misdemeanour </thead>
<thead> Punishment Idea </thead>
</tr>
<tbody>

    { apiGetMisDemeanour  && 
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
</>

<MisdemeanourDefault />
</FakelandiaContext.Provider>

)}
export default Fetch;
