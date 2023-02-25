import { render, screen } from "@testing-library/react";
import Fetch from "./Fetch";
import { rest } from "msw";
import userEvent from "@testing-library/user-event";
import server from "../mocks/servers";
const FETCHURL = `http://localhost:8080/api/misdemeanours/10`;

const SAMPLEFETCH = {
  "misdemeanours": [
    {
      "citizenId": 2494,
      "misdemeanour": "united",
      "date": "23/02/2023"
    },
    {
      "citizenId": 5697,
      "misdemeanour": "lift",
      "date": "23/02/2023"
    },
    {
      "citizenId": 12323,
      "misdemeanour": "vegetables",
      "date": "23/02/2023"
    },
    {
      "citizenId": 14381,
      "misdemeanour": "rudeness",
      "date": "23/02/2023"
    },
    {
      "citizenId": 4168,
      "misdemeanour": "vegetables",
      "date": "23/02/2023"
    },
    {
      "citizenId": 8720,
      "misdemeanour": "rudeness",
      "date": "23/02/2023"
    },
    {
      "citizenId": 12351,
      "misdemeanour": "united",
      "date": "23/02/2023"
    },
    {
      "citizenId": 340,
      "misdemeanour": "united",
      "date": "23/02/2023"
    },
    {
      "citizenId": 5625,
      "misdemeanour": "united",
      "date": "23/02/2023"
    },
    {
      "citizenId": 3765,
      "misdemeanour": "rudeness",
      "date": "23/02/2023"
    }
  ]
};
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
const mockFunction = jest.fn();

describe("Testing Basic Fetch Component", () => {
  test("Testing Basic Fetch Component", () => {
    render(<Fetch url={FETCHURL} />);
    const getAllMatchingColumnName = screen.getAllByRole('row',{name:/CitizenId Date Misdemeanour Punishment Idea/i});
    console.log(getAllMatchingColumnName);
    expect(getAllMatchingColumnName[0]).toBeInTheDocument();
  });
});

describe("Fetch Sample Data using MOCK Function", () => {
  test("Testing Fetch Sample", async () => {
    render(<Fetch url={FETCHURL} />);
    server.use(
      rest.get(FETCHURL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(SAMPLEFETCH));
      })
    );
    await screen.findAllByText(SAMPLEFETCH.misdemeanours[0].citizenId);
    //expect(screen.getAllByText(SAMPLEFETCH.misdemeanours[0].citizenId)).toBeInTheDocument();
    
  });
});