import React, { useState } from "react"
import { MISDEMEANOURS, JUST_TALK } from "../types/misdemeanours.types"
export interface ContactReasonProps {
    reason:string;
    onChangeHandler: (reason:string) => void; 
}

const ALLMISDEMEANOURS  = [...MISDEMEANOURS, JUST_TALK];

const ContactReason:React.FC<ContactReasonProps> = (inputContactReasonProps) => {
    const [demeanourSelect, setDemeanourSelect] = useState();
    const [errorValidation, setErrorValidation] = useState("");
    const contactReasonValidation :(value:string) => string = (value ) => {
    
        if (value === typeof ALLMISDEMEANOURS) return "OK";
        else return "ERROR! Not a Valid Value";
    };
    
return (
<> 
<label htmlFor="SubjectLineId">Subject </label>
<select>
{ typeof ALLMISDEMEANOURS &&  ALLMISDEMEANOURS.map((misdemvalue, index) => {
return  <option key={index} value = {demeanourSelect} onChange={(e) =>{
    const errorMessage = contactReasonValidation(misdemvalue);
    setErrorValidation(errorMessage);
    inputContactReasonProps.onChangeHandler(misdemvalue);
  }
 
    
    
  
}> { misdemvalue }</option>

})}
</select>
{errorValidation}
<div> {errorValidation}</div>

</>
)
}
export default ContactReason;