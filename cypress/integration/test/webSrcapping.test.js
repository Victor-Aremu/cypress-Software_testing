/// <reference types= 'cypress' />

describe("get title", ()=>{
    it("visit url",()=>{
        cy.visit("https://www.monster.com/jobs/search?q=software+developer&where=ghana&page=2")
        cy.get(".results-list")
    })
})