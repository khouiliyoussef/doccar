import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CAR DOC brand', () => {
  render(<App />);
  const brand = screen.getByText(/CAR DOC/i);
  expect(brand).toBeInTheDocument();
});
