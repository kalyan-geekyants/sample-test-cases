import { render, screen } from '@testing-library/react';
import Footer from "../Footer";

test('should render same no of todos passed to numberOfPendingTodos prop', () => {
  render(<Footer numberOfPendingTodos={5} />);
  const paragraphElement = screen.getByText(/5 tasks/i);
  expect(paragraphElement).toBeInTheDocument();
});


test('should render same no of todos passed to numberOfPendingTodos prop', () => {
    render(<Footer numberOfPendingTodos={5} />);
    const paragraphElement = screen.getByText(/5 tasks/i);
    expect(paragraphElement).toBeVisible();
  });

  test('should not to be falsy', () => {
    render(<Footer numberOfPendingTodos={5} />);
    const paragraphElement = screen.getByText(/5 tasks/i);
    expect(paragraphElement).not.toBeFalsy();
  });
  
  test('testing with assetion "toBe"', () => {
    render(<Footer numberOfPendingTodos={1} />);
    const paragraphElement = screen.getByTestId("tasks");
    expect(paragraphElement.textContent).toBe("1 task")
  });
  