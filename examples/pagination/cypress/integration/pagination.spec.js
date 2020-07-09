/// <reference types="cypress" />

context('Pageination', () => {
  beforeEach(() => cy.visit('/'));

  it('should render the home page', () => {
    cy.get('main').contains('List of Articles');
    cy.get('main').contains('The WordPress Question');
  });

  it('should render a next button', () => {
    const elem = cy.get('button').last();
    elem.contains('next page');
  });

  it('should render another page', () => {
    cy.visit('/article/the-wordpress-question');
    cy.get('main div h1').contains('The WordPress Question');
  });
});
