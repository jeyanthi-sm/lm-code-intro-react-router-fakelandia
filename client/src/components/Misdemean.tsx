import { useState, useContext } from "react";
import { ALLMISDEMEANOURS } from "../types/misdemeanours.types";
import {  FakelandiaContext,  FakelandiaContextDataProvider,  MisdemeanourContext} from "./context";
export interface Misdemeanprops {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Misdemean: React.FC<Misdemeanprops> = (inputProps) => {
  const [demeanourSelect, setDemeanourSelect] = useState<string>("ALL");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDemeanourSelect(event.target.value);
  };
  return (
    <>
      <MisdemeanourContext.Provider value={demeanourSelect}>
        <>
          <select value={demeanourSelect} onChange={handleChange}>
            {typeof ALLMISDEMEANOURS &&
              ALLMISDEMEANOURS.map((misdemvalue, index) => {
                return (
                  <option key={misdemvalue} value={misdemvalue}>
                    {misdemvalue}
                  </option>
                );
              })}
          </select>
        </>
        <FakelandiaContextDataProvider />
      </MisdemeanourContext.Provider>
    </>
  );
};
export default Misdemean;
