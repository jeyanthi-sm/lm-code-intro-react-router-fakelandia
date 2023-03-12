import { render, screen } from "@testing-library/react";
import ContactReasonDetails from './ContactReasonDetails';
import userEvent from "@testing-library/user-event";


const mockFunction = jest.fn();


function beforeEachTest() {
render (<ContactReasonDetails reasonDetails="tesing" onChangeHandler={mockFunction}/>);
}
test("Existence of Contact Reason Details in the screeen", () => {
  beforeEachTest();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});


test("Contact Reason Details capture the changes", async () => {
  beforeEachTest();
  mockFunction();

  const node = screen.getByRole('textbox');
  const CONTACTREASONDETAILSNEWVALUE = "We are Loving beings";
  const user = userEvent.setup();

  await user.type(node, CONTACTREASONDETAILSNEWVALUE);

  expect(mockFunction).toHaveBeenCalledTimes(21);
  expect(mockFunction).toHaveBeenLastCalledWith(CONTACTREASONDETAILSNEWVALUE);
});
