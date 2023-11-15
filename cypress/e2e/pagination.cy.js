import "../support/commands";

let discover;
let discover4;

describe("Page Pagination", () => {
   before(() => {
     cy.request(
       `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
         "TMDB_KEY"
       )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
       .its("body")
       .then((response) => {
         discover = response.results;
       });

      cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
         "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=4`
      )
      .its("body")
      .then((response) => {
         discover4 = response.results;
      });
   });
   beforeEach(() => {
     cy.visit("/");
   })

   it("Switch to another page", () => {
      cy.get(".MuiCardHeader-content").each(($card, index) => {
         cy.wrap($card).find("p").contains(discover[index].title);
      });

      cy.get("[aria-label='Go to page 4']").click().scrollIntoView()
      cy.wait(100)
      cy.btnClick("Default")

      cy.get(".MuiCardHeader-content").each(($card, index) => {
         cy.wrap($card).find("p").contains(discover4[index].title);
      });
   })
})