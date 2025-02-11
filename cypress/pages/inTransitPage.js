export class inTransitPage {
  weblocators = {
    checkboxPackageDelivered:
      "div .mat-checkbox-inner-container #shipment_delivered-input",
    submitButton: "button[type='submit']",
  };
  selectCheckboxPackageDelivered() {
    cy.get(this.weblocators.checkboxPackageDelivered)
      .should("be.visible")
      .click({ force: true });
  }
  clickSubmitButton() {
    cy.get(this.weblocators.submitButton).should("be.visible").click();
  }
}
