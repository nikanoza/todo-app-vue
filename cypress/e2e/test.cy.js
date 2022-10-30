/// <reference types="cypress" />

describe("testing project", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[id=new-task-status]").click();
    cy.get("[id=task-input]").type("master vue").type("{enter}");
    cy.get("[id=task-input]").type("master react").type("{enter}");
    cy.get("[id=new-task-status]").click();
    cy.get("[id=task-input]").type("master angular").type("{enter}");
  });
  it("filter tasks", () => {
    cy.get("[id=active-btn-desktop]").click();
    cy.get("[id=completed-btn-desktop]").click();
    cy.get("[id=all-btn-desktop]").click();
  });
  it("change to dark mode", () => {
    cy.get("[id=moon-icon]").click();
  });
  it("change task status", () => {
    cy.get("[id=checkbox1]").click();
  });
  it("delete task", () => {
    cy.get("[id=delete-btn-2]").click();
  });
  it("clear completed tasks", () => {
    cy.get("[id=clear]").click();
  });
});
