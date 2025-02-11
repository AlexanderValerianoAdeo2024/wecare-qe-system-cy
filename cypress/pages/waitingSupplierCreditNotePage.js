export class waitingSupplierCreditNotePage {
  weblocators = {
    radioBtnCreditSupplierAccepted:
      "#FOLDER_CLOSED_CREDIT_SUPPLIER_ACCEPTED > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    buttonSubmit: "button[type='submit'] span[class='mat-button-wrapper']",
  };
  selectRadioButtonCreditNoteReceived() {
    cy.get(this.weblocators.radioBtnCreditSupplierAccepted)
      .should("be.visible")
      .click({ force: true });
  }
  verifyButtonSubmitIsVisibleAndNotDisableAndSubmit() {
    cy.get(this.weblocators.buttonSubmit)
      .should("be.visible")
      .should("not.be.disabled")
      .click({ force: true });
  }
}
