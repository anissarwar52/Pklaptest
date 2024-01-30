import 'cypress-xpath';

// Define a custom command for logging in
Cypress.Commands.add('login', (email, password) => {
  cy.get('.icon').first().click();
  cy.contains('Sign In').click({ force: true });
  cy.wait(1000); // Wait for the login form to appear; adjust as needed
  cy.get('#customer-email').should('be.visible').type(email, { force: true });
  cy.get('#pass').should('be.visible').type(password, { force: true });
  cy.get('#send2').should('be.enabled').click();
});
describe("Login Test Cases", () => {
  beforeEach(() => {
    cy.viewport(1280, 786);
    cy.visit("https://www.paklap.pk/");
  });

  it("Login", () => {
    // Use the custom login command
    cy.login("ms0601572@gmail.com", "Saadtalha@7461");

    // Wait for the login process to complete
    cy.wait(2000); // Adjust based on your application's behavior

    // Assuming a loading indicator disappears after login
    cy.get('.loading-spinner').should('not.exist'); // Adjust this selector as needed

    // Interact with 'My Account', using force: true if necessary
    cy.get('.icon').eq(0).click({ force: true })
    cy.contains('Sign Out').click({ force: true });

    // Further actions or assertions can be added here
  });
});