export class infosPage {
  weblocators = {
    codeCreateClaim:
      "div[class='ng-star-inserted'] div span[class='item-info']",
    code: "div[class='ng-star-inserted'] div span[class='info']",
    productLabelCreateClaim: ".product-title",
    productLabel: ".mat-subheading-2",
    invoice: '.w-100-p.mt-8 > [fxlayout="row"] > div > :nth-child(2)',
    supplierCreateClaim: ".mt-8 > div.ng-star-inserted > .item-info",
    purchaseDate: ".mr-28",
    supplier: ".info > .ng-star-inserted",
    updateSupplier:
      "div[class='mat-tooltip-trigger cursor-pointer ng-star-inserted'] mat-icon[role='img']",
    updateQuantity: ".mt-8 > .cursor-pointer > .mat-icon",
    serialNumber:
      ".ng-untouched > .ng-star-inserted > .cursor-pointer > .mat-icon",
    customerId: "app-customer-info-card.ng-star-inserted > :nth-child(2) > div",
    customerLastName:
      "app-customer-info-card.ng-star-inserted > :nth-child(3) > div",
    customerTelephone: ":nth-child(4) > div.ng-star-inserted",
    customerEmail:
      "app-customer-info-card.ng-star-inserted > :nth-child(5) > div",
    displacementPayer: ":nth-child(3) > .mt-12 > :nth-child(1) > :nth-child(2)",
    sparePartsPayer: ".mt-12 > :nth-child(2) > :nth-child(2)",
    manpowerPayer: ".mt-12 > :nth-child(3) > :nth-child(2)",
    symptom: '[fxlayoutalign="space-around center"] > .font-weight-600',
    infosSection: "#folderInfoSection > .text-center > .mat-icon",
  };
  clickInfosSection() {
    cy.get(this.weblocators.infosSection)
      .should("be.visible")
      .click({ force: true });
  }
  verifyProductDetailsInCreateClaim(ProductReference, ProductLabel, Supplier) {
    cy.get(this.weblocators.codeCreateClaim).contains(ProductReference);
    cy.get(this.weblocators.productLabelCreateClaim).contains(ProductLabel);
    cy.get(this.weblocators.supplierCreateClaim).contains(Supplier);
    cy.get(this.weblocators.updateQuantity).should("be.visible");
  }
  verifyProductDetails(
    ProductReference,
    ProductLabel,
    InvoiceId,
    InvoiceCreationDate,
    Supplier
  ) {
    cy.get(this.weblocators.code).contains(ProductReference);
    cy.get(this.weblocators.productLabel).contains(ProductLabel);
    cy.get(this.weblocators.invoice).contains(InvoiceId);
    cy.get(this.weblocators.purchaseDate).contains(InvoiceCreationDate);
    cy.get(this.weblocators.supplier).contains(Supplier);
    // cy.get(this.weblocators.updateSupplier).should("be.visible");
    cy.get(this.weblocators.updateQuantity).should("be.visible");
    cy.get(this.weblocators.serialNumber).should("be.visible");
  }
  verifySupplierUpdateIconIsNotVisible() {
    cy.wait(1000);
    cy.contains(this.weblocators.updateSupplier, "edit").should("not.exist");
  }
  verifyQuantityUpdateIconIsNotVisible() {
    cy.wait(1000);
    cy.contains(this.weblocators.updateQuantity, "edit").should("not.exist");
  }
  verifyCustomerDetails(
    CustomerId,
    CustomerLastName,
    CustomerTelephone,
    CustomerEmail
  ) {
    cy.contains(this.weblocators.customerId, CustomerId);
    cy.contains(this.weblocators.customerLastName, CustomerLastName);
    cy.contains(this.weblocators.customerTelephone, CustomerTelephone);
    cy.contains(this.weblocators.customerEmail, CustomerEmail);
  }
  verifyPay() {
    cy.get(this.weblocators.displacementPayer).should("be.visible");
    cy.get(this.weblocators.sparePartsPayer).should("be.visible");
    cy.get(this.weblocators.manpowerPayer).should("be.visible");
  }
  verifySymptomDisplay(Symptom) {
    cy.get(this.weblocators.symptom).contains(Symptom);
  }
}
