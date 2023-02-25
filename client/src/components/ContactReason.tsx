import e from "express";
import React, { SetStateAction, useState } from "react"
import { MISDEMEANOURS,  ALLCONTACTREASONS } from "../types/misdemeanours.types"
import ErrorMessage from "./ErrorMessage";
import { validateContactReason } from "./utils/validateConfessionContactReason";
export interface ContactReasonProps {
    reason:string;
   onChangeHandler: (reason:string) => void; 
  }

const ContactReason:React.FC<ContactReasonProps> = (inputContactReasonProps) => {
    const [demeanourSelect, setDemeanourSelect] = useState<string>("");
    const [errorValidation, setErrorValidation] = useState("");

    const handleChange= (event: React.ChangeEvent<HTMLSelectElement>) =>
    {     setDemeanourSelect(event.target.value);
            
          const errorMessage = validateContactReason(event.target.value);
          (typeof errorMessage === "string") ? setErrorValidation(errorMessage):setErrorValidation("OK")
          inputContactReasonProps.onChangeHandler(event.target.value);
            
           
    }

    
return (
<> 
<div className="confessionInputs">
      
<label htmlFor="ContactReasonId">Reason for contact</label>



<select id="ContactReasonId" value={demeanourSelect} name="ContactReason" 
onChange={handleChange} >
{ typeof ALLCONTACTREASONS &&  ALLCONTACTREASONS.map((misdemvalue, index) => {
return  <option key={index} value = {misdemvalue}> {misdemvalue} </option> })}
  
</select>
</div>
{errorValidation !== "OK" && (
        <div>
          <ErrorMessage message={errorValidation} />
        </div>
      )}
     
</>
)
}
export default ContactReason;