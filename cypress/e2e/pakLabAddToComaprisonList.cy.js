import 'cypress-xpath';
describe("Add To ComaprisonList", () => {
    beforeEach(() => {
        cy.viewport(1280, 786);
        cy.visit("https://www.paklap.pk/");
    })  

    it("ComaprisonList", () => {
        cy.get('.icon').eq(0).click()
        cy.xpath('/html/body/div[6]/header/div[2]/div/div[1]/div[1]/div/ul/li[3]/a').eq(0).click({force: true})
        cy.get('#customer-email').eq(0).type("ms0601572@gmail.com",{ force: true })
        cy.get('#pass').eq(0).type("Saadtalha@7461",{ force: true })
        cy.get('#send2').eq(0).click()
        cy.get('#ui-id-158 > span').eq(0).click()
        cy.get(':nth-child(2) > .product-item-info > .prolabels-wrapper > .product > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('.tocompare > span').click()

    });

});