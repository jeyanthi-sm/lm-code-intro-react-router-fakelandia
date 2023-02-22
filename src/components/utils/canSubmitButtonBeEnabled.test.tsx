import { canSubmitButtonBeEnabled } from "./canSubmitButtonBeEnabled";
import ConfessSubmitButton from "../ConfessSubmitButton";
import { render, screen } from "@testing-library/react";

describe("Testing Basic CanSubmitButtonBeEnabled", () => {
  test("Testing Basic Submit Button enabled", async () => {
    const inputFormData = {
      subject:"Testing",
      contactReason:"lift",
      contactReasonDetails:"Eating green vegetables is not good",
  }
    const canBeEnabledResult = canSubmitButtonBeEnabled({...inputFormData});
    expect(canBeEnabledResult).toBeTruthy();

    
  });
});

describe("Testing Basic CanSubmitButtonBeEnabled False", () => {
  test("Testing Basic Submit Button Disabled", async () => {
    const inputFormData = {
      subject:"Testing",
      contactReason:"just-talk",
      contactReasonDetails:"talking is not good",
  }
    const canBeEnabledResult = canSubmitButtonBeEnabled({...inputFormData});
    expect(canBeEnabledResult).toBeFalsy();

    
  });
});
