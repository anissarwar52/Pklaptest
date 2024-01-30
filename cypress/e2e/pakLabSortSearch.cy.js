import 'cypress-xpath';
describe("Sort Search", () => {
    beforeEach(() => {
        cy.viewport(1280, 786);
        cy.visit("https://www.paklap.pk/");
    })  

    it("Sort Search", () => {
        cy.get('.icon').eq(0).click()
        cy.xpath('/html/body/div[6]/header/div[2]/div/div[1]/div[1]/div/ul/li[3]/a').eq(0).click()
        cy.get('#customer-email').eq(0).type("ms0601572@gmail.com",{ force: true })
        cy.get('#pass').eq(0).type("Saadtalha@7461",{ force: true })
        cy.get('#send2').eq(0).click()
        cy.get('.icon').eq(0).click()
        cy.get('#search').eq(0).type("Lenavo Thinkpad T480",{force:true})
        cy.get('#search').eq(0).type('{enter}',{force:true})
        cy.xpath("/html/body/div[6]/main/div[3]/div[2]/div/div[2]/div/div[1]/div[1]").eq(0).click()
        cy.xpath("/html/body/div[6]/main/div[3]/div[2]/div/div[2]/div/div[1]/div[2]/ol/li[1]/a").eq(0).click()
        cy.xpath("/html/body/div[6]/main/div[3]/div[2]/div/div[2]/div/div[2]/div[1]").eq(0).click()
        cy.xpath("/html/body/div[6]/main/div[3]/div[2]/div/div[2]/div/div[2]/div[2]/ol/li[2]/a").eq(0).click()
    });

});