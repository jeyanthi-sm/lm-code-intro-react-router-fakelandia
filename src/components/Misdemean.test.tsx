import Misdemeanour from "./Misdemean";
import { SetStateAction, useState } from "react";
import { render, screen } from "@testing-library/react";
describe("Testing Basic Misdemeanour Component", () => {
  test("Testing Basic Misdemanour Component", () => {
    const [demeanourSelect, setDemeanourSelect] = useState("");
    const handleChange= (event: { target: { value: SetStateAction<string>; }; }) =>
  {
        console.log(event.target.value);
        setDemeanourSelect(event.target.value);
  
  }
    render (<Misdemeanour onChange={handleChange}/>);
    expect(screen.getByText("Misdemanour")).toBeInTheDocument();
  });
});