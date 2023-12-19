describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Visiting test', () => {
  it('renders', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Create Sheet').click()
  }) 
})