import ConfessionSubject from "./ConfessionSubject";    
import { render, screen } from "@testing-library/react";
const mockFunction = jest.fn();
describe("Testing Basic Confession Subject Component", () => {
  test("Testing Basic Confession Subject Component", () => {
    render (<ConfessionSubject subjectValue="Test Confession Subject" onChangeHandler={mockFunction} />);
    expect(screen.getByText("Confession")).toBeInTheDocument();
  });
});