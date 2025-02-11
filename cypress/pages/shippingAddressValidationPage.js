export class shippingAddressValidationPage {
  weblocators = {
    fieldAddress: "#address_address",
    fieldZipCode: "#address_zipCode",
    buttonValidate: "[fxlayoutalign='end center'] > .mat-focus-indicator",
  };
  enterAdress(Address) {
    cy.get(this.weblocators.fieldAddress).should("be.visible").type(Address);
  }
  enterZipCode(ZipCode) {
    cy.get(this.weblocators.fieldZipCode).should("be.visible").type(ZipCode);
  }
  clickButtonValidate() {
    cy.get(this.weblocators.buttonValidate)
      .should("be.visible")
      .click({ force: true });
  }
}
