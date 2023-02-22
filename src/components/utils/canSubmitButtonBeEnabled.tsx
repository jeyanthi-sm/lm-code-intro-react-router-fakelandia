import { validateContactReasonForSubmitButton } from "./validateConfessionContactReason";
import { validateSubjectValue } from "./validateConfessionSubject";
import { validateContactReasonDetails } from "./validateConfessionContactReasonDetails";
import { FormData } from "../../types/misdemeanours.types";
export const canSubmitButtonBeEnabled:(inputFormData:FormData) => boolean = (inputFormData) => {
    const {subject, contactReason, contactReasonDetails  } = inputFormData;
    console.log(subject);
    console.log(contactReason);
    console.log(contactReasonDetails);
const canBeEnabled =
(typeof validateSubjectValue(subject) === "string" &&  validateSubjectValue(subject) === "OK" && 
  typeof validateContactReasonForSubmitButton(contactReason) === "string" && validateContactReasonForSubmitButton(contactReason) === "OK" && 
  typeof validateContactReasonDetails(contactReasonDetails) === "string" && validateContactReasonDetails(contactReasonDetails) === "OK")? true:false;
console.log(canBeEnabled);
  return canBeEnabled;
}