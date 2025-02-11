export class waitingReparationAgreementPage {
  weblocators = {
    radioButtonRequestAccepted:
      "#accept_agreement > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    textFieldAgreementReparationNumber: "#agreement_number",
    radioButtonProductSentForRepair:
      "#toRepair > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    linkModifyRepairer: ".text-bold > .info.link",
    buttonValidate: '[fxlayoutalign="end center"] > .mat-focus-indicator',
  };

  selectRequestAccepted() {
    cy.get(this.weblocators.radioButtonRequestAccepted)
      .should("be.visible")
      .click({ force: true });
  }
  enterAgreementReparationNumber(AgreementReparationNumber) {
    cy.get(this.weblocators.textFieldAgreementReparationNumber)
      .should("be.visible")
      .clear()
      .type(AgreementReparationNumber);
  }
  selectProductSentForRepair() {
    cy.get(this.weblocators.radioButtonProductSentForRepair)
      .should("be.visible")
      .click({ force: true });
  }
  verifyLinkModifyRepairerEnable(ModifyRepairer) {
    cy.contains(this.weblocators.linkModifyRepairer, ModifyRepairer);
  }
  clickValidateButton() {
    cy.get(this.weblocators.buttonValidate).should("be.visible").click();
  }
}
