import MainLayout from "./MainLayout";
import { render, screen, within } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Testing Basic MainLayout Component using MainLayout Router", () => {
  test("Testing Basic MainLayout Component", () => {
    render (<MemoryRouter><MainLayout /></MemoryRouter>);
    //const justiceDeparmentElement = screen.queryByRole('list',{name:/FAKELANDIA JUSTICE DEPARTMENT/i});
    
    //const headerlist = screen.getByRole('list',{name:/FakelandiaHeading/i})
    //const { headerAllList }= within(headerlist);
    const headerListItems = screen.getAllByRole("listitem");
    const homeElement = screen.queryByRole('link',{name:/Home/i});
    const misdemeanourElement = screen.queryByRole('link',{name:/Misdemeanour/i});
    const confessionElement = screen.queryByRole('link',{name:/Confession/i});
    
    expect(headerListItems.length).toBe(4);
    //expect(justiceDeparmentElement).toBeInTheDocument();
    expect(homeElement).toBeInTheDocument();
    expect(misdemeanourElement).toBeInTheDocument();
    expect(confessionElement).toBeInTheDocument();});
});

describe("Testing Basic MainLayout Component for Home, Confession and Misdemeanour Links", () => {
  test("Testing Basic MainLayout Component", () => {
    render (<BrowserRouter><MainLayout /></BrowserRouter>);
  
    const homeElement = screen.getByRole('link', {name:/Home/i});
    const misdemeanourElement = screen.queryByRole('link',{name:/Misdemeanour/i});
    const confessionElement = screen.queryByRole('link',{name:/confession/i});
 
    const headerListItems = screen.getAllByRole("listitem");
    
    expect(headerListItems.length).toBe(4);
    expect(homeElement).toBeInTheDocument();
    expect(misdemeanourElement).toBeInTheDocument();
    expect(confessionElement).toBeInTheDocument();
});
});
 