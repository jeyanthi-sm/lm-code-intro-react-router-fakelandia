import { render, screen } from "@testing-library/react";
import ContactReasonDetails from './ContactReasonDetails';
import userEvent from "@testing-library/user-event";
import { wrap } from "module";

const mockFunction = jest.fn();


function beforeEachTest() {
render (<ContactReasonDetails reasonDetails="tesing" onChangeHandler={mockFunction}/>);
}
test("Existence of Reason For Sparing in the screeen", () => {
  beforeEachTest();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});