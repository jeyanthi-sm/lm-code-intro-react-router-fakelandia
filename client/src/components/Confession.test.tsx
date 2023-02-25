import Confession from "./Confession";
import { render, screen } from "@testing-library/react";
describe("Testing Basic Confession Component", () => {
  test("Testing Basic Confession Component", () => {
    render (<Confession />);
    expect(screen.getByText(/It is very difficult to catch people/i)).toBeInTheDocument();
    expect(screen.getByText(/However if you're just having a hard day/i)).toBeInTheDocument();
    
    expect(screen.getByText("Subject")).toBeInTheDocument();
    expect(screen.getByText("Reason for contact")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("ContactReasonDetails")).toBeInTheDocument();
  });
});