import { useState } from "react";
import ConfessionSubject from "./ConfessionSubject";
const Confession:React.FC = () => {
type formData = {
    subject:string;
    contactReason:string;
    contactDetails:string;
}
const [formInput, setFormInput ] = useState<formData>({
   subject:"subject",
   contactReason:"Confession",
   contactDetails:"Details for contact",
});
return (
<> 
<div className="mainClass"> 
<ul>
    <li> It is very difficult to catch people committing misdemanours so we appreciate it when citizens confess to us directly</li>
    <li> However if you're just having a hard day and need to vent then you're welcome to contact us here too. Upto you!  </li>
</ul>
</div>
<ConfessionSubject subjectValue="Subject" onChangeHandler={ (e) => {
    const newFormInput = {...formInput};
    newFormInput.subject = e;
    setFormInput(newFormInput);
}}/>
</>
)
}
export default Confession;