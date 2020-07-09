/// <reference types="cypress" />

context('Static Query', () => {
  beforeEach(() => cy.visit('/'));

  it('should render the home page', () => {
    cy.get('header').contains('Gatsby Default Starter');
  });
});
