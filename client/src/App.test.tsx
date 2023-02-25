import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
describe("renders Home Misdemeanour confession", () => {
test('renders Home MisDemanour Confession link', async () => {
  render(<App />);
  const homeElement = screen.getByText(/Welcome to the Home of the Justice Deparment of Fakelandia/i);
  const misdemeanourElement = screen.queryByRole('link',{name:/Misdemeanour/i});
  const confessionElement = screen.queryByRole('link',{name:/confession/i});
  
  expect(homeElement).toBeInTheDocument();
  expect(misdemeanourElement).toBeInTheDocument();
  expect(confessionElement).toBeInTheDocument();
  
});
})
