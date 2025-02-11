export class awaitingCustomerPickupProductPage {
  weblocators = {
    checkboxRecoveredProduct: ".mat-checkbox-inner-container",
    btnValidate: "button[type='submit'] span[class='mat-button-wrapper']",
  };
  selectCheckboxRecoveredProduct() {
    cy.get(this.weblocators.checkboxRecoveredProduct)
      .should("be.visible")
      .click({ force: true });
  }

  clickSubmitButton() {
    cy.get(this.weblocators.btnValidate).should("be.visible").click();
  }
}
