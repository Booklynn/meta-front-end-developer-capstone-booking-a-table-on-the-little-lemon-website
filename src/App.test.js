import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logo little lemon link', () => {
  render(<App />);
  const logo = screen.getByAltText(/logo Little Lemon/i);
  expect(logo).toBeInTheDocument();
});
