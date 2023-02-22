
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConfessionSubject from "../ConfessionSubject";
const mockFunction = jest.fn();

function beforeEachTest() {
  render (<ConfessionSubject subjectValue="Test Confession Subject" onChangeHandler={mockFunction} />);
}

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