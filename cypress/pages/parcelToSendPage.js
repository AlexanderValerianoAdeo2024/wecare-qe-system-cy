export class parcelToSendPage {
  weblocators = {
    checkboxPackageSent:
      "#parcel_sent > .mat-checkbox-layout > .mat-checkbox-inner-container",
    submitButton: '[fxlayoutalign="end"] > .mat-focus-indicator',
  };
  selectCheckboxPackageSent() {
    cy.get(this.weblocators.checkboxPackageSent).should("be.visible").click();
  }
  clickSubmitButton() {
    cy.get(this.weblocators.submitButton).should("be.visible").click();
  }
}
