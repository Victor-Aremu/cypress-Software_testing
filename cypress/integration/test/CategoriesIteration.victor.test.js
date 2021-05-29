/// <reference types = "cypress" />

describe("Apparel & Accessories", () => {
    beforeEach(() => {
        cy.viewport(1366, 768);
        cy.visit("https://automationteststore.com/");
    });
    it("Iterating over shoes section", () => {
        cy.url().should("include", "https://automationteststore.com");
        cy.get(".subnav > ul > li:nth-of-type(2) > a").then((ele) => {
            ele.find();
            cy.log(ele.text());
        });
        cy.get(".subnav > ul > li:nth-of-type(2) > a")
            .click()
        cy.url().should(
            "include",
            "https://automationteststore.com/index.php?rt=product/category&path=68"
        );
        cy.get(
            "li:nth-of-type(1) > .align_center.mt10 > a"
        ).click();

        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })
    });

    it("Adding specific product to basket from shoe section", () => {
        cy.url().should("include", "https://automationteststore.com");
        cy.get(".subnav > ul > li:nth-of-type(2) > a").then((ele) => {
            ele.find();
            cy.log(ele.text());
        });
        cy.get(".subnav > ul > li:nth-of-type(2) > a")
            .click()
        cy.url().should(
            "include",
            "https://automationteststore.com/index.php?rt=product/category&path=68"
        );
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=116")
                cy.get("label:nth-of-type(3) > input[name='option[344][]']").click()
                cy.get(".cart").click()
                cy.go('back');
                cy.go('back');
            }

        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Womens high heel point toe stiletto sandals ankle strap court shoes")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=118")
                cy.get("label:nth-of-type(4) > input[name='option[347][]']").click()
                cy.get(".cart").click()
                cy.go('back');
                cy.go('back');
            }

        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Ruby Shoo Womens Jada T-Bar")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=117")
                cy.get(".cart").click()
                cy.go('back');
                cy.get('ul#main_menu_top  .nobackground.top > .menu_text').click();
            }
        })

    })
});

describe("Make Up", () => {
    beforeEach(() => {
        cy.viewport(1366, 768);
        cy.visit("https://automationteststore.com/");
    });
    it("Iterating the Lips section", () => {
        cy.contains('Makeup')
        cy.get(".subnav > ul > li:nth-of-type(3) > a").click()
        cy.url().should(
            "include",
            "https://automationteststore.com/index.php?rt=product/category&path=36"
        );
        cy.get(".mt10.align_center>a").each(($ele, index, $list) => {
            if ($ele.text() === 'Lips') {
                cy.log($ele.text())
                cy.wrap($ele).click();
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Viva Glam Lipstick")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=59")
                cy.get(".cart").click()
                cy.go('back');
                cy.go('back');
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("LE ROUGE ABSOLU Reshaping & Replenishing LipColour SPF 15")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=55")
                cy.get(".cart").click()
                cy.go('back');
                cy.go('back');
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Lancome Hypnose Doll Lashes Mascara 4-Piece Gift Set")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=108")
                cy.get(".cart").click()
                cy.go('back');
                cy.get('ul#main_menu_top  .nobackground.top > .menu_text').click();
            }
        })
    })
})

describe("Skincare", () => {
    beforeEach(() => {
        cy.viewport(1366, 768);
        cy.visit("https://automationteststore.com/");
    });
    it("Iterating the Face section", () => {
        cy.contains('Skincare')
        cy.get(".subnav > ul > li:nth-of-type(4) > a").click()
        cy.url().should(
            "include",
            "https://automationteststore.com/index.php?rt=product/category&path=43"
        );
        cy.get(".mt10.align_center>a").each(($ele, index, $list) => {
            if ($ele.text() === 'Face') {
                cy.log($ele.text())
                cy.wrap($ele).click();
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Jasmin Noir Body Lotion 6.8 fl oz")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=91")
                cy.get(".cart").click()
                cy.go('back');
                cy.go('back');
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Lancome Visionnaire Advanced Skin Corrector")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=109")
                cy.get(".cart").click()
                cy.go('back');
                cy.go('back');
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Body Cream by Bulgari")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=92")
                cy.get(".cart").click()
                cy.go('back');
                cy.get('ul#main_menu_top  .nobackground.top > .menu_text').click();
            }
        })
    })
})

