import { render, screen } from '@testing-library/react';
import Header from "../Header";

test('should render same text passed to title prop', () => {
  render(<Header title="Todo" />);
  const headingElement = screen.getByText(/todo/i);
  expect(headingElement).toBeInTheDocument();
});

// test('should render same text passed to title prop', () => {
//     render(<Header title="Todo" />);
//     const headingElement = screen.getByRole("heading", {name: "Todo"});
//     expect(headingElement).toBeInTheDocument();
//   });

// test('should render same text passed to title prop', () => {
//     render(<Header title="Todo" />);
//     const headingElement = screen.getByTitle("header");
//     expect(headingElement).toBeInTheDocument();
//   });

//   test('should render same text passed to title prop', () => {
//     render(<Header title="Todo" />);
//     const headingElement = screen.getByTestId("message");
//     expect(headingElement).toBeInTheDocument();
//   });

//   // FIND BY

//   test('should render same text passed to title prop', async() => {
//     render(<Header title="Todo" />);
//     const headingElement = await screen.findByText(/todo/i);
//     expect(headingElement).toBeInTheDocument();
//   });

//   // Query By

//   test('should render same text passed to title prop', async() => {
//     render(<Header title="Todo" />);
//     const headingElement = screen.queryByText(/dogs/i);
//     expect(headingElement).not.toBeInTheDocument();
//   });

//   test('should render same text passed to title prop', async() => {
//     render(<Header title="Todo" />);
//     const headingElements = screen.queryAllByRole("heading");
//     expect(headingElements.length).toBe(2);
//   });