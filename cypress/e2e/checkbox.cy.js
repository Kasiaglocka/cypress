/// <reference types="cypress" />

describe("Test związany z zaznaczaniem checkboxa",() => {
    it("Kliknięcie w zakładkę Women", () => {
        cy.visit("/");
        cy.get(`a[title="Women"]`).click();
        cy.url().should("include", "id_category=3&controller=category")
    })
    
    it("Zaznaczenie checkboxa w zakładce Women", () => {
        cy.get("#layered_category_4").check();
        cy.get("#layered_category_4").should("be.checked")
        cy.get("#layered_category_8").check();
        cy.get('#ul_layered_id_attribute_group_1 input').check();
    })
})