// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initCount = screen.getByTestId("count");
  expect(parseInt(initCount.textContent)).toEqual(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initCount = screen.getByTestId("count");
  var initCountVal = parseInt(initCount.textContent);
  const increment = screen.getByRole("button", {name : "+"});
  fireEvent.click(increment);
  expect(parseInt(initCount.textContent)).toBe(initCountVal + 1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initCount = screen.getByTestId("count");
  var initCountVal = parseInt(initCount.textContent);
  const decrement = screen.getByRole("button", {name : "-"});
  fireEvent.click(decrement);
  expect(parseInt(initCount.textContent)).toBe(initCountVal - 1);
});
