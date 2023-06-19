import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Frontend Application using Lord of the Rings API/i);
  expect(linkElement).toBeInTheDocument();
});
