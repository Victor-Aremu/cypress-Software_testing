/// <reference types="cypress" />

describe("Latest Products",()=>{

    beforeEach(() => {
        cy.viewport(1366, 768)
        cy.visit("https://automationteststore.com")
    })
    it("First item", ()=>{
        cy.url().should("include", "automation")
        cy.get("#latest > .container-fluid").get("#block_frame_latest_1770 > .thumbnails > :nth-child(1)").find('div').should('have.class', 'fixed_wrapper').
        find('div').should('have.class', 'fixed').get("#block_frame_latest_1770 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img").click()
        cy.url().should("include", "id=68")
        cy.get('.cart').click().get("#cart_checkout1").click()
        cy.url().should("include", "login")
        cy.get(":nth-child(1) > .active").click()
    })
    it("Second item", ()=>{
        cy.url().should("include", "automation")
        cy.get("#latest > .container-fluid").get("#block_frame_latest_1770 > .thumbnails > :nth-child(2)").find('div').should('have.class', 'fixed_wrapper').
        find('div').should('have.class', 'fixed').get("#block_frame_latest_1770 > .thumbnails > :nth-child(2) > .thumbnail > :nth-child(2) > img").click()
        cy.url().should("include", "id=65")
        cy.get('.cart').click().get("#cart_checkout1").click()
        cy.url().should("include", "login")
        cy.get(":nth-child(1) > .active").click()
    })
    it("Third item", ()=>{
        cy.url().should("include", "automation")
        cy.get("#latest > .container-fluid").get("#block_frame_latest_1770 > .thumbnails > :nth-child(3)").find('div').should('have.class', 'fixed_wrapper').
        find('div').should('have.class', 'fixed').get("#block_frame_latest_1770 > .thumbnails > :nth-child(3) > .thumbnail > :nth-child(1) > img").click()
        cy.url().should("include", "id=66")
        cy.get('.cart').click().get("#cart_checkout1").click()
        cy.url().should("include", "login")
        cy.get(":nth-child(1) > .active").click()
    })

})