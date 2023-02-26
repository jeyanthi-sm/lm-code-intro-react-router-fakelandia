import React  from "react";
import { useState } from "react";
import { ContactReasonProps } from "./ContactReason";
import ErrorMessage from "./ErrorMessage";
import { validateContactReasonDetails } from "./utils/validateConfessionContactReasonDetails";
export interface ContactReasonDetailsProps {
    reasonDetails:string;
    onChangeHandler: (value:string) => void;
}

const ContactReasonDetails:React.FC<ContactReasonDetailsProps> = (inputProps) => {

    const [contactReasonDetails, setContactReasonDetails] = useState();
    const [errorValidation, setErrorValidation] = useState("");
   
    return (
    <>
    <div className="confessionInputs">
      <div className="confessionLabels"> 
      <label htmlFor="ContactReasonDetailsId"> </label>
      </div>
      <div className="confessionInput"> 
       <textarea
         id="ContactReasonDetailsId"
         placeholder="ContactReasonDetails"
         value={contactReasonDetails}
         onChange={(e) => {
           const errorMessage = validateContactReasonDetails(e.target.value);
           if (typeof errorMessage === "string") setErrorValidation(errorMessage);
           inputProps.onChangeHandler(e.target.value);
         }}
       />
       </div>
      </div>
      {errorValidation !== "OK" && (
        <div>
          <ErrorMessage message={errorValidation} />
        </div>
      )}
     
</>
    
    )  
 }
 export default ContactReasonDetails;