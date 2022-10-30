/// <reference types="cypress" />

describe("testing project", () => {
  beforeEach(() => {
      cy.visit("/");
      cy.fixture("example")
  });
  it("", () => {});
});
