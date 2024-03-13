/// <reference types="cypress" />
import Base from "../pages/Base";
import Search from "../pages/Search"
import { searchPhrase } from "../fixtures/searchData.json"

describe("Wpisywanie tekstu w wyszukiwarke", () => {
    it("Wpisywanie tekstu", () => {
        Base.openHomePage();
        Search.typeSearchPhrase(searchPhrase);
        Search.searchBox.should("have.value", searchPhrase)
        cy.wait(3000)
        Search.clearSearchPhrase();
        cy.wait(3000)
        cy.get("#search_query_top").type("Przykłądowa treść{enter}")
        cy.get("p.alert").should("be.visible").and("include.text", "No results")
        cy.get("#search_query_top").should("have.class", "search_query")
        cy.get("#search_query_top").should("have.css", "margin_right", "1px")
    })
})