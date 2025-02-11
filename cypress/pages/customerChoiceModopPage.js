export class customerChoiceModopPage {
  weblocators = {
    dropdownReasonForChangeWarranty:
      "#warranty_reason > .mat-select-trigger > .mat-select-value",
    reasonManufacturerWarranty: "#SG_IN_MANUFACTURER_WARRANTY_PERIOD",
    reasonCommercialGesture: "#SG_COMMERCIAL_GESTURE",
    reasonCustomerDefault: "#HG_CUSTOMER_DEFAULT>span>div",
    reasonWarrantyPeriodExceeded: "#HG_WARRANTY_PERIOD_EXCEEDED",
    dropdownOperatingMode:
      "#operating_mode > .mat-select-trigger > .mat-select-value",
    swapOperateMode: "#SWAP",
    sparePartOrderMode: "#SPARE_PARTS_ORDER",
    internalrepairMode: "#INTERNAL_REPARATION",
    externalrepairMode: "#SERVICE_CENTER_REPAIR",
    btnValidateCustomerChoice:
      '[fxlayoutalign="end center"] > .mat-focus-indicator > .mat-button-wrapper',
    dropdownCustomerChoiceField:
      "#customer_choice > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow",
    customerChoiceField:
      ".px-16.ng-star-inserted > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex",
    repairOptionIncustomerChoiceField: "#REPAIR",
    reasonInManufacturerWarrantyPeriod: "#SG_IN_MANUFACTURER_WARRANTY_PERIOD",
    dropdownOperatingModeHR: "#operating_mode > .mat-select-trigger",
    operateModeHomeRepair: "#HOME_REPAIR > .mat-option-text",
    listReasonOptions: ".mat-option-text > .ng-star-inserted",
  };
  //******Refactoriser methods warranty reason with  methods select Warranty reason and apply Data Driven Test */
  selectReasonManufacturerWarranty() {
    cy.wait(1000);
    cy.get(this.weblocators.dropdownReasonForChangeWarranty)
      .should("be.visible")
      .wait(400)
      .click({ force: true })
      .wait(100);
    cy.get(this.weblocators.reasonManufacturerWarranty).click({ force: true });
  }
  selectManufacturerWarrantyCommercialGesture() {
    cy.get(this.weblocators.dropdownReasonForChangeWarranty)
      .wait(400)
      .should("be.visible")
      .wait(100)
      .click({ force: true });
    cy.get(this.weblocators.reasonCommercialGesture).click({ force: true });
  }
  selectWarrantyReason(SetupFirstReasonDisplay, WarrantyReason) {
    cy.contains(
      this.weblocators.dropdownReasonForChangeWarranty,
      SetupFirstReasonDisplay
    )
      .click()
      .wait(1000);
    cy.contains(this.weblocators.listReasonOptions, WarrantyReason).click();
  }
  selectReasonCustomerDefault() {
    cy.get(this.weblocators.dropdownReasonForChangeWarranty)
      .should("be.visible")
      .wait(400)
      .click({
        force: true,
      })
      .wait(100);
    cy.get(this.weblocators.reasonCustomerDefault).should("be.visible").click({
      force: true,
    });
  }
  selectReasonWarrantyPeriodExceeded() {
    cy.wait(600);
    cy.get(this.weblocators.dropdownReasonForChangeWarranty)
      .should("be.visible")
      .click();
    cy.get(this.weblocators.reasonWarrantyPeriodExceeded)
      .should("be.visible")
      .click({
        force: true,
      });
  }
  selectOperateModeHomeRepair() {
    cy.get(this.weblocators.dropdownOperatingModeHR)
      .should("be.visible")
      .click()
      .wait(1000);
    cy.get(this.weblocators.operateModeHomeRepair)
      .should("be.visible")
      .click({ force: true });
  }
  selectOperateModeSwap() {
    cy.wait(500);
    cy.get(this.weblocators.dropdownOperatingMode)
      .should("be.visible")
      .click({ force: true });
    cy.get(this.weblocators.swapOperateMode).should("be.visible").click();
  }
  selectOperateModeSparePartOrder() {
    cy.wait(500);
    cy.get(this.weblocators.dropdownOperatingMode)
      .should("be.visible")
      .click({ force: true });
    cy.get(this.weblocators.sparePartOrderMode).should("be.visible").click();
  }
  selectOperateModeInternalRepair() {
    cy.wait(500);
    cy.get(this.weblocators.dropdownOperatingMode)
      .should("be.visible")
      .click({ force: true });
    cy.get(this.weblocators.internalrepairMode).should("be.visible").click();
  }
  selectOperateModeExternalRepair() {
    cy.wait(500);
    cy.get(this.weblocators.dropdownOperatingMode)
      .should("be.visible")
      .click({ force: true });
    cy.get(this.weblocators.externalrepairMode).should("be.visible").click();
  }
  selectRepairInCustomerChoiceField() {
    cy.get(this.weblocators.customerChoiceField).click({ force: true });
    cy.get(this.weblocators.repairOptionIncustomerChoiceField).click({
      force: true,
    });
  }
  clickButtonValidateCustomerChoice() {
    cy.get(this.weblocators.btnValidateCustomerChoice).click();
  }
}
