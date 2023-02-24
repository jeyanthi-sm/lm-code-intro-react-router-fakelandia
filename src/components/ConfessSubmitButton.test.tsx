
import { render, screen } from "@testing-library/react";
import ConfessSubmitButton from "./ConfessSubmitButton";
import { canSubmitButtonBeEnabled } from "./utils/canSubmitButtonBeEnabled";
const mockFunction = jest.fn();
describe("Testing Basic Submit Button Enabled", () => {
    test("Testing Basic Submit Button", async () => {
    render (<ConfessSubmitButton canBeEnabled={true} onClickHandler={mockFunction} /> );
      expect(screen.getByText("Submit Form")).toBeInTheDocument();      
    });
  });

  describe("Testing Basic Submit Button Disabled", () => {
      test("Testing Basic Submit Button Disabled Y", async () => {
        render (<ConfessSubmitButton canBeEnabled={false} onClickHandler={jest.fn}/>);
        expect(screen.getByText("Submit Form")).toBeInTheDocument();
        expect(await screen.findByText("Submit Form")).toBeDisabled();    
      });
    });
  
    describe("Testing Basic Submit Button Enabled on", () => {
      test("Testing Basic Submit Button Enabled on Change Y", async () => {
        render (<ConfessSubmitButton canBeEnabled={true} onClickHandler={jest.fn}/>);
        expect(screen.getByText("Submit Form")).toBeInTheDocument();
        expect(await screen.findByText("Submit Form")).toBeEnabled();    
      });
    });

    describe("Testing Basic CanSubmitButtonBeEnabled", () => {
        test("Testing Basic Submit Button enabled", async () => {
          const inputFormData = {
            subject:"Testing",
            reason:"lift",
            details:"Using lift is not good for health. Use staircase instead",
        }
        const canBeEnabledResult = canSubmitButtonBeEnabled({...inputFormData});
       
        render (<ConfessSubmitButton canBeEnabled={canBeEnabledResult} onClickHandler={jest.fn}/>);
        
        expect(screen.getByText("Submit Form")).toBeInTheDocument();
        expect(await screen.findByText("Submit Form")).toBeEnabled();    

      
          
        });
      });
      
      describe("Testing Basic CanSubmitButtonBeEnabled False", () => {
        test("Testing Basic Submit Button Disabled", async () => {
          const inputFormData = {
            subject:"Testing Subject",
            reason:"lift",
            details:"Using Lift. Why? Use staircase. So you can be healthy for more time",
        }
        const canBeEnabledResult = canSubmitButtonBeEnabled({...inputFormData});
        render (<ConfessSubmitButton canBeEnabled={canBeEnabledResult} onClickHandler={jest.fn}/>);
        
        expect(screen.getByText("Submit Form")).toBeInTheDocument();
        expect(await screen.findByText("Submit Form")).toBeDisabled();    

      
          
        });
      });
      