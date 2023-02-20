import { useState } from "react";
import ConfessionSubject from "./ConfessionSubject";
import ContactReason from "./ContactReason";
import ContactReasonDetails from "./ContactReasonDetails";

const Confession:React.FC = () => {
type formData = {
    subject:string;
    contactReason:string;
    contactReasonDetails:string;
}
const [formInput, setFormInput ] = useState<formData>({
   subject:"subject",
   contactReason:"Confession",
   contactReasonDetails:"Details for contact",
});
return (
<> 
<div className="mainClass"> 
<ul>
    <li> It is very difficult to catch people committing misdemanours so we appreciate it when citizens confess to us directly</li>
    <li> However if you're just having a hard day and need to vent then you're welcome to contact us here too. Upto you!  </li>
</ul>
</div>
<div className="FormInput"> 
<ConfessionSubject subjectValue="Subject" onChangeHandler={ (e) => {
    const newFormInput = {...formInput};
    newFormInput.subject = e;
    setFormInput(newFormInput);
}}/>
<ContactReason reason="lift" onChangeHandler={ (e) => {
    const newFormInput = {...formInput};
    newFormInput.contactReason = e;
    setFormInput(newFormInput);
}}/>
<ContactReasonDetails reason="Contact Reason Details" onChangeHandler={(e) => {
    const newFormInput = {...formInput};
    newFormInput.contactReasonDetails = e;
    setFormInput(newFormInput);
}

} />
</div>
</>
)
}
export default Confession;