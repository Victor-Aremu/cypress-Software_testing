///<reference types = "cypress"/>

describe("Traversal", () => {

    it("log in", () => {
        cy.viewport(1366, 768)
        cy.visit("https://www.saucedemo.com/")
        cy.get("[data-test='username']").type("standard_user");
        cy.get("[data-test='password']").type("secret_sauce");
        cy.get("[data-test='login-button']").click();
        cy.get("div#inventory_container > .inventory_list").children().then(($length) => {
            cy.log($length)
            cy.log($length.eq(0).text())

        })
        cy.get("div#inventory_container > .inventory_list").children().each(($length, index) => {
            cy.log($length)
            cy.log($length.text())

        })
        cy.get("div#inventory_container > .inventory_list").parent().should("have.class", "inventory_container")
        cy.get("div#inventory_container > .inventory_list").children().first().should("have.class","inventory_item").next('div')
    })
})

describe.only("Traversal Part 2", ()=>{
        it("visit tables",()=>{
            cy.visit("http://webdriveruniversity.com/Data-Table/index.html")

        })
        it("select table",()=>{
            let sum = 0;
            cy.get(".thumbnail td")
            cy.get(".thumbnail td").each(($item, index, $list)=>{
                let num = parseInt($item.text())
                if(Number(num)){
                    sum += num
                }                // cy.log($item.text())
            }).then(()=>{
                cy.log(sum)
            })
        })
})