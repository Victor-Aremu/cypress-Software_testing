/// <reference types="cypress" />

describe("ClickEvent",() =>{
    beforeEach(() => {
        cy.viewport(1366, 768)
        cy.visit('http://www.webdriveruniversity.com/Click-Buttons/index.html')
    })
    it("first test", () =>{
        cy.get("#button1").click()
        cy.contains("Well done for successfully using the click() method!")
        cy.get("#myModalClick > .modal-dialog > .modal-content > .modal-footer > .btn").click()
        
    })
    it("second test", () =>{
        cy.get("#button2").click()
        cy.contains("It’s that Easy!! Well I think it is.....")
        cy.get("#myModalJSClick > .modal-dialog > .modal-content > .modal-footer > .btn").click()
        
    })
    it("third test", () =>{
        cy.get("#button3").click()
        cy.contains("Well done! the Action Move & Click can become very useful!")
        cy.get("#myModalMoveClick > .modal-dialog > .modal-content > .modal-footer > .btn").click()
        
    })
})
// Victor.Aremu