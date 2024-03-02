/// <reference types="cypress" />

describe("Wpisywanie tekstu w wyszukiwarke", () => {
    it("Wpisywanie tekstu", () => {
        cy.visit("/");
        cy.get("#search_query_top").type("Przykładowa treść")
        cy.get("#search_query_top").should("have.value", "Przykładowa treść")
        cy.wait(3000)
        cy.get("#search_query_top").clear();
        cy.wait(3000)
        cy.get("#search_query_top").type("Przykłądowa treść{enter}")
        cy.get("p.alert").should("be.visible").and("include.text", "No results")
        cy.get("#search_query_top").should("have.class", "search_query")
        cy.get("#search_query_top").should("have.css", "margin_right", "1px")
    })
})