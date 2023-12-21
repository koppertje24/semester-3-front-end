describe('Visiting test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')

    cy.contains('Create Sheet').click()

    cy.url().should('include', '/CreateSheet')
  });


  it('Character Creation', () => {

    cy.get('#characterName').type('Bob');
    cy.get('#characterName').should('have.value', 'Bob');

    cy.get('#characterClass').select('Bard');
    cy.get('#characterClass').should('have.value', 'Bard');
  }) 
})