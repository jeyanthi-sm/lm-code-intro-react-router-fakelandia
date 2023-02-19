import React, { createContext } from "react";
import { useState, useEffect,  useMemo } from "react";
import PunishmentImage from "./PunishmentImage";
export interface FetchProps {
  url:string;
}
const Fetch:React.FC<FetchProps> = (inputFetchProps:FetchProps) => {
    const [apiGetMisDemeanour, setapiGetMisDemeanour] = useState({misdemeanours:[]});
       

    const [apiError, setapiError] = useState<string>();
    useEffect(() => {const fetchApiDemeanour = async () => {
      try {
        const response = await fetch(inputFetchProps.url);
        const json = await response.json();
        console.log(json.misdemeanours);
        setapiGetMisDemeanour(json);
        } catch (error) {
        if (typeof error === "string") setapiError(error);
      }
      
    };
    fetchApiDemeanour()}, [inputFetchProps.url] );
  const fakelandiaContext = createContext({apiGetMisDemeanour, setapiGetMisDemeanour}); 
  
  const misdemeanourLiftFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "lift"), [apiGetMisDemeanour.misdemeanours]);
  const misdemeanourRudenessFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "rudeness"), [apiGetMisDemeanour.misdemeanours]);
  const misdemeanourVegetablesFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "vegetables"), [apiGetMisDemeanour.misdemeanours]);
  const misdemeanourUnitedFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "united"), [apiGetMisDemeanour.misdemeanours]);
  
  console.log(misdemeanourLiftFilter);
return (
    <fakelandiaContext.Provider value={{apiGetMisDemeanour,setapiGetMisDemeanour}}> 
<>
<table border={1}> 
<tr> 
<th> CitizenId </th>
<th> Date </th>
<th> Misdemeanour </th>
<th> Punishment Idea </th>
</tr>
<tbody>
    
    {
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

<ul> 
 { apiGetMisDemeanour.misdemeanours.map((misdemeanour) => {
    
    return <li key={misdemeanour["citizenId"]}> <p> {misdemeanour["citizenId"]} {misdemeanour["misdemeanour"]} {misdemeanour["date"]}  </p> </li>;
   })}   

 </ul>

<ul> 
 { misdemeanourLiftFilter.map((misdemeanour) => {
    
    return <li key={misdemeanour["citizenId"]}> <p> {misdemeanour["citizenId"]} {misdemeanour["misdemeanour"]} {misdemeanour["date"]}  </p> </li>;
   })}   

 </ul>
 
 <ul> 
 { misdemeanourRudenessFilter.map((misdemeanour) => {
    
    return <li key={misdemeanour["citizenId"]}> <p> {misdemeanour["citizenId"]} {misdemeanour["misdemeanour"]} {misdemeanour["date"]}  </p> </li>;
   })}   

 </ul>

 <ul> 
 { misdemeanourVegetablesFilter.map((misdemeanour) => {
    
    return <li key={misdemeanour["citizenId"]}> <p> {misdemeanour["citizenId"]} {misdemeanour["misdemeanour"]} {misdemeanour["date"]}  </p> </li>;
   })}   

 </ul>
 <ul> 
 { misdemeanourUnitedFilter.map((misdemeanour) => {
    
    return <li key={misdemeanour["citizenId"]}> <p> {misdemeanour["citizenId"]} {misdemeanour["misdemeanour"]} {misdemeanour["date"]}  </p> </li>;
   })}   

 </ul>

</fakelandiaContext.Provider>

)}
export default Fetch;