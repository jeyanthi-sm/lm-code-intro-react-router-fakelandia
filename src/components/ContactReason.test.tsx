import ContactReason from "./ContactReason";
import { render, screen } from "@testing-library/react";
const mockFunction = jest.fn();
describe("Testing Basic Contact Reason Component", () => {
  test("Testing Basic Contact Reason Component", () => {
    render (<ContactReason reason="lift"
         onChangeHandler={mockFunction} />);
    expect(screen.getByText("rudeness")).toBeInTheDocument();
  });
});