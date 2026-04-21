describe("Index", () => {
    it("Shows index page", () => {
        cy.visit("/")
        cy.get("h1").should("exist")
    })
})
describe("Index", () => {
    it("Shows index page", () => {
        cy.visit("/")
        cy.get("#canvas").should("exist")
    })
})
describe("Index", () => {
    it("Shows index page", () => {
        cy.visit("/")
        cy.get(".r").should("exist")
    })
})