import { filterByGenre, filterByTitle } from "../support/e2e";

let movies; // List of Discover movies from TMDB


describe("Filtering", () => {
  before(() => {
    // Get movies from TMDB and store them locally.
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
  });
  beforeEach(() => {
    cy.visit("/");
  });

  describe.skip("By movie title", () => {
    it("only display movies with 'm' in the title", () => {
      const searchString = "m";
      const matchingMovies = filterByTitle(movies, searchString);
      cy.get("#filled-search").clear().type(searchString); // Enter m in text box
      cy.get(".MuiCardHeader-content").should(
        "have.length",
        matchingMovies.length
      );
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(matchingMovies[index].title);
      });
    });
    it("handles case when there are no matches", () => {
      const searchString = "xyxxzyyzz";
      cy.get("#filled-search").clear().type(searchString); // Enter m in text box
      cy.get(".MuiCardHeader-content").should("have.length", 0);
    });
  });

  describe.skip("By movie genre", () => {
    it("show movies with the selected genre", () => {
      const selectedGenreId = 18;
      const selectedGenreText = "Drama";
      const matchingMovies = filterByGenre(movies, selectedGenreId);
      cy.get("#genre-select").click();
      cy.get("li").contains(selectedGenreText).click();
      cy.get(".MuiCardHeader-content").should(
        "have.length",
        matchingMovies.length
      );
      cy.get(".MuiCardHeader-content").each(($card, index) => {
        cy.wrap($card).find("p").contains(matchingMovies[index].title);
      });
    });
  });

  describe.skip("Combined genre and title", () => {
    it("search for specific movie with selected genre", () => {
        const selectedGenreText = "Drama";
        const searchString = "Nowhere";

        cy.get("#filled-search").clear().type(searchString);
        cy.get("#genre-select").click();
        cy.get("li").contains(selectedGenreText).click();
        cy.get(".MuiCardHeader-content").should("have.length", 1 );
    })
    it("search for movie but it doesn't match with selected genre", () => {
        const selectedGenreText = "Comedy";
        const searchString = "Nowhere";

        cy.get("#filled-search").clear().type(searchString);
        cy.get("#genre-select").click();
        cy.get("li").contains(selectedGenreText).click();
        cy.get(".MuiCardHeader-content").should("have.length", 0 );
    })
    it("changing genre then searching again should show movie.", () => {
        const selectedGenreText = "Comedy";
        const selectedGenreText2 = "Drama";
        const searchString = "Nowhere";

        cy.get("#filled-search").clear().type(searchString);
        cy.get("#genre-select").click();
        cy.get("li").contains(selectedGenreText).click();
        cy.get(".MuiCardHeader-content").should("have.length", 0 );

        cy.get("#genre-select").click();
        cy.get("li").contains(selectedGenreText2).click();
        cy.get(".MuiCardHeader-content").should("have.length", 1 );

    })
  });
});