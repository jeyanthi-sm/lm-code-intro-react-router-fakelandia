import NewMisdemean from "./NewMisdemean";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import userEvent from "@testing-library/user-event";
import server from "../mocks/servers";

const mockFunction = jest.fn();

describe("Testing Basic Misdemeanour Component with ALL Option", () => {
    test("Testing Basic Misdemanour Component with ALL option", async () => {
      render (<NewMisdemean onChange={mockFunction}/>);
      await screen.findByText(/ALL/i);
      expect(screen.getByText(/ALL/i)).toBeInTheDocument();
        
    });
  });

describe("Testing Basic Misdemeanour Component", () => {
  test("Testing Basic Misdemanour Component", async () => {
    render (<NewMisdemean onChange={mockFunction}/>);
    const misdemeanSelectValue = "vegetables";
    const user = userEvent.setup();
    const node = screen.getByRole('combobox');
    console.log(node);  
    await user.selectOptions(node, misdemeanSelectValue);
    expect(mockFunction).toHaveBeenCalledTimes(0);


  });
});


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

describe("Testing Basic Fetch API", () => {
  test("Testing Basic Fetch API", () => {
    render(<NewMisdemean onChange={mockFunction} />);
    const getMatchingColumnName = screen.getByRole('row',{name:/CitizenId Date Misdemeanour Punishment Idea/i});
    console.log(getMatchingColumnName);
    expect(getMatchingColumnName).toBeInTheDocument();
  });
});

describe("Fetch Sample Data using MOCK Function", () => {
  test("Testing Fetch Sample", async () => {
    render(<NewMisdemean onChange={mockFunction} />);
    server.use(
      rest.get(FETCHURL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(SAMPLEFETCH));
      })
    );
    await screen.findByText(SAMPLEFETCH.misdemeanours[0].citizenId);
    expect(screen.getByText(SAMPLEFETCH.misdemeanours[0].citizenId)).toBeInTheDocument();
    
  });
});