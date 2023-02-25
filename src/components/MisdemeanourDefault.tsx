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