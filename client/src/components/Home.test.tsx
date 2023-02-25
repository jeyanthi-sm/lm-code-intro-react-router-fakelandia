import Home from "./Home";
import { render, screen } from "@testing-library/react";
describe("Testing Basic Home Component", () => {
  test("Testing Basic Home Component", () => {
    render (<Home />);
    expect(screen.getByText(/Welcome to the Home of the Justice Deparment/i)).toBeInTheDocument();
  });
});