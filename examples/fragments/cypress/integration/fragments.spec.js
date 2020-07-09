/// <reference types="cypress" />

context('Fragments', () => {
  beforeEach(() => cy.visit('/'));

  it('should render the home page', () => {
    cy.get('main').contains('Articles count');
  });
});
