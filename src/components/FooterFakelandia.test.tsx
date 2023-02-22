import { render, screen } from "@testing-library/react";
import FooterFakeLandia from "./FooterFakelandia";
describe("Testing Basic FooterFakelandia Component", () => {
  test("Testing Basic FooterFakelandia Component", () => {
    render (<FooterFakeLandia />);
    expect(screen.getByText(/Fakelandia citizen ©/i)).toBeInTheDocument();
  });
});