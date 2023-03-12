import {  Misdemeanour } from '../types/misdemeanours.types';
import { createContext, useContext, useEffect, useState } from 'react';
import React from 'react';
import PunishmentImage from './PunishmentImage';

export const MisdemeanourContext = createContext<string>("AL");

export interface FakelandiaContextProps {
  misdemeanours: Misdemeanour[]
} 

export const FakelandiaContext:React.Context<FakelandiaContextProps> 
= createContext<FakelandiaContextProps>({misdemeanours:[]}); 


export  const FakelandiaContextDataProvider = () => {

  const [apiGetMisDemeanour, setapiGetMisDemeanour] = useState({misdemeanours:[]});


  const FETCHURL = 'http://localhost:8080/api/misdemeanours/10';

  const fetchApiDemeanour = async () => {
    try {
      if (typeof FETCHURL === "string") {

      const response = await fetch(FETCHURL);
      if (response.ok)
      {
      const json = await response.json();
       setapiGetMisDemeanour(json);
       return json;
      }
    

  }
} catch (error) {
      if (typeof error === "string") { return error;}
    }
  };
  useEffect(() => {fetchApiDemeanour()}, [] );

const misdemeanourCurrentValue = useContext(MisdemeanourContext);

let misdemeanourSelectedValues;
const misdemeanourSelectFilter = (inputDemeanourSelect:string) => {
  if (inputDemeanourSelect ==='ALL' )
    return apiGetMisDemeanour.misdemeanours;
  else
    return apiGetMisDemeanour.misdemeanours.filter((element) =>  element["misdemeanour"] === inputDemeanourSelect)
  
}
  misdemeanourSelectedValues = misdemeanourSelectFilter(misdemeanourCurrentValue);
return (
  
    <FakelandiaContext.Provider value={apiGetMisDemeanour}>
        <> 
      <table border={1}>            
           
            <tr><th>CitizenId</th>
             <th>Date</th> 
             <th>Misdemeanour</th>
             <th>Punishment Idea</th> </tr>
           
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
  
    </FakelandiaContext.Provider>
  )
}

export  const useFetch = (url:string) => {
  console.log(url);
  const [apiGetMisDemeanour, setapiGetMisDemeanour] = useState({misdemeanours:[]});

 
    const fetchApiDemeanour = async () => {
      try {
        console.log("usefetchHook");
      const response = await fetch(url);
      console.log(response);
      if (response.ok)
      {
      const json = await response.json();
      console.log(json);
      const data = json.data();
       setapiGetMisDemeanour(json);
      
      console.log(data);
      return apiGetMisDemeanour;
      }
    

  
} catch (error) {
      if (typeof error === "string") { return error;}
    }
  }
  useEffect(() => {fetchApiDemeanour()}, [] );

console.log("inside useFetch Custom Hook");
console.log(apiGetMisDemeanour);

return [apiGetMisDemeanour];
      
} 
export default useFetch;

const useFetch2 = (url:string) => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export { useFetch2};