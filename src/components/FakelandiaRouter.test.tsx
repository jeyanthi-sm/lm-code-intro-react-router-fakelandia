import { FakelandiaRouter } from './FakelandiaRouter'
import { render, screen } from "@testing-library/react";
describe("Testing Basic MyRouter Component", () => {
  test("Testing Basic MyRouter Component", () => {
    render (<FakelandiaRouter />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});