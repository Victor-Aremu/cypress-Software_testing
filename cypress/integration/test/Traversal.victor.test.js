/// <reference types="Cypress" />
describe("Traversing DOM elements in Cypress", () => {
    before(() => {
        cy.log("Testing Started")
        cy.wait(2000)
    })
    beforeEach(() => {
        cy.log("Started a test Case")
        cy.visit("https://automationteststore.com/");
    });
    afterEach(() => {
        cy.log("Ended a Test Case")
        cy.wait(4000)

    });
    after(() => {
        cy.wait(2000)
        cy.log("Testing Completed")
        cy.visit("https://automationteststore.com/");
    })

    it("Using Parent and Children to add item to cart", () => {
        cy.url().should("eq", "https://automationteststore.com/")
        cy.get(".subnav > ul > li:nth-of-type(6) > a").click()
        cy.get(".row.thumbnails > li:nth-of-type(1)").parent().children()
            .each(($child) => {
                cy.log($child);
                cy.log($child.text())
                if ($child.text().includes("Fragrance Sets")) {
                    cy.log("seen")
                    cy.wrap($child).click()
                }
            });
        cy.get(".grid.list-inline.row.thumbnails").children()
            .each(($ele) => {
                cy.log($ele.text())
                if ($ele.text().includes("42")) {
                    cy.wrap($ele).click()
                }
            })
        cy.get(".cart").click()
    })

    it("Using Find to locate Login or SignUp", () => {
        cy.get("div[role='navigation'] > .container-fluid").find('div').should("have.class", "navbar-right")
            .children().find('ul').should('have.class', 'main_menu').each(($item) => {
                cy.log($item.text())
                if ($item.text().includes("Login or register")) {
                    cy.log("found")
                    cy.wrap($item).click()
                } else {
                    cy.log("not found")
                }
            })
        cy.url().should("eq", "https://automationteststore.com/index.php?rt=account/login")
    })

    it("Using First, last, sibling, next, prev and children to locate Contact Us button", () => {


        cy.get(".container-fixed").children().last().children().first().children()
            .first().next().children().first().next()
            .children().first().children()
            .find('ul').should("have.class", "info_links_footer")
            .children().last().prev().prev().click()

    })
});