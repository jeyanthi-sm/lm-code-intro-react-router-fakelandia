import { useState } from "react";
import ConfessionSubject from "./ConfessionSubject";
import ConfessSubmitButton from "./ConfessSubmitButton";
import ContactReason from "./ContactReason";
import ContactReasonDetails from "./ContactReasonDetails";
import { canSubmitButtonBeEnabled } from "./utils/canSubmitButtonBeEnabled";
import { FormData } from "../types/misdemeanours.types";
const Confession:React.FC = () => {
/* type formData = {
    subject:string;
    contactReason:string;
    contactReasonDetails:string;
} */
const [formInput, setFormInput ] = useState<FormData>({
   subject:"",
   contactReason:"",
   contactReasonDetails:"",
});
const [submitButtonCanBeEnabled, setSubmitButtonCanBeEnabled] = useState(false);
const submitButton = () => {
    console.log(formInput);
}
    function canSubmitButtonBeEnabledForSubmitButton(newFormInput: { subject: string; contactReason: string; contactReasonDetails: string; }): import("react").SetStateAction<boolean> {
        throw new Error("Function not implemented.");
    }

return (
<> 
<div className="disclosure"> 
<ul>
    <li> It is very difficult to catch people committing misdemanours so we appreciate it when citizens confess to us directly</li>
    <li> However if you're just having a hard day and need to vent then you're welcome to contact us here too. Upto you!  </li>
</ul>
</div>
<div className="confessionForm"> 
<ConfessionSubject subjectValue="Subject" onChangeHandler={ (e) => {
    const newFormInput = {...formInput};
    newFormInput.subject = e;
    setFormInput(newFormInput);
    setSubmitButtonCanBeEnabled(canSubmitButtonBeEnabled(newFormInput));
}}/>
<ContactReason reason="" onChangeHandler={ (e) => {
    const newFormInput = {...formInput};
    newFormInput.contactReason = e;
    setFormInput(newFormInput);
    setSubmitButtonCanBeEnabled(canSubmitButtonBeEnabled(newFormInput));
}}/>
<ContactReasonDetails reasonDetails="Contact Reason Details" onChangeHandler={(e) => {
    const newFormInput = {...formInput};
    newFormInput.contactReasonDetails = e;
    setFormInput(newFormInput);
    setSubmitButtonCanBeEnabled(canSubmitButtonBeEnabled(newFormInput));
  }} 
/>
<ConfessSubmitButton canBeEnabled={submitButtonCanBeEnabled} onClickHandler={submitButton}/>
</div>
</>
)
}
export default Confession;
