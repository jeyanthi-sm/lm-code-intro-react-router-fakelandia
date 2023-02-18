import MainLayout from "./MainLayout";
import { render, screen } from "@testing-library/react";
describe("Testing Basic MainLayout Component", () => {
  test("Testing Basic MainLayout Component", () => {
    render (<MainLayout />);
    expect(screen.getByText("MainLayout")).toBeInTheDocument();
  });
});