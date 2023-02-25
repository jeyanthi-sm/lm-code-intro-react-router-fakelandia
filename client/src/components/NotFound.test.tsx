import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
describe("Testing NotFound Component", () => {
  test("Testing Basic NotFound Component", () => {
    render (<NotFound />);
    expect(screen.getByText("404! Not Found!")).toBeInTheDocument();
  });
});