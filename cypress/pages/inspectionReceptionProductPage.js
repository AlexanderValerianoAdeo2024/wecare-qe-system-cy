export class inspectionReceptionProductPage {
  weblocators = {
    radioBtnProductRepaired:
      "#OK > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    btnValidate: "button[type='submit'] span[class='mat-button-wrapper']",
  };
  selectRadioBtnProductRepaired() {
    cy.get(this.weblocators.radioBtnProductRepaired)
      .should("be.visible")
      .click({ force: true });
  }

  clickSubmitButton() {
    cy.get(this.weblocators.btnValidate).should("be.visible").click();
  }
}
