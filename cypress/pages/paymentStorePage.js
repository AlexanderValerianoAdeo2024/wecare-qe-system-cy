export class paymentStorePage {
  weblocators = {
    submitButton:
      '[fxlayoutalign="space-between end"] > [fxlayout="row"] > .mat-stroked-button',
    invoiceNumberTextField: "input[formcontrolname='invoiceNumber']",
    paymentAmountTextField: 'input[formcontrolname="paymentAmount"]',
  };

  enterInvoiceNumber(InvoiceNumberPayInStore) {
    cy.get(this.weblocators.invoiceNumberTextField)
      .should("be.visible")
      .type(InvoiceNumberPayInStore, { force: true });
  }
  enterPaymentAmount(PaymentAmount) {
    cy.get(this.weblocators.paymentAmountTextField)
      .should("be.visible")
      .clear()
      .type(PaymentAmount);
  }
  clickSubmitButton() {
    cy.get(this.weblocators.submitButton)
      .should("be.visible")
      .click({ force: true });
  }
}
