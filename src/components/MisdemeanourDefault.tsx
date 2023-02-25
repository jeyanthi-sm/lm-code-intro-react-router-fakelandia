import React, { createContext } from "react";
import { useState, useEffect,  useMemo } from "react";
import PunishmentImage from "./PunishmentImage";
import { useContext } from "react";
import { FakelandiaContext, MisdemeanourContext } from "./context";
import { MisdemeanourKind } from '../types/misdemeanours.types';
  const MisdemeanourDefault:React.FC = () => {
  const misdemeanourFilter = useContext(FakelandiaContext);
  const misdemeanourSelectValue = useContext(MisdemeanourContext);
  
  console.log(misdemeanourSelectValue);
  const misdemeanourSelectFilter = misdemeanourSelectValue === 4 ? misdemeanourFilter.misdemeanours :
  misdemeanourFilter.misdemeanours.filter((elem) => typeof elem.misdemeanour === 'number' && elem.misdemeanour === misdemeanourSelectValue);
  /*switch (misdemeanourSelectValue){
    case 0: console.log("rudeness");
            misdemeanourSelectFilter = misdemeanourFilter.misdemeanours.filter((element) =>  typeof element.misdemeanour === 'string' && element.misdemeanour === "lift");
            console.log(misdemeanourSelectFilter);
            break;
    case 1: console.log("vegetables");
    misdemeanourSelectFilter = misdemeanourFilter.misdemeanours.filter((element) => element.misdemeanour === "vegetables");
    console.log(misdemeanourSelectFilter);        
    break;

    case 2: console.log("lift");
       misdemeanourSelectFilter = misdemeanourFilter.misdemeanours.filter((element) => element.misdemeanour === "lift");
       console.log(misdemeanourSelectFilter);     
       break;        
    case 3: 
    console.log("united");
    misdemeanourSelectFilter = misdemeanourFilter.misdemeanours.filter((element) => element.misdemeanour === "united");
    console.log(misdemeanourSelectFilter);        
    break;
    default: console.log("ALL");
    misdemeanourSelectFilter = misdemeanourFilter.misdemeanours;
    console.log(misdemeanourSelectFilter);         
    break;
  }
  */
 /* const misdemeanourLiftFilter =  misdemeanourFilter.misdemeanours.filter((element) => element['misdemeanour'] === "lift");
  const misdemeanourRudenessFilter =  misdemeanourFilter.misdemeanours.filter(element => element["misdemeanour"] === "rudeness");
  const misdemeanourVegetablesFilter =  misdemeanourFilter.misdemeanours.filter(element => element["misdemeanour"] === "vegetables");
  const misdemeanourUnitedFilter =  misdemeanourFilter.misdemeanours.filter(element => element["misdemeanour"] === "united") ;
  const misdemeanourAllFilter = misdemeanourFilter.misdemeanours;
*/
  return (
   <>  
  <table border={1}> 
<tr> 
<thead> CitizenId </thead>
<thead> Date </thead>
<thead> Misdemeanour </thead>
<thead> Punishment Idea </thead>
</tr>
<tbody> : <div> </div>

    { misdemeanourSelectFilter  && 
misdemeanourSelectFilter.map((misdemeanour, index) => {
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