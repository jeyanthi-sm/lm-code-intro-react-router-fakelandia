import MainLayout from "./MainLayout";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Testing Basic MainLayout Component using MainLayout Router", () => {
  test("Testing Basic MainLayout Component", () => {
    render (<MemoryRouter><MainLayout /></MemoryRouter>);
    expect(screen.getByText(/FAKELANDIA JUSTICE DEPARTMENT/i)).toBeInTheDocument();
  });
});
describe("Testing Basic MainLayout Component using Browser Router", () => {
  test("Testing Basic MainLayout Component", () => {
    render (<BrowserRouter><MainLayout /></BrowserRouter>);
    expect(screen.getByText(/FAKELANDIA JUSTICE DEPARTMENT/i)).toBeInTheDocument();
  });
});