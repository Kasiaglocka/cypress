/// <reference types="cypress" />

describe("Test związany z zaznaczaniem checkboxa",() => {
    it("Kliknięcie w zakładkę Women", () => {
        cy.visit("/");
        cy.get(`a[title="Women"]`).click();
    })
    
    it("Zaznaczenie checkboxa w zakładce Women", () => {
        cy.get("#layered_category_4").check();
        cy.get("#layered_category_8").check();
        cy.get('#ul_layered_id_attribute_group_1 input').check();
    })
})