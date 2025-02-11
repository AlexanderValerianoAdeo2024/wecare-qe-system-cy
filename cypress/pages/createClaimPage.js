export class createClaimPage {
  weblocators = {
    searchInvoices:
      ".customer-invoices-btn > .mat-focus-indicator > .mat-button-wrapper",
    customerIdentifier: "input.mat-input-element#mat-input-52",
    checkQuantity: "[fxlayout='row'] > :nth-child(1) > .mat-icon",
    firstRowTableItems:
      "#mat-radio-4 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    searchWithInvoice: "#create_folder_invoice",
    legalFormDropdown:
      "#create_folder_legalForm > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow",
    optionAssociation:
      "#create_folder_legalForm_ASSOCIATION > .mat-option-text > span",
    invoiceNumber: "#invoice_number",
    invoiceCreationDate: "#invoice_creationDate",
    siteCode: "#site_code",
    productReference: "input[formcontrolname='productCode']",
    customerReferenceFR: "input[data-placeholder='Identifiant client']",
    customerReferenceEN: "input[data-placeholder='Customer identifier']",
    firstNameFR: "[data-placeholder='Prénom']",
    lastNameFR: "input[data-placeholder='Nom']",
    firstNameEN: "[data-placeholder='First name']",
    lastNameEN: "input[data-placeholder='Last Name']",
    btnSubmitClaim: "div[class='mt-12'] span[class='mat-button-wrapper']",
    productTitle: ".product-title.text-bold",
    productRepairHistoryPopin: "#mat-dialog-0",
    btnDeclareNewReparation: "#declareNewReparation",
    productState: "#productState > .mat-select-trigger > .mat-select-value",
    submitClaimButton:
      '[_ngcontent-wgh-c572=""][fxlayoutalign="end center"] > #create_folder_submitButton',
    civilityField:
      "mat-select>.mat-select-trigger>.mat-select-value>.mat-select-placeholder",
    optionMr: ".mat-option-text>span",
  };

  searchInvoicesByCustomerId() {
    cy.contains(
      this.weblocators.searchInvoices,
      "Rechercher les factures"
    ).click();
  }
  enterCustomerIdentifier(CustomerId) {
    cy.get(this.weblocators.customerReferenceFR)
      .should("be.visible")
      .clear({ force: true })
      .type(CustomerId + "{enter}", { force: true });
  }
  validateItemQuantity() {
    cy.get(this.weblocators.checkQuantity).click();
  }
  selectFirstProductReferenceInTable() {
    cy.get(this.weblocators.firstRowTableItems).click({ force: true });
  }
  searchWithInvoice(Invoice) {
    cy.get(this.weblocators.searchWithInvoice)
      .should("be.visible")
      .clear({ force: true })
      .type(Invoice + "{enter}", { force: true });
  }
  enterInvoiceNumber(InvoiceId) {
    cy.get(this.weblocators.invoiceNumber)
      .should("be.visible")
      .clear({ force: true })
      .type(InvoiceId, { force: true });
  }
  enterInvoiceCreationDate(creationDate) {
    cy.get(this.weblocators.invoiceCreationDate)
      .should("be.visible")
      .clear({ force: true })
      .type(creationDate, { force: true });
  }
  enterSiteCode(site) {
    cy.get(this.weblocators.siteCode)
      .should("be.visible")
      .clear({ force: true })
      .type(site, { force: true });
    cy.contains(".mat-option-text", site).click();
  }
  enterProductReference(productRef) {
    cy.get(this.weblocators.productReference)
      .should("be.visible")
      .clear({ force: true })
      .type(productRef + "{enter}", { force: true });
  }
  enterCustomerReferenceFR(customerRef) {
    cy.get(this.weblocators.customerReferenceFR)
      .should("be.visible")
      .clear({ force: true })
      .type(customerRef + "{enter}");
  }
  enterCustomerReferenceEN(customerRef) {
    cy.get(this.weblocators.customerReferenceEN)
      .should("be.visible")
      .clear({ force: true })
      .type(customerRef + "{enter}");
  }
  enterCustomerReferencePT(customerRef) {
    cy.get(this.weblocators.customerReferencePT)
      .should("be.visible")
      .clear({ force: true })
      .type(customerRef + "{enter}");
  }
  enterCustomerLastName(CustomerLastName) {
    cy.get(this.weblocators.lastNameEN)
      .should("be.visible")
      .clear({ force: true })
      .type(CustomerLastName);
  }
  enterCustomerFirstName(CustomerFirstName) {
    cy.get(this.weblocators.firstNameEN)
      .should("be.visible")
      .clear({ force: true })
      .type(CustomerFirstName);
  }
  selectCivility() {
    cy.get(this.weblocators.civilityField)
      .should("be.visible")
      .click({ multiple: true });
    cy.contains(this.weblocators.optionMr, "Mr.").click();
  }
  selectLegalForm() {
    cy.get(this.weblocators.legalFormDropdown).should("be.visible").click();
    cy.contains(this.weblocators.optionAssociation, "ASSOCIATION").click();
  }
  clickBtnSubmitClaim() {
    cy.get(this.weblocators.btnSubmitClaim).should("be.visible").click();
  }
  verifyProductTitle(productTitle) {
    cy.get(this.weblocators.productTitle).should("contain", productTitle);
  }
  verifyCustomerName(refCustomerName) {
    cy.get(this.weblocators.firstNameFR).should("contain", refCustomerName);
  }
  verifyMandatoryFieldsArePopulatedFR() {
    cy.get(this.weblocators.firstNameFR).should("not.have.value", "");
    cy.get(this.weblocators.lastNameFR).should("not.have.value", "");
    cy.get(this.weblocators.productState).should("not.be.empty");
  }
  verifyMandatoryFieldsArePopulatedEN() {
    cy.get(this.weblocators.firstNameEN).should("not.have.value", "");
    cy.get(this.weblocators.lastNameEN).should("not.have.value", "");
    cy.get(this.weblocators.productState).should("not.be.empty");
  }
  clickBtnDeclareNewReparation() {
    cy.get(this.weblocators.btnDeclareNewReparation)
      .should("be.visible")
      .click();
  }
  verifySubmitClaimButtonDisabled() {
    cy.get(this.weblocators.submitClaimButton).should("be.disabled");
  }
  verifySubmitClaimButtonEnable() {
    cy.get(this.weblocators.submitClaimButton).should("not.be.disabled");
  }
}
