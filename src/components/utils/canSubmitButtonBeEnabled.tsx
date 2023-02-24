import { validateContactReason } from "./validateConfessionContactReason";
import { validateSubjectValue } from "./validateConfessionSubject";
import { validateContactReasonDetails } from "./validateConfessionContactReasonDetails";
import { FormData } from "../../types/misdemeanours.types";
export const canSubmitButtonBeEnabled:(inputFormData:FormData) => boolean = (inputFormData) => {
    const {subject, reason, details  } = inputFormData;
const canBeEnabled =
(typeof validateSubjectValue(subject) === "string" &&  validateSubjectValue(subject) === "OK" && 
  typeof validateContactReason(reason) === "string" && validateContactReason(reason) === "OK" && 
  typeof validateContactReasonDetails(details) === "string" && validateContactReasonDetails(details) === "OK")? true:false;
return canBeEnabled;
}