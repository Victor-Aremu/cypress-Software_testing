/// <reference types ="cypress"/>


describe("Testing Contact Us Page", () => {
    beforeEach(() => {
        cy.viewport(1366, 768);
        cy.visit("https://automationteststore.com/");
    });

    it("check page url", () => {
        cy.url().should("include", "https://automationteststore.com");
        cy.contains("Home");
        cy.contains("Automation Test Store");
    });
    it("should be able to scroll down and find Contact us", () => {
        cy.url().should("include", "https://automationteststore.com").wait(2000);
        cy.scrollTo("bottom");
        cy.get(".info_links_footer > :nth-child(5) > a")
            .click()
            .then((textInfo) => {
                cy.log(textInfo.text());
            });
        cy.url().should(
            "include",
            "https://automationteststore.com/index.php?rt=content/contact"
        );
        cy.contains("Contact Us");
    });

    it("should contain correct information on the Contact Us Page", () => {
        cy.get(".info_links_footer > :nth-child(5) > a")
            .click()
            .then((textInfo) => {
                cy.log(textInfo.text());
            });
        cy.url().should(
            "include",
            "https://automationteststore.com/index.php?rt=content/contact"
        );
        cy.get(".maintext").then(function (str) {
            cy.log(str.text());
        });
        cy.get(".heading3").then(function (str) {
            cy.log(str.text());
        });
    });

    it("should be able to fill form", () => {
        cy.get(".info_links_footer > :nth-child(5) > a")
            .click()
            .then((textInfo) => {
                cy.log(textInfo.text());
            });
        cy.get("form#ContactUsFrm")
            .children()
            .should("have.length", 3)
            .then((children) => {
                cy.log(children);
                // that is the (title), the (input fields) and the (submit, reset) fields
            });
        cy.get(".form-horizontal.form_fields > div:nth-of-type(1)")
            .contains("First name:")
            .get("input#ContactUsFrm_first_name")
            .type("Victor Aremu").then((fullName) => {
                cy.log(fullName.val())
                cy.log(fullName.val().length)
                expect(fullName.val().length).to.be.within(3, 32)
                expect(fullName.val()).to.be.a('string')
            });
        cy.get(".form-horizontal.form_fields > div:nth-of-type(2)")
            .contains("Email:")
            .get("input#ContactUsFrm_email")
            .type("victor.aremu@amailitech.org").then((mail) => {
                cy.log(mail.val())
            });
        cy.get(".form-horizontal.form_fields > div:nth-of-type(3)")
            .contains("Enquiry:")
            .get("textarea#ContactUsFrm_enquiry")
            .type("i want to find out if this form is robust.").then((question) => {
                cy.log(question.val())
                cy.log(question.val().length)
            });
        cy.get("button[title='Submit']").click()
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=content/contact/success')
    });

    it("empty fields", () => {
        cy.get(".info_links_footer > :nth-child(5) > a")
            .click()
            .then((textInfo) => {
                cy.log(textInfo.text());
            });
        cy.get("form#ContactUsFrm")
            .children()
            .should("have.length", 3)
            .then((children) => {
                cy.log(children);
                // that is the (title), the (input fields) and the (submit, reset) fields
            });
        cy.get("input#ContactUsFrm_first_name").then((empty)=>{
            cy.log(empty.val())
            expect(empty).to.be.empty
        })
        
        cy.get("input#ContactUsFrm_email").then((empty)=>{
            cy.log(empty.val())
            expect(empty).to.be.empty
        })
        cy.get("textarea#ContactUsFrm_enquiry").then((empty)=>{
            cy.log(empty.val())
            expect(empty).to.be.empty
        })
        cy.get("button[title='Submit']").click()
        cy.contains("First name: is required field!")
        cy.contains("Email: is required field!")
        cy.contains("Enquiry: is required field!")
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=content/contact&form_id=2')
    })
});
// Victor.Aremu