import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import { MemoryRouter } from 'react-router-dom';

describe('Navigation Component', () => {
  it('renders a "Home" link', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    const createSheetLink = screen.getByText('Create Sheet');
    expect(createSheetLink).toBeInTheDocument();
    expect(createSheetLink).toHaveAttribute('href', '/CreateSheet');
  });
});
