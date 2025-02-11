export class diagnosisInProgressPage {
  weblocators = {
    radioBtnBreakdownConfirmed:
      "#BREAKDOWN_CONFIRMED > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    radioBtnWarrantyAccepted:
      "#WARRANTY_ACCEPTED > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    radioBtnRepairable:
      "#REPAIRABLE > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    radioBtnRepairedExternally:
      "#TO_BE_REPAIRED_EXTERNALLY > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    btnValidate: ".mt-24 > .mat-focus-indicator > .mat-button-wrapper",
  };
  selectRadioBtnBreakdownConfirmed() {
    cy.get(this.weblocators.radioBtnBreakdownConfirmed)
      .should("be.visible")
      .click({ force: true });
  }
  selectRadioBtnWarrantyAccepted() {
    cy.get(this.weblocators.radioBtnWarrantyAccepted)
      .should("be.visible")
      .click({ force: true });
  }
  selectRadioBtnRepairable() {
    cy.get(this.weblocators.radioBtnRepairable)
      .should("be.visible")
      .click({ force: true });
  }
  selectRadioBtnRepairedExternally() {
    cy.get(this.weblocators.radioBtnRepairedExternally)
      .should("be.visible")
      .click({ force: true });
  }
  clickSubmitButton() {
    cy.get(this.weblocators.btnValidate).should("be.visible").click();
  }
}
