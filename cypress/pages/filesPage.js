export class filesPage {
  weblocators = {
    filesSection: "#filesSection > .text-center > .mat-icon",
    fileName1: ":nth-child(1) > .text-left > .cursor-pointer > .file_name",
    fileName2: ":nth-child(2) > .text-left > .cursor-pointer > .file_name",
    fileName3: ":nth-child(3) > .text-left > .cursor-pointer > .file_name",
    fileName4: ":nth-child(4) > .text-left > .cursor-pointer > .file_name",
    fileName5: ":nth-child(5) > .text-left > .cursor-pointer > .file_name",
    fileName6: ":nth-child(6) > .text-left > .cursor-pointer > .file_name",
    fileName7: ":nth-child(7) > .text-left > .cursor-pointer > .file_name",
    fileName8: ":nth-child(8) > .text-left > .cursor-pointer > .file_name",
  };

  clickFilesSection() {
    cy.get(this.weblocators.filesSection)
      .should("be.visible")
      .click({ force: true });
  }
  verifyDiagProlongeGeneration(ReportOne) {
    cy.contains(this.weblocators.fileName1, ReportOne);
  }
  verifyDiagProlongeGenerationWithMandatorySerialNumberUploadPhoto(ReportOne) {
    cy.contains(this.weblocators.fileName2, ReportOne);
  }
  verifyCareAfterSalesServiceUnderWarrantyGeneration(
    ReportCareAfterSalesService
  ) {
    cy.contains(this.weblocators.fileName2, ReportCareAfterSalesService);
  }
  verifyCareAfterSalesServiceUnderWarrantyGenerationReportWithMandatorySerialNumberUploadPhoto(
    ReportCareAfterSalesService
  ) {
    cy.contains(this.weblocators.fileName3, ReportCareAfterSalesService);
  }
  verifyRepairAgreementRequestRepairerReportGeneration(
    ReportRepairAgreementRequest
  ) {
    cy.contains(this.weblocators.fileName3, ReportRepairAgreementRequest);
  }
  verifyWorkOrderRepairGenerationADEO(ReportWorkOrderRepairADEO) {
    cy.contains(this.weblocators.fileName3, ReportWorkOrderRepairADEO);
  }
  verifyCustomerRefundReportGeneration(CustomerRefundValidated) {
    cy.contains(this.weblocators.fileName3, CustomerRefundValidated);
  }
  verifyProductDestructionOrderReportGeneration(ReportProductDestructionOrder) {
    cy.contains(this.weblocators.fileName5, ReportProductDestructionOrder);
  }
  verifyProductDestructionOrderReportGenerationS1(
    ReportProductDestructionOrder
  ) {
    cy.contains(this.weblocators.fileName3, ReportProductDestructionOrder);
  }
  verifyCreditNoteRequestSupplierGeneration(CreditNoteRequestSupplier) {
    cy.contains(this.weblocators.fileName4, CreditNoteRequestSupplier);
  }
  verifyCreditNoteRequestSupplierGenerationS1(CreditNoteRequestSupplier) {
    cy.contains(this.weblocators.fileName4, CreditNoteRequestSupplier);
  }
  verifyWorkOrderRepairGeneration(ReportWorkOrderRepair) {
    cy.contains(this.weblocators.fileName4, ReportWorkOrderRepair);
  }
  verifyWorkOrderRepairGenerationER4(ReportWorkOrderRepair) {
    cy.contains(this.weblocators.fileName6, ReportWorkOrderRepair);
  }
  verifyWorkOrderRepairGenerationPickUp(ReportWorkOrderRepair) {
    cy.contains(this.weblocators.fileName5, ReportWorkOrderRepair);
  }
  verifyTransportVoucherRepairerReportGenerationPickUp(
    ReportTransportVoucherRepairer
  ) {
    cy.contains(this.weblocators.fileName6, ReportTransportVoucherRepairer);
  }
  verifyCustomerPickupOrderRequestAgreementPickupMDH(
    ReportCustomerPickupOrder
  ) {
    cy.contains(this.weblocators.fileName7, ReportCustomerPickupOrder);
  }
  verifyCustomerPickupOrderNoAgreementPickupMDH(ReportCustomerPickupOrder) {
    cy.contains(this.weblocators.fileName6, ReportCustomerPickupOrder);
  }
  verifyWorkOrderRepairGenerationMDH(ReportWorkOrderRepair) {
    cy.contains(this.weblocators.fileName6, ReportWorkOrderRepair);
  }
  verifyWorkOrderRepairGenerationER1ER5(ReportWorkOrderRepair) {
    cy.contains(this.weblocators.fileName7, ReportWorkOrderRepair);
  }
  verifyRequestForRepairRemovalMDHWithMandatorySerialNumberUploadPhoto(
    ReportRequestForRepairRemoval
  ) {
    cy.contains(this.weblocators.fileName4, ReportRequestForRepairRemoval);
  }
  verifyRequestForRepairRemovalNoAgreementPickUp(
    ReportRequestForRepairRemoval
  ) {
    cy.contains(this.weblocators.fileName3, ReportRequestForRepairRemoval);
  }
  verifyRequestForRepairRemoval(RequestForRepairRemoval) {
    cy.contains(this.weblocators.fileName4, RequestForRepairRemoval);
  }
  ///***Label DPD or Chronopost generation */
  verifyShipmentLabelReportGenerationMDH(ShipmentLabelReport) {
    cy.contains(this.weblocators.fileName4, ShipmentLabelReport);
  }
  verifyShipmentLabelReportGeneration(ShipmentLabelReport) {
    cy.contains(this.weblocators.fileName5, ShipmentLabelReport);
  }
  verifyTransportVoucherRepairerReportGenerationMDHOW(
    ReportTransportVoucherRepairer
  ) {
    cy.contains(this.weblocators.fileName4, ReportTransportVoucherRepairer);
  }
  verifyTransportVoucherRepairerReportGenerationMDH(
    ReportTransportVoucherRepairer
  ) {
    cy.contains(this.weblocators.fileName5, ReportTransportVoucherRepairer);
  }
  verifyTransportVoucherRepairerReportGeneration(
    ReportTransportVoucherRepairer
  ) {
    cy.contains(this.weblocators.fileName6, ReportTransportVoucherRepairer);
  }
  verifyRepairerRepairRequestReportGenerationMDHOW(ReportWorkOrderRepair) {
    cy.contains(this.weblocators.fileName6, ReportWorkOrderRepair);
  }
  verifyRepairerRepairRequestReportGeneration(ReportWorkOrderRepair) {
    cy.contains(this.weblocators.fileName7, ReportWorkOrderRepair);
  }
  verifyCustomerPickupOrderExpeditionER4(ReportCustomerPickupOrder) {
    cy.contains(this.weblocators.fileName7, ReportCustomerPickupOrder);
  }
  verifyCustomerPickupOrderReportGenerationExpeditionTreatment(
    ReportCustomerPickupOrder
  ) {
    cy.contains(this.weblocators.fileName8, ReportCustomerPickupOrder);
  }
  verifyCustomerPickupOrderReportGeneration(CustomerPickupOrder) {
    cy.contains(this.weblocators.fileName6, CustomerPickupOrder);
  }
  verifyGenerationPaymentQuotationFees(ReportPaymentQuotationFees) {
    cy.contains(this.weblocators.fileName3, ReportPaymentQuotationFees);
  }
}
