import Misdemean from "./Misdemean";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
const mockFunction = jest.fn();
// setup function
function setup(jsx: JSX.Element) {
  return {
    //user: userEvent.setup(),
    ...render(jsx),
  }
}
describe("Testing Basic Misdemeanour Component", () => {
  test("Testing Basic Misdemanour Component", () => {
    const misdemeanSelectValue = "vegetables";
    const user = setup(<Misdemean onChange={mockFunction()} />);
    

    const node = screen.getByRole("combobox");

    expect(mockFunction).toHaveBeenCalledTimes(1);
//    render (<Misdemean onChange={mockFunction}/>);
    //expect(screen.getByText("Misdemeanour")).toBeInTheDocument();
  });
});