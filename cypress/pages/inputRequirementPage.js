export class inputRequirementPage {
  weblocators = {
    addButton: "[fxlayoutalign='end end'] > .cursor-pointer",
    codeField:
      "form.ng-pristine > :nth-child(1) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex",
    addRepairRequirement:
      "[fxlayoutalign='end center'] > div > .mat-focus-indicator",
    vatValue: ".mat-row > .cdk-column-vat",
    submitButton: ".w-100-p > div > .mat-focus-indicator > .mat-button-wrapper",
    submitRequirementsButton: "#submitButton > .mat-button-wrapper",
    commentTextField:
      "#folderComment > .mat-form-field-wrapper > .mat-form-field-flex",
  };
  clickSubmitAdd() {
    cy.get(this.weblocators.addButton)
      .should("be.visible")
      .click({ force: true });
  }
  validateVAT(VAT) {
    cy.contains(this.weblocators.vatValue, VAT);
  }
  selectFirstCode() {
    cy.get(this.weblocators.codeField)
      .should("be.visible")
      .click({ force: true })
      .type("{downarrow}" + "{enter}");
  }
  addRepairRequirement() {
    cy.get(this.weblocators.addRepairRequirement)
      .should("be.visible")
      .click({ force: true });
  }
  clickSubmitButton(SubmitButton) {
    cy.contains(this.weblocators.submitButton, SubmitButton).click({
      force: true,
    });
  }
  enterCommentRepairRequirement() {
    cy.get(this.weblocators.commentTextField)
      .should("be.visible")
      .type("enterCommentRepairRequirement");
  }
  clickSubmitRequirementsButton(SubmitRequirementsButton) {
    cy.contains(
      this.weblocators.submitRequirementsButton,
      SubmitRequirementsButton
    )
    .click({ force: true });
  }
}
