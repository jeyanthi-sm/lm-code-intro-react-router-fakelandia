import React from "react";
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