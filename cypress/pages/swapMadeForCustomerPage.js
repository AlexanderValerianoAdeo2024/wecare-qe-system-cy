export class swapMadeForCustomerPage {
  weblocators = {
    refundClient:
      "#REFUND_CLIENT > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    btnValidateSwapSolution:
      '[fxlayoutalign="end center"] > .mat-focus-indicator',
  };
  selectRefund() {
    cy.get(this.weblocators.refundClient)
      .should("be.visible")
      .click({ force: true });
  }
  clickBtnValidateSwapSolution() {
    cy.get(this.weblocators.btnValidateSwapSolution).click();
  }
}
