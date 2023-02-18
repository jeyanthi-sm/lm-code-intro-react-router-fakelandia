import Confession from "./Confession";
import { render, screen } from "@testing-library/react";
describe("Testing Basic Confession Component", () => {
  test("Testing Basic Confession Component", () => {
    render (<Confession />);
    expect(screen.getByText("Confession")).toBeInTheDocument();
  });
});