describe("Fragrance", () => {
    beforeEach(() => {
        cy.viewport(1366, 768);
        cy.visit("https://automationteststore.com/");
    });
    it("Iterating the Women section", () => {
        cy.contains('Fragrance')
        cy.get(".subnav > ul > li:nth-of-type(5) > a").click()
        cy.url().should(
            "include",
            "https://automationteststore.com/index.php?rt=product/category&path=49"
        );
        cy.get(".mt10.align_center>a").each(($ele, index, $list) => {
            if ($ele.text() === 'Women') {
                cy.log($ele.text())
                cy.wrap($ele).click();
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Beauty Eau de Parfum")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=64")
                cy.get(".cart").click()
                cy.go('back');
                cy.go('back');
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("ck One Gift Set")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=79")
                cy.get(".cart").click()
                cy.go('back');
                cy.go('back');
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Armani Code Pour Femme")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=84")
                cy.get(".cart").click()
                cy.go('back');
                cy.get('ul#main_menu_top  .nobackground.top > .menu_text').click();
            }
        })
    })
})

describe("Men", () => {
    beforeEach(() => {
        cy.viewport(1366, 768);
        cy.visit("https://automationteststore.com/");
    });
    it("Iterating the Skincare section", () => {
        cy.contains('Men')
        cy.get(".subnav > ul > li:nth-of-type(6) > a").click()
        cy.url().should(
            "include",
            "https://automationteststore.com/index.php?rt=product/category&path=58"
        );
        cy.get(".mt10.align_center>a").each(($ele, index, $list) => {
            if ($ele.text() === 'Skincare') {
                cy.log($ele.text())
                cy.wrap($ele).click();
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Eye master")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=96")
                cy.get(".cart").click()
                cy.go('back');
                cy.go('back');
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Men+Care Active Clean Shower Tool")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=77")
                cy.get(".cart").click()
                cy.go('back');
                cy.go('back');
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Skin Minerals For Men Cleansing Cream")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=95")
                cy.get(".cart").click()
                cy.go('back');
                cy.get('ul#main_menu_top  .nobackground.top > .menu_text').click();
            }
        })
    })
})

describe("Hair Care", () => {
    beforeEach(() => {
        cy.viewport(1366, 768);
        cy.visit("https://automationteststore.com/");
    });
    it("Iterating the Conditioner section", () => {
        cy.contains('Hair Care')
        cy.get(".subnav > ul > li:nth-of-type(7) > a").click()
        cy.url().should(
            "include",
            "https://automationteststore.com/index.php?rt=product/category&path=52"
        );
        cy.get(".mt10.align_center>a").each(($ele, index, $list) => {
            if ($ele.text() === 'Conditioner') {
                cy.log($ele.text())
                cy.wrap($ele).click();
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Seaweed Conditioner")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=69")
                cy.get(".cart").click()
                cy.go('back');
                cy.go('back');
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Pro-V Color Hair Solutions Color Preserve Shine Conditioner")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=101")
                cy.get(".cart").click()
                cy.go('back');
                cy.go('back');
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Highlighting Expressions")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=73")
                cy.get(".cart").click()
                cy.go('back');
                cy.get('ul#main_menu_top  .nobackground.top > .menu_text').click();
            }
        })
    })
})

describe("Books", () => {
    beforeEach(() => {
        cy.viewport(1366, 768);
        cy.visit("https://automationteststore.com/");
    });
    it("Iterating the Paperback section", () => {
        cy.contains('Books')
        cy.get(".subnav > ul > li:nth-of-type(8) > a").click()
        cy.url().should(
            "include",
            "https://automationteststore.com/index.php?rt=product/category&path=65"
        );
        cy.get(".mt10.align_center>a").each(($ele, index, $list) => {
            if ($ele.text() === 'Paperback') {
                cy.log($ele.text())
                cy.wrap($ele).click();
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Paper Towns by John Green")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=113")
                cy.get(".cart").click()
                cy.go('back');
                cy.go('back');
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Allegiant by Veronica Roth")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=114")
                cy.get(".cart").click()
                cy.go('back');
                cy.go('back');
            }
        })
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("The Miracle Morning: The Not-So-Obvious Secret Guaranteed to Transform Your Life")) {
                cy.wrap($el).click()
                cy.url().should("include", "product_id=112")
                cy.get(".cart").click()
                cy.go('back');
                cy.get('ul#main_menu_top  .nobackground.top > .menu_text').click();
            }
        })
    })
})