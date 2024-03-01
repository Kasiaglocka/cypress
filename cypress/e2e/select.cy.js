/// <reference types="cypress" />

describe("Test związany z wybieraniem select",() => {
    it("Kliknięcie w zakładkę Women", () => {
        cy.visit("/");
        cy.get(`a[title="Women"]`).click();
    })
    it("Wybranie filtra Instock", () => {
    cy.get("#selectProductSort").select("In stock")
})
    it("Wybranie filtra Product Name: A to Z", () => {
    cy.get("#selectProductSort").select("name:asc")
})
    
    
})