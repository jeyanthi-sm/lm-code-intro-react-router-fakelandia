import Misdemean from "./Misdemean";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
const mockFunction = jest.fn();
describe("Testing Basic Misdemeanour Component", () => {
  test("Testing Basic Misdemanour Component", async () => {
    render (<Misdemean onChange={mockFunction}/>);
    const misdemeanSelectValue = "2";
    const user = userEvent.setup();
    const node = screen.getByRole('combobox');
    console.log(node);  
    await user.selectOptions(node, misdemeanSelectValue);
    expect(mockFunction).toHaveBeenCalledTimes(0);

  });
});