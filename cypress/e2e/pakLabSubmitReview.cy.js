import 'cypress-xpath';
describe("Submit Riview", () => {
    beforeEach(() => {
        cy.viewport(1280, 786);
        cy.visit("https://www.paklap.pk/");
    })  

    it("SubmitReview", () => {
        cy.get('.icon').eq(0).click()
        cy.xpath('/html/body/div[6]/header/div[2]/div/div[1]/div[1]/div/ul/li[3]/a').eq(0).click({force: true})
        cy.get('#customer-email').eq(0).type("ms0601572@gmail.com",{ force: true })
        cy.get('#pass').eq(0).type("Saadtalha@7461",{ force: true })
        cy.get('#send2').eq(0).click()
        cy.get('#ui-id-158 > span').eq(0).click()
        cy.get(':nth-child(2) > .product-item-info > .prolabels-wrapper > .product > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('.tocompare > span').click()
        cy.get('#Value_5_label').click({force: true})
        cy.get('#Quality_5_label').click({force: true})
        cy.get('#Price_3_label').click({force: true})
        cy.get('#summary_field').type("Good Prouct")
        cy.get('#review_field').type("Very Good Product")
        cy.get('.actions-primary > .action').click()
    });

});