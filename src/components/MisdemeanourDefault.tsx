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
  return (
    
      <FakelandiaContext.Consumer>
      {value => <span>{value.misdemeanours[0].citizenId}</span>}

  
   </FakelandiaContext.Consumer>

    
  );
}
export default MisdemeanourDefault;