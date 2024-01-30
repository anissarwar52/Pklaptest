
Cypress.Commands.add('login', (email, password) => {
    cy.get('.icon').eq(0).click();
    cy.get('#customer-email').type(email, { force: true });
    cy.get('#pass').type(password, { force: true });
    cy.get('#send2').click({force: true});
    
  });
 
import 'cypress-xpath';
describe("Add To WishList", () => {
  beforeEach(() => {
    cy.viewport(1280, 786);
    cy.visit("https://www.paklap.pk/");
  });

  it("WishList", () => {
    // Using the custom login command
    cy.login("ms0601572@gmail.com", "Saadtalha@7461");

    // Optionally wait for a response or a change in the page after login
    cy.wait(2000); // Adjust this based on your application's response time

    // Continue with the rest of the test
    cy.get('.icon').eq(0).click();
    cy.get('#search').type("Dell Latitude", {force: true}).type('{enter}', {force: true});

    // Wait for search results, adjust as necessary
    cy.wait(2000); // Adjust this based on your application's response time

    // Selecting the product
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link')
      .should('be.visible')
      .click();

    // Adding to wishlist
    cy.get('.towishlist > span').should('be.visible').click();
  });
});