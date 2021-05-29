/// <reference types ='cypress' />

describe("changing language", () => {

    beforeEach(() => {
        cy.viewport(1366, 768)
        cy.visit("https://phptravels.net/home")
    })
    it("chage to russian", () => {
        cy.get("#dropdownLangauge").click().then(cy.get('#ru').click())
        cy.wait(30)
        cy.url().should('include', 'ru');
    })

})