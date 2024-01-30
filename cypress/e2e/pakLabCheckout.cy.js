import 'cypress-xpath';
describe("Checkout", () => {
    beforeEach(() => {
        cy.viewport(1280, 786);
        cy.visit("https://www.paklap.pk/");
    })  
    it("CheckOut", () => {
        cy.get('.icon').first().click()
        cy.xpath('/html/body/div[6]/header/div[2]/div/div[1]/div[1]/div/ul/li[3]/a').click({ force: true })
        cy.get('#customer-email').type("ms0601572@gmail.com",{ force: true })
        cy.get('#pass').type("Saadtalha@7461",{ force: true })
        cy.get('#send2').click()
        cy.contains('My Cart').click();
        cy.get('#top-cart-btn-checkout').click({force: true})
        cy.xpath("/html/body/div[6]/main/div[2]/div/div/div[4]/ol/li[1]/div[2]/form/div/fieldset/div/div[1]/div/input").type("Hostel City Islambad")
        cy.xpath("/html/body/div[6]/main/div[2]/div/div/div[4]/ol/li[1]/div[2]/form/div/div[7]/div/input").type("Islamabad")
        cy.xpath("/html/body/div[6]/main/div[2]/div/div/div[4]/ol/li[1]/div[2]/form/div/div[8]/div/input").type("45600")
        cy.xpath("/html/body/div[6]/main/div[2]/div/div/div[4]/ol/li[1]/div[2]/form/div/div[9]/div/input").type("03451906252")
        cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
        cy.get('.button').click()
    });

});