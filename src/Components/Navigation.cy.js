import React from 'react';
import Navigation from './Navigation.js';
import { MemoryRouter } from 'react-router-dom';

describe('Navigation Component', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.mount(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
  });

  it('renders a "Home" link', () => {
    cy.get('nav ul li').contains('Home').should('exist').and('have.attr', 'href', '/');
  });

  it('renders a "Create Sheet" link', () => {
    cy.get('nav ul li').contains('Create Sheet').should('exist').and('have.attr', 'href', '/CreateSheet');
  });
});
