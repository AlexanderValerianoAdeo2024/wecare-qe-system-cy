export class underRepairPage {
  weblocators = {
    radioBtnRepairedProduct:
      "#FINISHED > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    addLink: '[fxlayoutalign="end end"] > .cursor-pointer > .link-underline',
    reportTextFieldReference:
      ":nth-child(2) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex",
    reportTextFieldLabel:
      '[style="margin-right: 8px; flex: 1 1 100%; box-sizing: border-box; max-width: 50%;"] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex',
    reportTextFieldPrice:
      ":nth-child(3) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex",
    reportBtnAdd:
      "button[class='mat-focus-indicator mat-stroked-button mat-button-base aster-btn_border']",
    reportBtnValidate:
      "button[class='mat-focus-indicator mat-stroked-button mat-button-base aster_btn']",
    submitBtn: ".mt-24 > .mat-focus-indicator > .mat-button-wrapper",
  };
  selectRadioBtnRepairedProduct() {
    cy.get(this.weblocators.radioBtnRepairedProduct)
      .should("be.visible")
      .click({ force: true });
  }
  selectAddLink() {
    cy.get(this.weblocators.addLink)
      .should("be.visible")
      .click({ force: true });
  }
  enterSparePartReference() {
    cy.get(this.weblocators.reportTextFieldReference)
      .should("be.visible")
      .type("Hello world");
  }
  enterSparePartLabel() {
    cy.get(this.weblocators.reportTextFieldLabel)
      .should("be.visible")
      .type("Hello world");
  }
  enterSparePartPrice() {
    cy.get(this.weblocators.reportTextFieldPrice)
      .should("be.visible")
      .type("333");
  }
  selectBtnAdd() {
    cy.get(this.weblocators.reportBtnAdd)
      .should("be.visible")
      .click({ force: true });
  }
  clickReportSubmitButton() {
    cy.get(this.weblocators.reportBtnValidate)
      .should("be.visible")
      .click({ force: true });
  }
  clickSubmitButton() {
    cy.get(this.weblocators.submitBtn).should("be.visible").click();
  }
}
