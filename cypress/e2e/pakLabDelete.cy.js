
import 'cypress-xpath';

// Custom command to delete an item from the cart
Cypress.Commands.add('deleteFromCart', () => {
    // Locate the delete icon and click on it
    cy.get('.icon').first().click({force: true});

    // Wait for the My Cart button to be clickable and then click it
    cy.contains('My Cart').should('be.visible').click({force: true} );

    // Locate the delete button for the item and click on it
    cy.xpath("/html/body/div[6]/header/div[2]/div/div[1]/div[3]/div/div/div/div[2]/div[4]/ol/li/div/div/div[3]/div[2]/a")
      .should('be.visible')
      .click();

    // Click on the confirmation button to complete the deletion
    cy.get('.action-primary > span').click();
});

describe("Delete From Cart", () => {
    beforeEach(() => {
        // Set the viewport dimensions
        cy.viewport(1280, 786);

        // Visit the website
        cy.visit("https://www.paklap.pk/");
    });

    it("should delete an item from the cart", () => {
        // Login actions...
        cy.xpath('/html/body/div[6]/header/div[2]/div/div[1]/div[1]/div/ul/li[3]/a').click({ force: true });
        cy.get('#customer-email').type("ms0601572@gmail.com", { force: true });
        cy.get('#pass').type("Saadtalha@7461", { force: true });
        cy.get('#send2').click();

        // Call the custom command to delete the item from the cart
        cy.deleteFromCart();
    });
});