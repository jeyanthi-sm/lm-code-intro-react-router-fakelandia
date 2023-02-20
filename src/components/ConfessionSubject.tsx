import React  from "react";
import { useState } from "react";
export interface ConfessionSubjectProps {
    subjectValue:string;
    onChangeHandler: (value:string) => void;
}

const ConfessionSubject:React.FC<ConfessionSubjectProps> = (inputConfessionSubjectProps) => {
   const [subjectValue, setSubjectValue] = useState();
   const [errorValidation, setErrorValidation] = useState("");
  const validateSubjectValue = (input:string) => {
    const subjectValueRegexp = RegExp(/^[a-z]{3,23}$/, "i"); //find any character not between a-z
    const matchPattern = subjectValueRegexp.test(input);
    if (!matchPattern)
      return "ERROR! Length  Must be between 3 and 23 characters Numbers and Special Characters Not allowed";
    else return "OK";
  };
  
   return (
   <>
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
      {!errorValidation }
      <div> {errorValidation}</div>
   </>
   
   )  
}
export default ConfessionSubject;