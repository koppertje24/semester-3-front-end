import React from 'react'
import App from './App.js'

describe('<App />', () => {
  it('renders', () => {
    cy.viewport(1920, 1080);
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })
})