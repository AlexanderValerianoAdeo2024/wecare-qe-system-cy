export class parcelToSendPage {
  weblocators = {
    submitButton: '[fxlayoutalign="end"] > .mat-focus-indicator',
  };

  clickSubmitButton() {
    cy.get(this.weblocators.submitButton).should("be.visible").click();
  }
}
