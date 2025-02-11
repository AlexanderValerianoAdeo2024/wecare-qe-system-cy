export class homePage {
  weblocators = {
    paginator: ".mat-paginator-range-label",
    btnCreate:
      "a[class='mat-focus-indicator py-12 px-24 mb-8 mr-8 font-weight-900 font-size-30 nav-bar-button_new_folder ml-4 mat-stroked-button mat-button-base ng-star-inserted'] mat-icon[role='img']",
    searchField:
      "#searchValue > .mat-form-field-wrapper > .mat-form-field-flex",
    searchBtn: "#searchButton",
    warrantyField: "#warranty > .mat-form-field-wrapper > .mat-form-field-flex",
    optionOW: "#mat-option-3",
    optionUW: "#mat-option-4",
    anyValue: "#mat-option-0",
    warrantyReason:
      "#warrantyReason > .mat-form-field-wrapper > .mat-form-field-flex",
    backdrop: ".cdk-overlay-backdrop",
    checkboxManufacturerWarannty: "#mat-option-15 > .mat-pseudo-checkbox",
    btnDeselectAllReasonWarranty: ".mt-12 > .mat-accent",
    checkboxWarrantyExpired: "#mat-option-6 > .mat-pseudo-checkbox",
    checkboxCustomerDefault: "#mat-option-5 > .mat-pseudo-checkbox",
    selectOperatingMode:
      "#operatingMode > .mat-form-field-wrapper > .mat-form-field-flex",
    selectOperateModeInternalRepair: "#mat-option-6 > .mat-option-text",
    selectOperateModeHomeRepair: "#mat-option-7 > .mat-option-text",
    selectOperateModeExternalRepair: "#mat-option-10 > .mat-option-text",
    selectOperateModeSpareParts: "#mat-option-11 > .mat-option-text",
    selectOperateModeSWAP: "#mat-option-12 > .mat-option-text",
    selectOperateModeAnyValue: "#mat-option-2",
    btnResetFields: "#resetButton > .mat-button-wrapper > .mat-icon",
    btnAllClaims: '[for="all"]',
    btnClosedClaims: '[for="closed"]',
    btnOpenClaims: '[for="progress"]',
    btnAddFilter:
      "#advancedSearch > .mat-focus-indicator > .mat-button-wrapper",
    checkboxSupplier: "label[for='mat-checkbox-23-input']",
    checkboxClaimCreationDate:
      "#mat-checkbox-3 > .mat-checkbox-layout > .mat-checkbox-inner-container",
    checkboxStatus:
      "#mat-checkbox-21 > .mat-checkbox-layout > .mat-checkbox-inner-container",
    checkboxSupplier2: ".p-12 > :nth-child(2)",
    filterSupplier: "[data-placeholder='Fournisseur']",
    filterClaimCreationDate: "[data-placeholder='Date de Création']",
    filterStatus:
      '[fxflex="0 1 calc(25% - 12px)"] > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex',
    rowsTable: "table[role='table']>tbody>tr",
    columnsTable: "table[role='table']>thead>tr>th",
    firstCellTableBody:
      "table[role='table']>tbody>tr:nth-child(1)>td:nth-child(1)",
    paginator: ".mat-paginator-range-label",
    iconVisibilityColumn: "button[id='visibilityColumns'] mat-icon[role='img']",
    columnNameTelephone: "#mat-checkbox-27 > .mat-checkbox-layout",
    columnNameProductCode: "#mat-checkbox-42 > .mat-checkbox-layout",
    languageButton: ".language-button > .mat-button-wrapper > span",
    englishFlagLanguage: ":nth-child(2) > span > .lang-flag",
  };
  //   openURL() {
  //     cy.visit(Cypress.env("URL"));
  //   }
  createClaim() {
    cy.get(this.weblocators.btnCreate)
      .should("be.visible")
      .click({ force: true });
  }
  searchClaimByReference(cReference) {
    cy.get(this.weblocators.searchField)
      .should("be.visible")
      .clear()
      .type(cReference);
    cy.get(this.weblocators.searchBtn).click();
    // RAF ajouter verification tableau
  }
  searchClaimByName(CustomerLastName) {
    cy.get(this.weblocators.searchField)
      .should("be.visible")
      .type(`${CustomerLastName}{enter}`);
  }
  searchClaimByTelephone(cTelephone) {
    cy.get(this.weblocators.searchField)
      .should("be.visible")
      .clear()
      .type(cTelephone);
    cy.get(this.weblocators.searchBtn).click();
    // RAF ajouter verification tableau
  }
  searchClaimByEmail(cEmail) {
    cy.get(this.weblocators.searchField)
      .should("be.visible")
      .clear()
      .type(cEmail);
    cy.get(this.weblocators.searchBtn).click();
    // RAF ajouter verification tableau
  }
  searchClaimById(cClaimId) {
    cy.get(this.weblocators.searchField)
      .should("be.visible")
      .clear()
      .type(cClaimId);
    cy.get(this.weblocators.searchBtn).click();
    // RAF ajouter verification tableau
  }
  selectOutOfWarranty() {
    cy.get(this.weblocators.warrantyField).should("be.visible").click();
    cy.get(this.weblocators.optionOW).click();
    cy.get(this.weblocators.searchBtn).click();
  }
  selectUnderWarranty() {
    cy.get(this.weblocators.warrantyField).should("be.visible").click();
    cy.get(this.weblocators.optionUW).click();
    cy.get(this.weblocators.searchBtn).click();
  }
  selectAnyValue() {
    cy.get(this.weblocators.warrantyField).should("be.visible").click();
    cy.get(this.weblocators.anyValue).click();
    cy.get(this.weblocators.searchBtn).click();
  }
  selectOneWarrantyReason() {
    cy.get(this.weblocators.warrantyReason).should("be.visible").click();
    cy.get(this.weblocators.btnDeselectAllReasonWarranty).click();
    cy.get(this.weblocators.checkboxManufacturerWarannty).click();
    cy.get(this.weblocators.backdrop).click();
    cy.get(this.weblocators.searchBtn).click();
  }
  selectSomeWarrantyReasons() {
    cy.get(this.weblocators.warrantyReason).should("be.visible").click();
    cy.get(this.weblocators.btnDeselectAllReasonWarranty).click();
    cy.get(this.weblocators.checkboxManufacturerWarannty).click();
    cy.get(this.weblocators.checkboxCustomerDefault).click();
    cy.get(this.weblocators.checkboxWarrantyExpired).click();
    cy.get(this.weblocators.backdrop).click();
    cy.get(this.weblocators.searchBtn).click();
  }
  deselectAllWarrantyReasons() {
    cy.get(this.weblocators.warrantyReason).should("be.visible").click();
    cy.get(this.weblocators.btnDeselectAllReasonWarranty).click();
    cy.get(this.weblocators.backdrop).click();
  }
  selectOperatingModeInternalRepair() {
    cy.get(this.weblocators.selectOperatingMode).click();
    cy.get(this.weblocators.selectOperateModeInternalRepair).click();
    cy.get(this.weblocators.searchBtn).click();
  }
  selectOperatingModeExternalRepair() {
    cy.get(this.weblocators.selectOperatingMode).click();
    cy.get(this.weblocators.selectOperateModeExternalRepair).click();
    cy.get(this.weblocators.searchBtn).click();
  }
  selectOperatingModeSWAP() {
    cy.get(this.weblocators.selectOperatingMode).click();
    cy.get(this.weblocators.selectOperateModeSWAP).click();
    cy.get(this.weblocators.searchBtn).click();
  }
  selectOperatingModeSpareParts() {
    cy.get(this.weblocators.selectOperatingMode).click();
    cy.get(this.weblocators.selectOperateModeSpareParts).click();
    cy.get(this.weblocators.searchBtn).click();
  }
  selectOperatingModeHomeRepair() {
    cy.get(this.weblocators.selectOperatingMode).click();
    cy.get(this.weblocators.selectOperateModeHomeRepair).click();
    cy.get(this.weblocators.searchBtn).click();
  }
  selectOperatingModeAnyValue() {
    cy.get(this.weblocators.selectOperatingMode).click();
    cy.get(this.weblocators.selectOperateModeAnyValue).click();
    cy.get(this.weblocators.searchBtn).click();
  }
  resetFields() {
    cy.get(this.weblocators.btnResetFields).click();
  }
  selectAllClaims() {
    cy.get(this.weblocators.btnAllClaims).click();
  }
  selectClosedClaims() {
    cy.get(this.weblocators.btnClosedClaims).click();
  }
  selectOpenClaims() {
    cy.get(this.weblocators.btnOpenClaims).click();
  }
  AddFilterSupplier(FilterSupplier) {
    cy.get(this.weblocators.btnAddFilter).should("be.visible").click();
    cy.get(this.weblocators.checkboxSupplier)
      .scrollIntoView({ duration: 500 })
      .should("be.visible")
      .click();
    cy.get(this.weblocators.filterSupplier)
      .should("be.visible")
      .type(FilterSupplier);
    cy.get(this.weblocators.searchBtn).click();
  }
  AddFilterStatus(FilterStatus) {
    cy.get(this.weblocators.btnAddFilter).should("be.visible").click();
    cy.get(this.weblocators.checkboxStatus)
      .scrollIntoView({ duration: 500 })
      .should("be.visible")
      .click();
    cy.get(this.weblocators.filterStatus)
      .should("be.visible")
      .wait(1000)
      .type(FilterStatus);
    cy.contains(".mat-option-text", " choix du mode opératoire ").click();
    cy.get(".cdk-overlay-backdrop").click();
    // cy.get(this.weblocators.searchBtn).click();
  }
  AddFilterCreationDate(ClaimCreationDate) {
    cy.get(this.weblocators.btnAddFilter).should("be.visible").click();
    cy.get(this.weblocators.checkboxClaimCreationDate)
      .scrollIntoView({ duration: 500 })
      .should("be.visible")
      .click();
    cy.get(this.weblocators.filterClaimCreationDate)
      .should("be.visible")
      .type(`${ClaimCreationDate}{enter}`);
    // cy.contains(this.weblocators.paginator, " 1 - 7 de 7 ");
    cy.contains(this.weblocators.paginator, " 1 - 10 de 1341 ");
  }
  checkNumberRowsAndColumnTable(numberRows, numberColumns) {
    cy.get(this.weblocators.rowsTable).should("have.length", numberRows);
    cy.get(this.weblocators.columnsTable).should("have.length", numberColumns);
  }
  checkDataFromSpecificRowAndColumn(CustomerClaimId) {
    cy.get(this.weblocators.firstCellTableBody).contains(CustomerClaimId);
  }
  readAllRowsAndColumnsDataInFirstPage() {
    cy.get(this.weblocators.rowsTable).each(($row, index, $rows) => {
      cy.wrap($row).within(() => {
        cy.get("td").each(($col, index, $cols) => {
          cy.log($col.text());
        });
      });
    });
  }
  verifyDataInColumnName() {
    cy.get(this.weblocators.rowsTable).each(($row, index, $rows) => {
      cy.wrap($row).within(() => {
        cy.get("td:nth-child(2)").each(($col, index, $cols) => {
          cy.contains("valeriano");
        });
      });
    });
  }
  verifyDataInColumnTelephone(cTelephone) {
    cy.get(this.weblocators.rowsTable).each(($row, index, $rows) => {
      cy.wrap($row).within(() => {
        cy.get("td:nth-child(7)").each(($col, index, $cols) => {
          cy.contains(cTelephone);
        });
      });
    });
  }
  pagination() {
    let totalPages;
    cy.get(this.weblocators.paginator).then((element) => {
      let mytext = element.text(); // 1 - 10 de 399
      totalPages = mytext.substring(mytext.indexOf("de") + 2, mytext.lenght);
      cy.log("Total number of pages in a table ===>" + totalPages); // To be continued...
    });
  }
  clickColumnTelephoneVisibilityIcon() {
    cy.get(this.weblocators.iconVisibilityColumn).click();
    cy.get(this.weblocators.columnNameTelephone).click();
  }
  clickColumnProductCodeVisibilityIcon() {
    cy.get(this.weblocators.iconVisibilityColumn).click();
    cy.get(this.weblocators.columnNameProductCode)
      .scrollIntoView({ duration: 500 })
      .should("be.visible")
      .click();
  }
  switchToLanguage() {
    cy.get(this.weblocators.languageButton).should("be.visible").click();
    cy.get(this.weblocators.englishFlagLanguage)
      .should("be.visible")
      .wait(500)
      .click();
  }
}
