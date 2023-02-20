import React  from "react";
import { useState } from "react";
import { ContactReasonProps } from "./ContactReason";
export interface contactReasonDetailsProps {
    reasonDetails:string;
    onChangeHandler: (value:string) => void;
}

const ContactReasonDetails:React.FC<ContactReasonProps> = (inputProps) => {

    const [contactReasonDetails, setContactReasonDetails] = useState();
    const [errorValidation, setErrorValidation] = useState("");
   const validateContactReasonDetails = (input:string) => {
    const contactReasonDetailsRegexp = RegExp(/^(.|\n){17,153}$/, "i"); //find any character not between a-z
    const matchPattern = contactReasonDetailsRegexp.test(input);
    if (!matchPattern)
      return "ERROR! Length  Must be between 17 and 153 characters Numbers and Special Characters Not allowed";
    else return "OK";
   };
   
    return (
    <>
       <label htmlFor="ContactReasonDetailsId"> </label>
       <textarea
         id="ContactReasonDetailsId"
         placeholder="ContactReasonDetails"
         value={contactReasonDetails}
         onChange={(e) => {
           const errorMessage = validateContactReasonDetails(e.target.value);
           setErrorValidation(errorMessage);
           inputProps.onChangeHandler(e.target.value);
         }}
       />
       {!errorValidation }
       <div> {errorValidation}</div>
    </>
    
    )  
 }
 export default ContactReasonDetails;