/// <reference types ="cypress" />


describe("Todo",()=>{
    
    it("todo-input",()=>{
        cy.visit("https://todomvc.com/examples/react/#")
        cy.get(".new-todo").type("I want to Buy a PS5{Enter}")
        // .then((answer)=>{
        //     cy.get(answer)
        //     console.log(answer)
        // });
        cy.get(".view > label").dblclick()
        cy.get(".edit").type("{selectall}{backspace}").type("I want to buy a Car{Enter}")
        cy.get(".edit").invoke('mouseover')
        .then((answer)=>{
            cy.log(answer)
            console.log(answer)
        });
        // (cy.get("destroy").invoke("show"))
                

    })
})