import ConfessionSubject from "./ConfessionSubject";    
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
const mockFunction = jest.fn();
describe("Testing Basic Confession Subject Component", () => {
  test("Testing Basic Confession Subject Component", () => {
    render (<ConfessionSubject subjectValue="Test Confession Subject" onChangeHandler={mockFunction} />);
    expect(screen.getByText("Subject")).toBeInTheDocument();
  });
});

function beforeEachTest() {
  render (<ConfessionSubject subjectValue="Test Confession Subject" onChangeHandler={mockFunction} />);
}
describe("captures renew changes", () => {
  test("captures renew changes", async () => {
    beforeEachTest();
    const CONFESSIONSUBJECT = "NEW VALUE";
    const user = userEvent.setup();

    const node = screen.getByRole("textbox");
    

    await user.type(node, CONFESSIONSUBJECT);

    expect(mockFunction).toHaveBeenCalledTimes(9);
    expect(mockFunction).toHaveBeenCalledWith(CONFESSIONSUBJECT);

    
    
  });
});

const MOCKMINLENGTHERRORSUBJECTVALUE = "N";
const MOCKNUMBERINSUBJECTVALUE = "1234";
const MOCKMAXLENGTHSUBJECTVALUE =
  "iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogio";
const MOCKSPECIALINSSUBJECTVALUE = "$$$$$$";

const onChangeValidation = async (inputConfessionSubjectValue: string) => {
  beforeEachTest();
  const user = userEvent.setup();
  const node = screen.getByRole("textbox");
  await user.type(node, inputConfessionSubjectValue);
  expect(screen.queryByText("ERROR")).not.toBeInTheDocument();
};

describe("Min Length Checking Error", () => {
  test("Min Length Checking Error", async () => {
    onChangeValidation(MOCKMINLENGTHERRORSUBJECTVALUE);
  });
});

describe("Max Length Checking Error", () => {
  test("Max Length Checking Error", async () => {
    onChangeValidation(MOCKMAXLENGTHSUBJECTVALUE);
  });
});

describe("Test for Number", () => {
  test("Testfor Number", async () => {
    onChangeValidation(MOCKNUMBERINSUBJECTVALUE);
  });
});

describe("Test for Special Characters", () => {
  test("Testfor Special Characters 1", async () => {
    onChangeValidation(MOCKSPECIALINSSUBJECTVALUE);
  });
});