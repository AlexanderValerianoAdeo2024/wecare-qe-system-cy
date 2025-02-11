export class invoicesPage {
  weblocators = {
    firstArticleByYear: "tr:nth-child(2) > td:nth-child(6)",
    optionYear: "li[data-value='2024']",
    purchaseYearDropdown: "#PURCHASE_YEAR > .e-input-group",
  };
  selectPurchaseYear(Year) {
    cy.get(this.weblocators.purchaseYearDropdown).should("be.visible").click();
    cy.get(this.weblocators.optionYear)
      .should("have.text", Year)
      .click({ force: true });
  }
  selectFirstArticleFromYear() {
    cy.get(this.weblocators.firstArticleByYear).should("be.visible").click();
  }
}
