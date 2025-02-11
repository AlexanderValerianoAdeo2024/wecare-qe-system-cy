export class confirmRepairerCarrierPage {
  weblocators = {
    radioButtonPickup:
      "#PICKUP > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    radioButtonExp: "#CARRIERExp",
    radioButtonDPD: "#CARRIERDPD_LMFR",
    radioButtonDHL:
      "#CARRIERDHL_IMP_PARCEL_PL > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    radioButtonChronopost: "#CARRIERCHRONOPOST",
    radioButtonRepairerSupplier: ".mat-radio-outer-circle",
    radioButtonRepairerBCIT:
      "#REPAIRREP1 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    radioButtonRepairerBrumarBCIT:
      "#REPAIR0000002161 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    radioButtonBosch:
      "#REPAIR517 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    radioButtonMakita:
      "#REPAIR802050 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    radioButtonMakitaLMPL:
      "#REPAIR5 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    radioButtonArm:
      "#REPAIR12 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    radioButtonCordon:
      "#REPAIR1 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
    buttonValidate: "[fxlayoutalign='end center'] > .mat-focus-indicator",
    radioButtonExpedition:
      "#EXPEDITION > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle",
  };
  selectOptionExpedition() {
    cy.get(this.weblocators.radioButtonExpedition)
      .should("be.visible")
      .click({ force: true });
  }
  selectOptionDHL() {
    cy.get(this.weblocators.radioButtonDHL)
      .should("be.visible")
      .click({ force: true });
  }
  selectOptionExpCarrier() {
    cy.get(this.weblocators.radioButtonExp)
      .should("be.visible")
      .click({ force: true });
  }
  selectOptionDPDCarrier() {
    cy.get(this.weblocators.radioButtonDPD)
      .should("be.visible")
      .click({ force: true });
  }
  selectOptionChronopostCarrier() {
    cy.get(this.weblocators.radioButtonChronopost)
      .should("be.visible")
      .click({ force: true });
  }
  selectOptionBCITRepairer1() {
    cy.get(this.weblocators.radioButtonRepairerBCIT)
      .should("be.visible")
      .click({ force: true });
  }
  selectOptionRepairerBrumar() {
    cy.get(this.weblocators.radioButtonRepairerBrumarBCIT)
      .should("be.visible")
      .click({ force: true });
  }
  selectOptionRepairerSupplier() {
    cy.get(this.weblocators.radioButtonRepairerSupplier)
      .should("be.visible")
      .click({ force: true });
  }
  selectOptionBoschRepairer() {
    cy.get(this.weblocators.radioButtonBosch)
      .should("be.visible")
      .click({ force: true });
  }
  selectOptionMakita() {
    cy.get(this.weblocators.radioButtonMakita)
      .should("be.visible")
      .click({ force: true });
  }
  selectOptionMakitaLMPL() {
    cy.get(this.weblocators.radioButtonMakitaLMPL)
      .should("be.visible")
      .click({ force: true });
  }
  selectOptionARMRepairer() {
    cy.get(this.weblocators.radioButtonArm)
      .should("be.visible")
      .click({ force: true });
  }
  selectOptionCordonRepairer() {
    cy.get(this.weblocators.radioButtonCordon)
      .should("be.visible")
      .click({ force: true });
  }
  selectTransportModePickup() {
    cy.get(this.weblocators.radioButtonPickup)
      .should("be.visible")
      .click({ force: true });
  }
  clickButtonValidate() {
    cy.get(this.weblocators.buttonValidate)
      .should("be.visible")
      .click({ force: true });
  }
}
