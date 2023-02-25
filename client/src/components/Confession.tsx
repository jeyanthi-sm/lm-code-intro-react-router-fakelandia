import { useState } from "react";
import ConfessionSubject from "./ConfessionSubject";
import ConfessSubmitButton from "./ConfessSubmitButton";
import ContactReason from "./ContactReason";
import ContactReasonDetails from "./ContactReasonDetails";
import { canSubmitButtonBeEnabled } from "./utils/canSubmitButtonBeEnabled";
import { FormData } from "../types/misdemeanours.types";
const Confession: React.FC = () => {
  const [formInput, setFormInput] = useState<FormData>({
    subject: "",
    reason: "",
    details: "",
  });
  type returnData = { success: boolean; justTalked: boolean; message: string };
  const [formSubmitResultJson, setFormSubmitResultJson] = useState<returnData>({
    success: false,
    justTalked: false,
    message: "",
  });

  const [submitButtonCanBeEnabled, setSubmitButtonCanBeEnabled] =
    useState(false);
  const submitButton = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    if (formInput !== null || formInput !== undefined) {
      let response = await fetch("http://localhost:8080/api/confess", {
        method: "POST",
        body: JSON.stringify(formInput),
        headers: headersList,
      });

      let data = await response.json();
      setFormSubmitResultJson(data);
    }
  };

  return (
    <>
      <div className="disclosure">
        <ul>
          <li>
            {" "}
            It is very difficult to catch people committing misdemanours so we
            appreciate it when citizens confess to us directly
          </li>
          <li>
            {" "}
            However if you're just having a hard day and need to vent then
            you're welcome to contact us here too. Upto you!{" "}
          </li>
        </ul>
      </div>
      <div className="confessionForm">
        <ConfessionSubject
          subjectValue="Subject"
          onChangeHandler={(e) => {
            const newFormInput = { ...formInput };
            newFormInput.subject = e;
            setFormInput(newFormInput);
            setSubmitButtonCanBeEnabled(canSubmitButtonBeEnabled(newFormInput));
          }}
        />
        <ContactReason
          reason=""
          onChangeHandler={(e) => {
            const newFormInput = { ...formInput };
            newFormInput.reason = e;
            setFormInput(newFormInput);
            setSubmitButtonCanBeEnabled(canSubmitButtonBeEnabled(newFormInput));
          }}
        />
        <ContactReasonDetails
          reasonDetails="Contact Reason Details"
          onChangeHandler={(e) => {
            const newFormInput = { ...formInput };
            newFormInput.details = e;
            setFormInput(newFormInput);
            setSubmitButtonCanBeEnabled(canSubmitButtonBeEnabled(newFormInput));
          }}
        />
        <ConfessSubmitButton
          canBeEnabled={submitButtonCanBeEnabled}
          onClickHandler={submitButton}
        />
        <>
          {" "}
          {formSubmitResultJson.success} {formSubmitResultJson.message}{" "}
          {formSubmitResultJson.justTalked}{" "}
        </>
      </div>
    </>
  );
};
export default Confession;
