export class waitingProductPickupPage {
  weblocators = {
    trackingNumberField: "input[data-placeholder='Tracking number']",
    carrierField: "input[data-placeholder='Carrier']",
    trackingNumberFieldFrench: "input[data-placeholder='Numéro de suivi']",
    carrierFieldFrench: "input[data-placeholder='Transporteur']",
    checkboxProductPickup:
      "#product_pickedUp > .mat-checkbox-layout > .mat-checkbox-inner-container",
    buttonSubmit: '.mt-24 > [fxlayout="row"] > .mat-focus-indicator',
  };
  enterTrackingNumberPickupAndCarrier(TrackingNumber, Carrier) {
    cy.get(this.weblocators.trackingNumberField)
      .should("be.visible")
      .type(TrackingNumber);
    cy.get(this.weblocators.carrierField).should("be.visible").type(Carrier);
  }
  enterTrackingNumberPickupAndCarrierFrench(TrackingNumber, Carrier) {
    cy.get(this.weblocators.trackingNumberFieldFrench)
      .should("be.visible")
      .type(TrackingNumber);
    cy.get(this.weblocators.carrierFieldFrench)
      .should("be.visible")
      .type(Carrier);
  }
  selectCheckboxProductPickupAndSubmit() {
    cy.get(this.weblocators.checkboxProductPickup).should("be.visible").click();
    cy.get(this.weblocators.buttonSubmit).should("be.visible").click();
  }
}
