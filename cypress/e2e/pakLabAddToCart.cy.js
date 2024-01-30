
Cypress.Commands.add('login', (email, password) => {
    cy.get('.icon').eq(0).click();
    cy.get('#customer-email').type(email, { force: true });
    cy.get('#pass').type(password, { force: true });
    cy.get('#send2').click({force: true});

  });
  

  import 'cypress-xpath';
  
  describe("Add to Cart Test", () => {
    beforeEach(() => {
      cy.viewport(1280, 786);
      cy.visit("https://www.paklap.pk/");
    });
  
    it("should add a product to the cart", () => {
  
      cy.login("ms0601572@gmail.com", "Saadtalha@7461");
  

      cy.wait(2000); 
  
      // Search for a product
      cy.get('.icon').eq(0).click();
      cy.get('#search').type("Lenovo Thinkpad T480", {force: true}).type('{enter}', {force: true});
  

      cy.wait(2000); 
  

      cy.xpath("/html/body/div[6]/main/div[3]/div[2]/div/div[2]/div/div[1]/div[1]").click();
      cy.xpath("/html/body/div[6]/main/div[3]/div[2]/div/div[2]/div/div[1]/div[2]/ol/li[1]/a").click();
      cy.xpath("/html/body/div[6]/main/div[3]/div[2]/div/div[2]/div/div[2]/div[1]").click();
      cy.xpath("/html/body/div[6]/main/div[3]/div[2]/div/div[2]/div/div[2]/div[2]/ol/li[2]/a").click();
      cy.xpath("/html/body/div[6]/main/div[3]/div[1]/div[2]/div[2]/ol/li[1]/div/div[1]/a/span[1]/span/img").click({force: true});
  
      // Adding to cart
      cy.get('#options-7407-list > .field > .label > span').click()
      cy.get("#product-addtocart-button").should('be.visible').and('be.enabled').click();
    });
  });