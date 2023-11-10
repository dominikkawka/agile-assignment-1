// Parent commands

Cypress.Commands.add("goToPage", (pageName, directory) => {
   cy.get("button").contains(pageName).click();
   cy.url().should("include", directory);
})

Cypress.Commands.add("getByTestId", (id) => {
   cy.get(`[data-testid=${id}]`)
})

Cypress.Commands.add("btnClick", (text) => {
   cy.get("button").contains(text).click();
})
//These commands exist so that reviews.cy.js is easier to read.
Cypress.Commands.add("missingAuthorText", () => {
   cy.get(".MuiTypography-root").contains("Name is required").scrollIntoView()
   cy.get(".MuiTypography-root").contains("Review cannot be empty").should('not.exist')
   cy.get(".MuiTypography-root").contains("Review is too short").should('not.exist')
})

Cypress.Commands.add("missingReviewText", () => {
   cy.get(".MuiTypography-root").contains("Review cannot be empty").scrollIntoView()
   cy.get(".MuiTypography-root").contains("Name is required").should('not.exist')
   cy.get(".MuiTypography-root").contains("Review is too short").should('not.exist')
})

Cypress.Commands.add("shortReviewText", () => {
   cy.get(".MuiTypography-root").contains("Review is too short").scrollIntoView()
   cy.get(".MuiTypography-root").contains("Review cannot be empty").should('not.exist')
   cy.get(".MuiTypography-root").contains("Name is required").should('not.exist')
})

Cypress.Commands.add("ratingsDropdown", (score) => {
   cy.get(".MuiSelect-select").click()
   cy.get(".MuiButtonBase-root").contains(score).click()
   cy.get(".MuiSelect-select").contains(score)
})

// Child commands

// Dual commands

// Overwrite commands