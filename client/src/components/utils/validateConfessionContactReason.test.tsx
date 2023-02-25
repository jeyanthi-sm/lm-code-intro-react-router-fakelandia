import { validateContactReason, validateContactReasonForSubmitButton } from "./validateConfessionContactReason"; 
describe("Testing Validate Contact Reason", () => {
  test("Testing Basic Contact Reason Component", () => {
    const validateresult = validateContactReason("lift");
    expect(validateresult).toBe("OK");  
   });
});
describe("Testing Validate Contact Reason just-talk", () => {
    test("Testing Basic Contact Reason Component for just talk", () => {
      const validateresult = validateContactReason("just-talk");
      expect(validateresult).toBe("OK");  
     });
  });
describe("Testing Validate Contact Reason  for submit button", () => {
    test("Testing Basic Contact Reason Component for submit button", () => {
      const validateResultForSubmitButton = validateContactReasonForSubmitButton("just-talk");
      expect(validateResultForSubmitButton).toBe("ERROR! Not a Valid Value");  
     });
  });
  describe("Testing Validate Contact Reason  for submit button vegetables", () => {
    test("Testing Basic Contact Reason Component for submit button for vegetables", () => {
      const validateResultForSubmitButton = validateContactReasonForSubmitButton("just-talk");
      expect(validateResultForSubmitButton).toBe("ERROR! Not a Valid Value");  
     });
  });