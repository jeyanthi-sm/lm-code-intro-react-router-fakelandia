import { validateContactReason, validateContactReasonForSubmitButton } from "./validateConfessionContactReason"; 
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactReason from "../ContactReason";
const mockFunction = jest.fn();
describe("Testing Validate Contact Reason", () => {
  test("Testing Basic Contact Reason Component", () => {
    /*render (<ContactReason reason="lift"
         onChangeHandler={mockFunction} />);*/
    const validateresult = validateContactReason("lift");
    expect(validateresult).toBe("OK");  
    //expect(screen.getByText("Reason for contact")).toBeInTheDocument();
  });
});
describe("Testing Validate Contact Reason just-talk", () => {
    test("Testing Basic Contact Reason Component for just talk", () => {
      /*render (<ContactReason reason="lift"
           onChangeHandler={mockFunction} />);*/
      const validateresult = validateContactReason("just-talk");
      expect(validateresult).toBe("OK");  
      //expect(screen.getByText("Reason for contact")).toBeInTheDocument();
    });
  });
describe("Testing Validate Contact Reason  for submit button", () => {
    test("Testing Basic Contact Reason Component for submit button", () => {
      /*render (<ContactReason reason="lift"
           onChangeHandler={mockFunction} />);*/
      const validateResultForSubmitButton = validateContactReasonForSubmitButton("just-talk");
      expect(validateResultForSubmitButton).toBe("ERROR! Not a Valid Value");  
      //expect(screen.getByText("Reason for contact")).toBeInTheDocument();
    });
  });
  describe("Testing Validate Contact Reason  for submit button vegetables", () => {
    test("Testing Basic Contact Reason Component for submit button for vegetables", () => {
      const validateResultForSubmitButton = validateContactReasonForSubmitButton("just-talk");
      expect(validateResultForSubmitButton).toBe("ERROR! Not a Valid Value");  
      //expect(screen.getByText("Reason for contact")).toBeInTheDocument();
    });
  });