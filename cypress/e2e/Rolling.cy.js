describe('Rolling dice', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });
  it('rolling a d4', () => {
    cy.contains('1D4').click()
  })
})