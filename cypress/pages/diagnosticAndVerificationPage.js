export class diagnosticAndVerificationPage {
  weblocators = {
    submitButton: "#submitButton > .mat-button-wrapper",
    radioBtnInternalReparation:
      "#DO_THE_REPAIR > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
  };
  selectInternalReparation() {
    cy.get(this.weblocators.radioBtnInternalReparation)
      .should("be.visible")
      .click({ force: true });
  }
  clickSubmitButton() {
    cy.get(this.weblocators.submitButton).should("be.visible").click();
  }
}
