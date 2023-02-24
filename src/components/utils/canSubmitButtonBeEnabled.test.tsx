import { canSubmitButtonBeEnabled } from "./canSubmitButtonBeEnabled";
import ConfessSubmitButton from "../ConfessSubmitButton";
import { render, screen } from "@testing-library/react";

describe("Testing Basic CanSubmitButtonBeEnabled", () => {
  test("Testing Basic Submit Button enabled", async () => {
    const inputFormData = {
      subject:"Testing",
      reason:"lift",
      details:"Eating green vegetables is not good",
  }
    const canBeEnabledResult = canSubmitButtonBeEnabled({...inputFormData});
    expect(canBeEnabledResult).toBeTruthy();

    
  });
});

describe("Testing Basic CanSubmitButtonBeEnabled False", () => {
  test("Testing Basic Submit Button Disabled", async () => {
    const inputFormData = {
      subject:"",
      reason:"",
      details:"",
  }
    const canBeEnabledResult = canSubmitButtonBeEnabled({...inputFormData});
    expect(canBeEnabledResult).toBeFalsy();

    
  });
});
