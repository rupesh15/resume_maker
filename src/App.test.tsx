import React from 'react';
import { render, screen } from '@testing-library/react';
import UserComponent from './component/usercomponent';

test('renders learn react link', () => {
  render(<UserComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
