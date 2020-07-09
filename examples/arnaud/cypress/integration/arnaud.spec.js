/// <reference types="cypress" />

context('Arnaud', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('check header text', () => {
    cy.get('header').contains('Gatsby Default Starter');
  });

  it('check home page text', () => {
    cy.get('#homepage h1').contains('my homepage');
  });

  it('check first post', () => {
    cy.visit('/blogpost/published');
    cy.get('main').contains('Published blogpost');
  });

  it('check second post', () => {
    cy.visit('/blogpost/published2');
    cy.get('main').contains('published2');
  });
});
