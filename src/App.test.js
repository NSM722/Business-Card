import { render, screen } from '@testing-library/react';
import App from './App';

// getByText
test('renders a header element with the given title', () => {
  render(<App title="Digital Business Card"/>);
  const headerElement = screen.getByText(/Digital Business Card/i);
  expect(headerElement).toBeInTheDocument();
});

/*
  findByText text uses async and await to be able to work
  explanation of the test can't be the same as aboveexit
*/
test('renders a heading element with the given props title', async () => {
  render(<App title="Digital Business Card"/>);
  const headerElement = await screen.findByText(/Digital Business Card/i);
  expect(headerElement).toBeInTheDocument();
});

// queryBy
test('asserts that the text given is not in the document', () => {
  render(<App title="Card Solutions"/>);
  const headerElement = screen.queryByText(/Card Solutions/i);
  expect(headerElement).not.toBeInTheDocument();
});
