/// <reference types = "cypress"/>

describe("Loans Module", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("http://127.0.0.1:8000");
    cy.url().should("include", "login");
    cy.get("#email").type("inventory@amalitech.org");
    cy.get("#password").type("123456789");
    cy.get(".btn-block").click();
  });

  // this test case is to access the loans module
  it("Click on Loans", () => {
    cy.url().should("include", "home");
    cy.log("Correct Url");
    cy.get(".form-row.justify-content-center.mb-2.no-gutters > a").each(
      ($el, index, $list) => {
        console.log($el);
        if ($el.text().includes("Trainee's Loans")) {
          cy.log("True, it's Present");
          cy.wrap($el).click();
        }
      }
    );
  });

  //  Correct Nav List
  it("confirm Navigation List", () => {
    cy.visit("http://127.0.0.1:8000/loans");
    cy.url().should("include", "loans");
    cy.log("Correct Url");
    cy.get("div#navbarSupportedContent > ul:nth-of-type(1)")
      .children()
      .then(($length) => {
        cy.log($length);
      });
  });

  //Nav -> Home is working fine
  it("Home Nav", () => {
    cy.visit("http://127.0.0.1:8000/loans");
    cy.get("li:nth-of-type(1) > .nav-link").each(($el, index) => {
      if ($el.text().includes("Home")) {
        cy.wrap($el).click();
      }
    });
    cy.url().should("include", "home");
  });

  // Nav -> Loan is working Fine
  it("Loan Nav", () => {
    cy.visit("http://127.0.0.1:8000/loans");
    cy.get("li:nth-of-type(2) > .nav-link").click();
    cy.url().should("include", "app");
  });

  // confirming Table Headers in Loan
  it("tHead Verification", () => {
    cy.visit("http://127.0.0.1:8000/app/loans");
    cy.get("thead > tr")
      .children()
      .first()
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("#");
      });
    cy.get("thead > tr")
      .children()
      .eq(1)
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("Amount");
      });
    cy.get("thead > tr")
      .children()
      .eq(2)
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("Date");
      });
    cy.get("thead > tr")
      .children()
      .eq(3)
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("Status");
      });
    cy.get("thead > tr")
      .children()
      .eq(4)
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("Guarantor's Form");
      });
    cy.get("thead > tr")
      .children()
      .eq(5)
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("Tenancy Agreement");
      });
    cy.get("thead > tr")
      .children()
      .eq(6)
      .invoke("text")
      .then((text) => {
        expect(text).to.equal("Details");
      });
  });
  // New Application
  it.only("new Application", () => {
    cy.visit("http://127.0.0.1:8000/app/loans");
    cy.get("div[role='group'] > a:nth-of-type(1)").click();
    cy.get("#selected_id").select("NHIS");
    cy.get("#nhis").type("76175255");
    cy.get(":nth-child(4) > .form-control").type("3000");
    cy.get("#test").type("I want a loan for house rent");
    cy.get(".text-justify").then(function (str) {
      cy.log(str.text());
      cy.get("#exampleCheck1").click();
    });
    cy.get(".btn-outline-primary").click();
    cy.contains("Success");
  });
});
