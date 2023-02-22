
import { render, screen } from "@testing-library/react";
import MainBody from "./MainBody";
describe("Testing Basic MainBody Component", () => {
  test("Testing Basic MainBody Component", () => {
    render (<MainBody />);
    expect(screen.getByText(/Welcome to the Home of the Justice Deparment/i)).toBeInTheDocument();
  });
});