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

   

    const handleChange= (event: React.ChangeEvent<HTMLSelectElement>) =>
    {  
          console.log(event.target.value);
          console.log("Handlechange in Misdemean");
          
    
    } 
    let fetchedMisdemeanour = useContext(FakelandiaContext);
    
    const misdemeanourLiftFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "lift"), [apiGetMisDemeanour.misdemeanours]);
    const misdemeanourRudenessFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "rudeness"), [apiGetMisDemeanour.misdemeanours]);
    const misdemeanourVegetablesFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "vegetables"), [apiGetMisDemeanour.misdemeanours]);
    const misdemeanourUnitedFilter = useMemo(() => apiGetMisDemeanour.misdemeanours.filter(element => element["misdemeanour"] === "united"), [apiGetMisDemeanour.misdemeanours]);
    


return (
    <FakelandiaContext.Provider value={apiGetMisDemeanour}>  
    <MisdemeanourDefault />
    </FakelandiaContext.Provider>

)}
export default Fetch;
