describe('Visiting test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.wait(3000);
  });

  const Name1 = 'Billbothom';
  const Name2 = 'helspawn';
  const Class1 = '4';
  const Class2 = '8'; 

  it('Character Creation', () => {

    cy.contains('Create Sheet').click()

    cy.url().should('include', '/CreateSheet')

    cy.get('#characterName').type(Name1);
    cy.get('#characterName').should('have.value', Name1);

    cy.get('#characterClass').select(Class1);
    cy.get('#characterClass').should('have.value', Class1);

    cy.contains('Save').click()
  }) 

  it('Character View', () => {
    
    cy.contains(Name1).click()

    cy.get('#characterName').clear().type(Name2);

    cy.get('#characterClass').select(Class2);

    cy.contains('1D4').click();

    cy.wait(3000);

    cy.visit('http://localhost:3000/')

    cy.contains(Name2).click()

    cy.get('#characterName').should('have.value', Name2);

    cy.get('#characterClass').should('have.value', Class2);

    cy.get('#characterName').clear().type(Name1);

    cy.get('#characterClass').select(Class1);

    cy.contains('1D4').click();

    cy.wait(3000);

    cy.visit('http://localhost:3000/')

    cy.contains(Name1).click()

    cy.get('#characterName').should('have.value', Name1);

    cy.get('#characterClass').should('have.value', Class1);

  }) 

  it('Character Delete', () => {

    cy.contains(Name1).click()

    cy.contains('Delete').click()
  }) 

})