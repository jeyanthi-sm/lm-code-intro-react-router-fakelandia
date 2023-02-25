import ContactReason, { ContactReasonProps } from "./ContactReason";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
const mockFunction = jest.fn();
describe("Testing Basic Contact Reason Component", () => {
  test("Testing Basic Contact Reason Component", () => {
    render (<ContactReason reason="lift"
         onChangeHandler={mockFunction} />);
    expect(screen.getByText("Reason for contact")).toBeInTheDocument();
  });
});

const mockContactReasonProps: ContactReasonProps = {
  onChangeHandler: mockFunction,
  reason: 'lift',
};

function beforeEachTest() {
  render (<ContactReason {...mockContactReasonProps} />);
}
describe("Change to Contact Reason", () => {
  test("captures Changes", async () => {
    beforeEachTest();
    const CONTACTREASONNEWVALUE = "just-talk";
    const user = userEvent.setup();

    const node = screen.getByRole("combobox");

    await user.selectOptions(node, CONTACTREASONNEWVALUE);

    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith(CONTACTREASONNEWVALUE);
    
  });
});