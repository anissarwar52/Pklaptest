
import 'cypress-xpath';
Cypress.Commands.add('signUp', (firstName, lastName, email, password) => {
  cy.get('.icon').first().click();
  cy.xpath('/html/body/div[6]/header/div[2]/div/div[1]/div[1]/div/ul/li[3]/a').click();
  cy.xpath('/html/body/div[9]/aside[3]/div[2]/div/div/div[1]/div[2]/div/div/a').click();

  // Fill out the signup form
  cy.get("#firstname").should('be.visible').type(firstName, { force: true });
  cy.get("#lastname").should('be.visible').type(lastName, { force: true });
  cy.get("#email_address").should('be.visible').type(email, { force: true });
  cy.get("#password").should('be.visible').type(password, { force: true });
  cy.get("#password-confirmation").should('be.visible').type(password, { force: true });
  cy.get("#send2").should('be.enabled').click();
});

describe("SignUp Test Cases", () => {
  beforeEach(() => {
    cy.viewport(1280, 786);
    cy.visit("https://www.paklap.pk/"); 
  });

  it("Successful SignUp", () => {
   
    cy.signUp("John", "Do", "johndo@example.com", "password@123");


  });
});