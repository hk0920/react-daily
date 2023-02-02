import React from 'react';
import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import App from './App';
=======
import { App } from './App';
>>>>>>> 16668860c28f43b836128d10b61578004b1ee732

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
