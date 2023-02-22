import MainLayout from "./MainLayout";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Testing Basic MainLayout Component using MainLayout Router", () => {
  test("Testing Basic MainLayout Component", () => {
    const justiceDeparmentElement = screen.getByText(/FAKELANDIA JUSTICE DEPARTMENT/i);
    const homeElement = screen.queryByRole('link',{name:/Misdemeanour/i});
    const misdemeanourElement = screen.queryByRole('link',{name:/Misdemeanour/i});
    const confessionElement = screen.queryByRole('link',{name:/confession/i});
    render (<MemoryRouter><MainLayout /></MemoryRouter>);
    expect(justiceDeparmentElement).toBeInTheDocument();
    expect(homeElement).toBeInTheDocument();
    expect(misdemeanourElement).toBeInTheDocument();
    expect(confessionElement).toBeInTheDocument();});
});

describe("Testing Basic MainLayout Component for Home, Confession and Misdemeanour Links", () => {
  test("Testing Basic MainLayout Component", () => {
    const homeElement = screen.getByText(/FAKELANDIA JUSTICE DEPARTMENT/i);
    const misdemeanourElement = screen.queryByRole('link',{name:/Misdemeanour/i});
    const confessionElement = screen.queryByRole('link',{name:/confession/i});
 
    render (<BrowserRouter><MainLayout /></BrowserRouter>);
  
    expect(homeElement).toBeInTheDocument();
    expect(misdemeanourElement).toBeInTheDocument();
    expect(confessionElement).toBeInTheDocument();
});
});
 