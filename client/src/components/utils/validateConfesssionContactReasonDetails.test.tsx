import { render, screen } from "@testing-library/react";
import ContactReasonDetails from "../ContactReasonDetails";
import userEvent from "@testing-library/user-event";

const mockFunction = jest.fn();

function beforeEachTest() {
  render (<ContactReasonDetails reasonDetails="tesing" onChangeHandler={mockFunction}/>);
        }

        const MOCKMAXLENGTHCONFESSIONREASONDETAILS =
  "iroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogioiroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogioiroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogioiroejgioejgioregioergioerjgioregioregoejrgiorejgiorejgioegjierogejogio";

const MOCKMINLENGTHCONFESSIONREASONDETAILS = "AB";

const onChangeValidation = async (inputConfessionReasonDetails: string) => {
  beforeEachTest();
  const user = userEvent.setup();
  
  const node = screen.getByRole('textbox');
  await user.type(node, inputConfessionReasonDetails);
  expect(screen.queryByText("ERROR")).not.toBeInTheDocument();
};

describe("Max Length Checking Error", () => {
  test("Max Length Checking Error", async () => {
    onChangeValidation(MOCKMAXLENGTHCONFESSIONREASONDETAILS);
  });
});

describe("Min Length Checking Error", () => {
  test("Min Length Checking Error", async () => {
    onChangeValidation(MOCKMINLENGTHCONFESSIONREASONDETAILS);
  });
});