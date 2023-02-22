import React  from "react";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { validateSubjectValue } from "./utils/validateConfessionSubject";
export interface ConfessionSubjectProps {
    subjectValue:string;
    onChangeHandler: (value:string) => void;
}

const ConfessionSubject:React.FC<ConfessionSubjectProps> = (inputConfessionSubjectProps) => {
   const [subjectValue, setSubjectValue] = useState();
   const [errorValidation, setErrorValidation] = useState<boolean|string>();
   

   return (
   <>
      <div className="confessionInputs">
      <label htmlFor="SubjectLineId">Subject </label>
      <input
        id="SubjectLineId"
        type="text"
        placeholder="Subject"
        value={subjectValue}
        onChange={(e) => {
          const errorMessage = validateSubjectValue(e.target.value);
          setErrorValidation(errorMessage);
          inputConfessionSubjectProps.onChangeHandler(e.target.value);
        }}
      />
      </div>
       {errorValidation !== "OK" && (
        <div>
          <ErrorMessage message={errorValidation} />
        </div>
        
      )}
</>
   )
      }
export default ConfessionSubject;