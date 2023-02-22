import React from "react";
import { validateContactReasonForSubmitButton } from "./utils/validateConfessionContactReason";
import { validateSubjectValue } from "./utils/validateConfessionSubject";
import { validateContactReasonDetails } from "./utils/validateConfessionContactReasonDetails";
interface ConfessSubmitButtonProps {
   canBeEnabled?:boolean;
  onClickHandler: (event: React.MouseEvent<HTMLElement>) => void;
}
const ConfessSubmitButton: React.FC<ConfessSubmitButtonProps> = (inputConfessSubmitButtonProps:ConfessSubmitButtonProps) =>{
    const { canBeEnabled, onClickHandler} = inputConfessSubmitButtonProps;
 
   return (
  <>
  { 
    canBeEnabled === true ? 
    <button type="button"  onClick={onClickHandler}>
      Submit Form{" "}
    </button>:
     <button type="button" disabled onClick={onClickHandler}>
     Submit Form{" "}
   </button>
 }
  </>
);
    }
export default ConfessSubmitButton;