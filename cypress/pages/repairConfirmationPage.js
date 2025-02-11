export class repairConfirmationPage {
  weblocators = {
    radioButtonBosch: ".mat-radio-outer-circle",
    radioButtonCordon:
      "label[for='1-input'] span[class='mat-radio-outer-circle']",
    buttonValidate: "[fxlayoutalign='end center'] > .mat-focus-indicator",
  };
  selectOptionBosch() {
    cy.get(this.weblocators.radioButtonCordon)
      .should("be.visible")
      .click({ force: true });
  }
  clickButtonValidate() {
    cy.get(this.weblocators.buttonValidate).should("be.visible").click();
  }
}
