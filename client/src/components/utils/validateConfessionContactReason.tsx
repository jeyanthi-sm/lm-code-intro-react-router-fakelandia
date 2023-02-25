import { MISDEMEANOURS, ALLCONTACTREASONS } from "../../types/misdemeanours.types"; 
export const validateContactReason :(value:string) => string | boolean = (value ) => {
    if (typeof value === "string" && (ALLCONTACTREASONS.find((ele) => ele === value))) return "OK";
    else return "ERROR! Not a Valid Value";
};
export const validateContactReasonForSubmitButton :(value:string) => string | boolean = (value ) => {
    
    if (typeof value === "string" && (MISDEMEANOURS.find((ele) => ele === value))) return "OK";
    else return "ERROR! Not a Valid Value";
};

