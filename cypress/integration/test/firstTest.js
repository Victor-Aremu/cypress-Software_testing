/// <reference types="cypress" />

describe.only("testGoogle", () => {

    it("goo", () => {
        cy.visit("https://www.google.com");
        cy.get(".SDkEP").type("ReproMJ{enter}");
        cy.contains("ReproMJ - Youtube");
    })
})

describe("Working with Api", () => {

    Cypress.config('baseUrl', 'https://reqres.in')
    it("get request", () => {
        cy.request('GET', '/api/user?page=2').then((response) => {
            expect(response.body).to.have.property('page');
        })
    })

    it('post request', () => {
        const item = {
            "name": "Victor",
            "job": "Director"
        }
        cy.request('POST', '/api/users', item).its('body').should('include', {
            'name': 'Victor'
        });
    })
})