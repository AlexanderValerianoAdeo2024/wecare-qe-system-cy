export class modifyInterventionAddressPage {
  weblocators = {
    buttonValidateModifInterventionAddress:
      '[fxlayoutalign="end center"] > .mat-focus-indicator',
    fieldTextComment:
      "app-comment-area > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex",
  };
  AddComment(comment) {
    cy.get(this.weblocators.fieldTextComment)
      .should("be.visible")
      .type(comment);
  }
  clickButtonValidate() {
    cy.get(this.weblocators.buttonValidateModifInterventionAddress)
      .should("be.visible")
      .click();
  }
}
