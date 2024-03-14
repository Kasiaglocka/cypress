/// <reference types="cypress" />
import Base from "../pages/Base";
import Search from "../pages/Search";
import ResultPage from "../pages/ResultPage";
import { searchPhrase, notFoundProduct } from "../fixtures/searchData.json"

describe("Wpisywanie tekstu w wyszukiwarke", () => {
    it("Wpisywanie tekstu", () => {
        Base.openHomePage();
        Search.typeSearchPhrase(searchPhrase);
        Search.searchBox.should("have.value", searchPhrase)
        cy.wait(3000)
        Search.clearSearchPhrase();
        cy.wait(3000)
        Search.typeSearchPhrase(`${searchPhrase} {enter}`)
        ResultPage.should("be.visible").and("include.text", notFoundProduct)
        cy.get("#search_query_top").should("have.class", "search_query")
        cy.get("#search_query_top").should("have.css", "margin_right", "1px")
    })
})