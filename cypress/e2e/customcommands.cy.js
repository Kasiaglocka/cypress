/// <reference types="cypress" />

describe("Custom Commands", () => {
    it("Logowanie do strony automationpractice.pl", () => {
        cy.login("test@test.pl", "12345678");
    })
})