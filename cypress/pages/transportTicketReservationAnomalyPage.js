export class transportTicketReservationAnomaly {
  weblocators = {
    trackingNumber: "#tracking_number",
    submitButton: ".aster_btn",
    option: ".mat-option-text",
    carrierField:
      "form.ng-dirty > .mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex",
  };
  enterTrackingNumberAndSelectCarrier(TrackingNumber, Carrier) {
    cy.get(this.weblocators.trackingNumber)
      .should("be.visible")
      .type(TrackingNumber);
    cy.get(this.weblocators.carrierField).click();
    cy.get(this.weblocators.option).contains(Carrier).click();
  }
  clickSubmitButton() {
    cy.get(this.weblocators.submitButton).should("be.visible").click();
  }
}
