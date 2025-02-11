export class awaitingDestructionHSproductPage {
  weblocators = {
    checkBoxDestructionCompleted: ".mat-checkbox-inner-container",
    submitButton: "[fxlayoutalign='end center'] > .mat-focus-indicator",
  };
  selectCheckBoxDestructionCompletedAndSubmit() {
    cy.get(this.weblocators.checkBoxDestructionCompleted)
      .should("be.visible")
      .click();
    cy.get(this.weblocators.submitButton).should("be.visible").click();
  }
}
