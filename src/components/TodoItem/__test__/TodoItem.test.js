import { render, screen } from '@testing-library/react';
import TodoITem from "../TodoItem";

test('should render prop received from ', () => {
  render(<TodoITem task="Having Dinner" id="1" status="completed"  />);
  const textElement = screen.queryByText(/delete/i);
  expect(textElement).toBeInTheDocument();
});
