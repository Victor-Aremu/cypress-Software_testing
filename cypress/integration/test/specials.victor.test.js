/// <reference types= "cypress" />

describe("Special Products",()=>{

    beforeEach(() => {
        cy.viewport(1366, 768)
        cy.visit("https://automationteststore.com")
    })

    it(" First Item", ()=>{
        cy.url().should("include", "automation")
        cy.get("#special > .container-fluid").get("#block_frame_special_1772 > .thumbnails > :nth-child(1)").find('div').should('have.class', 'fixed_wrapper').
        find('div').should('have.class', 'fixed').get(":nth-child(1) > .thumbnail > :nth-child(2) > img").click()
        cy.url().should("include", "id=65")
        cy.get('.cart').click().get("#cart_checkout1").click()
        cy.url().should("include", "login")
        cy.get(":nth-child(1) > .active").click()
    })

    it(" Second Item", ()=>{
        cy.url().should("include", "automation")
        cy.get("#special > .container-fluid").get("#block_frame_special_1772 > .thumbnails > :nth-child(2)").find('div').should('have.class', 'fixed_wrapper').
        find('div').should('have.class', 'fixed').get("#block_frame_special_1772 > .thumbnails > :nth-child(2) > .thumbnail > :nth-child(2) > img").click()
        cy.url().should("include", "id=80")
        cy.get('.cart').click().get("#cart_checkout1").click()
        cy.url().should("include", "login")
        cy.get(":nth-child(1) > .active").click()
    })

    it(" Third Item", ()=>{
        cy.url().should("include", "automation")
        cy.get("#special > .container-fluid").get("#block_frame_special_1772 > .thumbnails > :nth-child(3)").find('div').should('have.class', 'fixed_wrapper').
        find('div').should('have.class', 'fixed').get(":nth-child(3) > .thumbnail > :nth-child(2) > img").click()
        cy.url().should("include", "id=51")
        cy.get('.cart').click().get("#cart_checkout1").click()
        cy.url().should("include", "login")
        cy.get(":nth-child(1) > .active").click()
    })

})