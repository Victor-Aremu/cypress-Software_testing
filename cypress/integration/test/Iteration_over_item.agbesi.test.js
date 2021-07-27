/// <reference types = "cypress" />

describe("Apparel & Accessories", () => {
  it("T-Shirt", () => {
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(2) > a").click();
    cy.get("li:nth-of-type(2) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Jersey Cotton Striped Polo Shirt")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(2) > a").click();
    cy.get("li:nth-of-type(2) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Casual 3/4 Sleeve Baseball T-Shirt")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(2) > a").click();
    cy.get("li:nth-of-type(2) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if (
        $el.text().includes("Fruit of the Loom T-Shirts 5 Pack - Super Premium")
      ) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
  });
});

describe("Make Up", () => {
  it("Cheeks", () => {
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(1) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Skinsheen Bronzer Stick")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(1) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Tropiques Minerale Loose Bronzer")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(3) > a").click();
    cy.get("li:nth-of-type(1) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("BeneFit Girl Meets Pearl")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
  });
});

describe("SkinCare", () => {
  it("Gift Ideas & Sets", () => {
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(4) > a").click();
    cy.get("li:nth-of-type(3) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if (
        $el.text().includes("Night Care Crema Nera Obsidian Mineral Complex")
      ) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(4) > a").click();
    cy.get("li:nth-of-type(3) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Skin Minerals For Men Cleansing Cream")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(4) > a").click();
    cy.get("li:nth-of-type(3) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if (
        $el
          .text()
          .includes("Lancome Hypnose Doll Lashes Mascara 4-Piece Gift Set")
      ) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
  });
});

describe("Fragrance", () => {
  it("Men", () => {
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(5) > a").click();
    cy.get("li:nth-of-type(1) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("ck one shock for him Deodorant")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(5) > a").click();
    cy.get("li:nth-of-type(1) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Pour Homme Eau de Toilette")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(5) > a").click();
    cy.get("li:nth-of-type(1) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Acqua Di Gio Pour Homme")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
  });
});

describe("Men", () => {
  it("Men", () => {
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(6) > a").click();
    cy.get("li:nth-of-type(2) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Armani Code after shave balm")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(6) > a").click();
    cy.get("li:nth-of-type(2) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Euphoria Men Intense Eau De Toilette Spray")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(6) > a").click();
    cy.get("li:nth-of-type(2) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("MAN Eau de Toilette Spray")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
  });
});

describe("Hair Care", () => {
  it("Men", () => {
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(7) > a").click();
    cy.get("li:nth-of-type(1) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Highlighting Expressions")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(7) > a").click();
    cy.get("li:nth-of-type(1) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Pantene Pro-V Conditioner, Classic Care")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(7) > a").click();
    cy.get("li:nth-of-type(1) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Brunette expressions Conditioner")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
  });
});

describe.only("Books", () => {
  it("Men", () => {
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(8) > a").click();
    cy.get("li:nth-of-type(2) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Paper Towns by John Green")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(8) > a").click();
    cy.get("li:nth-of-type(2) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if (
        $el
          .text()
          .includes(
            "The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life"
          )
      ) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
    cy.visit("https://automationteststore.com/");
    cy.url().should("include", "automation");
    cy.get(".subnav > ul > li:nth-of-type(8) > a").click();
    cy.get("li:nth-of-type(2) > .align_center.mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Allegiant by Veronica Roth")) {
        cy.wrap($el).click();
        cy.get(".cart").click();
      }
    });
  });
});
