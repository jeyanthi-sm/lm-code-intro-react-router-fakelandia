import Misdemeanour from "./Misdemeanour";
import { render, screen } from "@testing-library/react";
describe("Testing Basic Misdemeanour Component", () => {
  test("Testing Basic Misdemanour Component", () => {
    render (<Misdemeanour />);
    expect(screen.getByText("Misdemanour")).toBeInTheDocument();
  });
});