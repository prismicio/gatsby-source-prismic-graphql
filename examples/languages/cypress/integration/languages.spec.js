/// <reference types="cypress" />

context('Languages', () => {
  beforeEach(() => cy.visit('/'));

  it('should render the home page', () => {
    cy.get('main').contains('A heading here');
    cy.get('main').contains('Click here for alternative language');
  });

  it('should render another language', () => {
    cy.visit('http://localhost:8000/is');
    cy.get('main').contains('Hver við erum og hver við viljum verða');
  });
});
