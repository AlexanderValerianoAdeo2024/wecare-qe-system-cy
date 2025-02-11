import "cypress-file-upload";
import testData from "../../fixtures/testData.json";
import { createClaimPage } from "../../pages/createClaimPage";
import { choiceSymptomPage } from "../../pages/choiceSymptomPage";
import { customerChoiceModopPage } from "../../pages/customerChoiceModopPage";
import { swapMadeForCustomerPage } from "../../pages/swapMadeForCustomerPage";
import {
  modifyInterventionAddress,
  modifyInterventionAddressPage,
} from "../../pages/modifyInterventionAddressPage";
import { repairConfirmationPage } from "../../pages/repairConfirmationPage";
import { surveypage } from "../../pages/surveyPage";
import { awaitingDestructionHSproductPage } from "../../pages/awaitingDestructionHSproductPage";
import { homePage } from "../../pages/homePage";
import { waitingSupplierCreditNotePage } from "../../pages/waitingSupplierCreditNotePage";
import { outOfServiceProductPage } from "../../pages/outOfServiceProductPage";
import { parcelToSendPage } from "../../pages/parcelToSendPage";
import { inTransitPage } from "../../pages/inTransitPage";
import { waitingProductPickupPage } from "../../pages/waitingProductPickupPage";
import { transportTicketReservationAnomaly } from "../../pages/transportTicketReservationAnomalyPage";
import { infosPage } from "../../pages/infosPage";
import { confirmRepairerCarrierPage } from "../../pages/confirmRepairerCarrierPage";
import { paymentStorePage } from "../../pages/paymentStorePage";
import { choiceOfPartsToOrderPage } from "../../pages/choiceOfPartsToOrdePage";
import { checkOrderSparePartPage } from "../../pages/checkOrderSparePartPage";
import { diagnosticAndVerificationPage } from "../../pages/diagnosticAndVerificationPage";
import { filesPage } from "../../pages/filesPage";
import { waitingReparationAgreementPage } from "../../pages/waitingReparationAgreementPage";
import { diagnosisInProgressPage } from "../../pages/diagnosisInProgressPage";
import { underRepairPage } from "../../pages/underRepairPage";
import { inspectionReceptionProductPage } from "../../pages/inspectionReceptionProductPage";
import { awaitingCustomerPickupProductPage } from "../../pages/awaitingCustomerPickupProductPage";

const homePageObj = new homePage();
const createClaimPageObj = new createClaimPage();
const choiceSymptomPageObj = new choiceSymptomPage();
const surveyPageObj = new surveypage();
const customerChoiceModopPageObj = new customerChoiceModopPage();
const swapMadeForCustomerPageObj = new swapMadeForCustomerPage();
const pdfFilePath = "2ccas-angoulemeCollectivite.png";
const modifyInterventionAddressPageObj = new modifyInterventionAddressPage();
const repairConfirmationPageObj = new repairConfirmationPage();
const awaitingDestructionHSproductPageObj =
  new awaitingDestructionHSproductPage();
const waitingSupplierCreditNotePageObj = new waitingSupplierCreditNotePage();
const outOfServiceProductPageObj = new outOfServiceProductPage();
const parcelToSendPageObj = new parcelToSendPage();
const inTransitPageObj = new inTransitPage();
const waitingProductPickupPageObj = new waitingProductPickupPage();
const transportTicketReservationAnomalyObj =
  new transportTicketReservationAnomaly();
const infosPageObj = new infosPage();
const confirmRepairerCarrierPageObj = new confirmRepairerCarrierPage();
const paymentStorePageObj = new paymentStorePage();
const choiceOfPartsToOrderPageObj = new choiceOfPartsToOrderPage();
const checkOrderSparePartPageObj = new checkOrderSparePartPage();
const diagnosticAndVerificationPageObj = new diagnosticAndVerificationPage();
const filesPageObj = new filesPage();
const waitingReparationAgreementPageObj = new waitingReparationAgreementPage();
const diagnosisInProgressPageObj = new diagnosisInProgressPage();
const underRepairPageObj = new underRepairPage();
const inspectionReceptionProductPageObj = new inspectionReceptionProductPage();
const awaitingCustomerPickupProductPageObj =
  new awaitingCustomerPickupProductPage();
describe("Create claim SWAP BCIT", () => {
  beforeEach(() => {
    cy.login(testData.login.BCITldapSWAPER, testData.login.password);
  });
  it("Create claim Swap BCIT S1 (Supplier) / No agreement / Destruction / Enter manually customer information", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.BCITclaimS1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.BCITclaimS1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.BCITclaimS1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.BCITclaimS1.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.BCITclaimS1.productLabel);

    createClaimPageObj.selectCivility();
    createClaimPageObj.enterCustomerLastName(
      testData.BCITclaimS1.customerLastName
    );
    createClaimPageObj.enterCustomerFirstName(
      testData.BCITclaimS1.customerFirstName
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.BCITclaimS1.productReference,
      testData.BCITclaimS1.productLabel,
      testData.BCITclaimS1.invoiceId,
      testData.BCITclaimS1.invoiceCreationDate,
      testData.BCITclaimS1.supplier
    );
    // infosPageObj.verifyCustomerDetails(
    //   testData.BCITclaimS1.customerId,
    //   testData.BCITclaimS1.customerLastName,
    //   testData.BCITclaimS1.customerTelephone,
    //   testData.BCITclaimS1.customerEmail
    // );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.clickButtonSymptomNotFound();
    choiceSymptomPageObj.enterSymptomNotFound(testData.BCITclaimS1.symptom);
    // choiceSymptomPageObj.selectSymptomBroken();
    // choiceSymptomPageObj.enterSymptom(testData.BCITclaimS1.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    swapMadeForCustomerPageObj.selectRefund();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    awaitingDestructionHSproductPageObj.selectCheckBoxDestructionCompletedAndSubmit();

    waitingSupplierCreditNotePageObj.selectRadioButtonCreditNoteReceived();
    waitingSupplierCreditNotePageObj.verifyButtonSubmitIsVisibleAndNotDisableAndSubmit();

    outOfServiceProductPageObj.displayMessage(
      testData.BCITclaimS1.messageOutOfService
    );
  });
  it("Create claim Swap BCIT S3 (Supplier) / No agreement / Expedition", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.BCITclaimS3.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.BCITclaimS3.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.BCITclaimS3.siteCode);
    createClaimPageObj.enterProductReference(
      testData.BCITclaimS3.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.BCITclaimS3.productLabel);

    createClaimPageObj.selectCivility();
    createClaimPageObj.enterCustomerLastName(
      testData.BCITclaimS3.customerLastName
    );
    createClaimPageObj.enterCustomerFirstName(
      testData.BCITclaimS3.customerFirstName
    );

    createClaimPageObj.enterCustomerReferenceEN(
      testData.BCITclaimS3.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.BCITclaimS3.productReference,
      testData.BCITclaimS3.productLabel,
      testData.BCITclaimS3.invoiceId,
      testData.BCITclaimS3.invoiceCreationDate,
      testData.BCITclaimS3.supplier
    );
    // infosPageObj.verifyCustomerDetails(
    //   testData.BCITclaimS3.customerId,
    //   testData.BCITclaimS3.customerLastName,
    //   testData.BCITclaimS3.customerTelephone,
    //   testData.BCITclaimS3.customerEmail
    // );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.clickButtonSymptomNotFound();
    choiceSymptomPageObj.enterSymptomNotFound(testData.BCITclaimS3.symptom);
    // choiceSymptomPageObj.selectSymptomAbnormalNoise();
    // choiceSymptomPageObj.enterSymptom(testData.BCITclaimS3.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.BCITclaimS3.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    swapMadeForCustomerPageObj.selectRefund();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    waitingProductPickupPageObj.enterTrackingNumberPickupAndCarrier(
      testData.BCITclaimS3.trackingNumber,
      testData.BCITclaimS3.carrier
    );
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    waitingProductPickupPageObj.selectCheckboxProductPickupAndSubmit();

    waitingSupplierCreditNotePageObj.selectRadioButtonCreditNoteReceived();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    waitingSupplierCreditNotePageObj.verifyButtonSubmitIsVisibleAndNotDisableAndSubmit();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    outOfServiceProductPageObj.displayMessage(
      testData.BCITclaimS3.messageOutOfService
    );
  });
  // *** create a new test set for request agreement with LDAP 20104567
  it("Create claim Swap BCIT S4 (Supplier) / Request agreement / Pick-up", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.BCITclaimS4.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.BCITclaimS4.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.BCITclaimS4.siteCode);
    createClaimPageObj.enterProductReference(
      testData.BCITclaimS4.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.BCITclaimS4.productLabel);

    createClaimPageObj.selectCivility();
    createClaimPageObj.enterCustomerLastName(
      testData.BCITclaimS4.customerLastName
    );
    createClaimPageObj.enterCustomerFirstName(
      testData.BCITclaimS4.customerFirstName
    );

    createClaimPageObj.enterCustomerReferenceEN(
      testData.BCITclaimS4.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.BCITclaimS4.productReference,
      testData.BCITclaimS4.productLabel,
      testData.BCITclaimS4.invoiceId,
      testData.BCITclaimS4.invoiceCreationDate,
      testData.BCITclaimS4.supplier
    );
    // infosPageObj.verifyCustomerDetails(
    //   testData.BCITclaimS4.customerId,
    //   testData.BCITclaimS4.customerLastName,
    //   testData.BCITclaimS4.customerTelephone,
    //   testData.BCITclaimS4.customerEmail
    // );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.clickButtonSymptomNotFound();
    choiceSymptomPageObj.enterSymptomNotFound(testData.BCITclaimS4.symptom);
    // choiceSymptomPageObj.enterSymptom(testData.BCITclaimS4.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.BCITclaimS4.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    swapMadeForCustomerPageObj.selectRefund();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
});
describe("Create claim external repair UW BCIT", () => {
  beforeEach(() => {
    cy.login(testData.login.BCITldapSWAPER, testData.login.password);
  });
  it("Create claim external repair BCIT ER1-UW with DPD label & LocalBrand repair by supplier local brand & agreement & expedition with backo order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.BCITclaimER1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.BCITclaimER1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.BCITclaimER1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.BCITclaimER1.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.BCITclaimER1.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.BCITclaimER1.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();

    createClaimPageObj.clickBtnDeclareNewReparation();
    // choiceSymptomPageObj.clickButtonTakeNoteAlert();

    infosPageObj.verifyProductDetails(
      testData.BCITclaimER1.productReference,
      testData.BCITclaimER1.productLabel,
      testData.BCITclaimER1.invoiceId,
      testData.BCITclaimER1.invoiceCreationDate,
      testData.BCITclaimER1.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.BCITclaimER1.customerId,
      testData.BCITclaimER1.customerLastName,
      testData.BCITclaimER1.customerTelephone,
      testData.BCITclaimER1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.BCITclaimER1.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeExternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.BCITclaimER1.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    // filesPageObj.clickFilesSection();
    // filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGeneration(
    //   testData.BCITclaimER1.reportCareAfterSalesService
    // );
    // infosPageObj.clickInfosSection();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    confirmRepairerCarrierPageObj.selectOptionExpCarrier();
    // confirmRepairerCarrierPageObj.selectOptionChronopostCarrier();
    confirmRepairerCarrierPageObj.selectOptionBCITRepairer1();
    confirmRepairerCarrierPageObj.clickButtonValidate();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // filesPageObj.clickFilesSection();
    // filesPageObj.verifyRepairAgreementRequestRepairerReportGeneration(
    //   testData.BCITclaimER1.reportRepairAgreementRequest
    // );
    // infosPageObj.clickInfosSection();

    waitingReparationAgreementPageObj.selectRequestAccepted();
    waitingReparationAgreementPageObj.enterAgreementReparationNumber(
      testData.BCITclaimER1.agreementReparationNumber
    );
    waitingReparationAgreementPageObj.selectProductSentForRepair();
    waitingReparationAgreementPageObj.verifyLinkModifyRepairerEnable(
      testData.BCITclaimER1.textLinkModifyRepairer
    );
    waitingReparationAgreementPageObj.clickValidateButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // filesPageObj.clickFilesSection();
    // filesPageObj.verifyWorkOrderRepairGeneration(
    //   testData.BCITclaimER1.reportWorkOrderRepairADEO
    // );
    // filesPageObj.verifyShipmentLabelReportGeneration(
    //   testData.BCITclaimER1.shipmentLabelReport
    // );
    // filesPageObj.verifyTransportVoucherRepairerReportGeneration(
    //   testData.BCITclaimER1.reportTransportVoucherRepairer
    // );
    // infosPageObj.clickInfosSection();

    //***Transport ticket anomaly  */

    transportTicketReservationAnomalyObj.enterTrackingNumberAndSelectCarrier(
      testData.BCITclaimER1.trackingNumber,
      testData.BCITclaimER1.carrier
    );
    transportTicketReservationAnomalyObj.clickSubmitButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // filesPageObj.clickFilesSection();
    // filesPageObj.verifyTransportVoucherRepairerReportGenerationMDH(
    //   testData.BCITclaimER1.reportTransportVoucherRepairer
    // );
    // infosPageObj.clickInfosSection();

    parcelToSendPageObj.selectCheckboxPackageSent();
    parcelToSendPageObj.clickSubmitButton();

    // filesPageObj.clickFilesSection();
    // filesPageObj.verifyWorkOrderRepairGenerationER1(
    //   testData.BCITclaimER1.reportWorkOrderRepair
    // );
    // infosPageObj.clickInfosSection();

    inTransitPageObj.selectCheckboxPackageDelivered();
    inTransitPageObj.clickSubmitButton();

    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnWarrantyAccepted();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    underRepairPageObj.selectRadioBtnRepairedProduct();
    underRepairPageObj.selectAddLink();
    underRepairPageObj.enterSparePartReference();
    underRepairPageObj.enterSparePartLabel();
    underRepairPageObj.enterSparePartPrice();
    underRepairPageObj.selectBtnAdd();
    underRepairPageObj.clickReportSubmitButton();
    underRepairPageObj.clickSubmitButton();

    inspectionReceptionProductPageObj.selectRadioBtnProductRepaired();
    inspectionReceptionProductPageObj.clickSubmitButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // filesPageObj.clickFilesSection();
    // filesPageObj.verifyCustomerPickupOrderReportGenerationExpeditionTreatment(
    //   testData.BCITclaimER1.customerPickupOrder
    // );
    // infosPageObj.clickInfosSection();

    awaitingCustomerPickupProductPageObj.selectCheckboxRecoveredProduct();
    awaitingCustomerPickupProductPageObj.clickSubmitButton();
  });
  it("Create claim external repair BCIT ER2-UW localBrand repair by repairer & No agreement & Pick-Up with backo order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.BCITclaimER2.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.BCITclaimER2.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.BCITclaimER2.siteCode);
    createClaimPageObj.enterProductReference(
      testData.BCITclaimER2.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.BCITclaimER2.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.BCITclaimER2.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();

    createClaimPageObj.clickBtnDeclareNewReparation();

    // choiceSymptomPageObj.clickButtonTakeNoteAlert();

    infosPageObj.verifyProductDetails(
      testData.BCITclaimER2.productReference,
      testData.BCITclaimER2.productLabel,
      testData.BCITclaimER2.invoiceId,
      testData.BCITclaimER2.invoiceCreationDate,
      testData.BCITclaimER2.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.BCITclaimER2.customerId,
      testData.BCITclaimER2.customerLastName,
      testData.BCITclaimER2.customerTelephone,
      testData.BCITclaimER2.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.BCITclaimER2.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    filesPageObj.clickFilesSection();
    // filesPageObj.verifyDiagProlongeGeneration(
    //   testData.BCITclaimER2.reportDiagnosisExtend
    // );
    infosPageObj.clickInfosSection();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeExternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.BCITclaimER2.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();
    // *** This radio button is not mandatory is not setup ***//
    // confirmRepairerCarrierPageObj.selectTransportModePickup();
    filesPageObj.clickFilesSection();
    // filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGeneration(
    //   testData.BCITclaimER2.reportCareAfterSalesService
    // );
    infosPageObj.clickInfosSection();

    confirmRepairerCarrierPageObj.selectTransportModePickup();
    confirmRepairerCarrierPageObj.selectOptionMakita();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    confirmRepairerCarrierPageObj.clickButtonValidate();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    // filesPageObj.verifyWorkOrderRepairGeneration(
    //   testData.BCITclaimER2.reportWorkOrderRepair
    // );
    // filesPageObj.verifyTransportVoucherRepairerReportGenerationPickUp(
    //   testData.BCITclaimER2.reportTransportVoucherRepairer
    // );
    infosPageObj.clickInfosSection();

    waitingProductPickupPageObj.enterTrackingNumberPickupAndCarrier(
      testData.BCITclaimER2.trackingNumber,
      testData.BCITclaimER2.carrier
    );
    waitingProductPickupPageObj.selectCheckboxProductPickupAndSubmit();

    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnWarrantyAccepted();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    underRepairPageObj.selectRadioBtnRepairedProduct();
    underRepairPageObj.selectAddLink();
    underRepairPageObj.enterSparePartReference();
    underRepairPageObj.enterSparePartLabel();
    underRepairPageObj.enterSparePartPrice();
    underRepairPageObj.selectBtnAdd();
    underRepairPageObj.clickReportSubmitButton();
    underRepairPageObj.clickSubmitButton();

    inspectionReceptionProductPageObj.selectRadioBtnProductRepaired();
    inspectionReceptionProductPageObj.clickSubmitButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    // filesPageObj.verifyCustomerPickupOrderReportGenerationPickupTreatment(
    //   testData.BCITclaimER2.customerPickupOrder
    // );
    infosPageObj.clickInfosSection();

    awaitingCustomerPickupProductPageObj.selectCheckboxRecoveredProduct();
    awaitingCustomerPickupProductPageObj.clickSubmitButton();
  });
  it("Create claim external repair BCIT ER3-UW RepairMDH & No agreement & Pick-Up with backo order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.BCITclaimER3.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.BCITclaimER3.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.BCITclaimER3.siteCode);
    createClaimPageObj.enterProductReference(
      testData.BCITclaimER3.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.BCITclaimER3.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.BCITclaimER3.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();

    infosPageObj.verifyProductDetails(
      testData.BCITclaimER3.productReference,
      testData.BCITclaimER3.productLabel,
      testData.BCITclaimER3.invoiceId,
      testData.BCITclaimER3.invoiceCreationDate,
      testData.BCITclaimER3.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.BCITclaimER3.customerId,
      testData.BCITclaimER3.customerLastName,
      testData.BCITclaimER3.customerTelephone,
      testData.BCITclaimER3.customerEmail
    );

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.BCITclaimER3.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    infosPageObj.verifyPay();
    filesPageObj.clickFilesSection();
    // filesPageObj.verifyDiagProlongeGeneration(
    //   testData.BCITclaimER3.reportDiagnosisExtend
    // );
    infosPageObj.clickInfosSection();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeExternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    infosPageObj.verifySymptomDisplay(testData.BCITclaimER3.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    filesPageObj.clickFilesSection();
    // filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGeneration(
    //   testData.BCITclaimER3.reportCareAfterSalesService
    // );
    infosPageObj.clickInfosSection();

    confirmRepairerCarrierPageObj.selectOptionRepairerBrumar();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    confirmRepairerCarrierPageObj.clickButtonValidate();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    filesPageObj.clickFilesSection();
    // filesPageObj.verifyRequestForRepairRemovalMDH(
    //   testData.BCITclaimER3.requestForRepairRemoval
    // );
    // filesPageObj.verifyWorkOrderRepairGeneration(
    //   testData.BCITclaimER3.reportWorkOrderRepair
    // );
    // filesPageObj.verifyTransportVoucherRepairerReportGenerationMDH(
    //   testData.BCITclaimER3.reportTransportVoucherRepairer
    // );
    infosPageObj.clickInfosSection();

    waitingProductPickupPageObj.enterTrackingNumberPickupAndCarrier(
      testData.BCITclaimER3.trackingNumber,
      testData.BCITclaimER3.carrier
    );
    waitingProductPickupPageObj.selectCheckboxProductPickupAndSubmit();

    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnWarrantyAccepted();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    underRepairPageObj.selectRadioBtnRepairedProduct();
    underRepairPageObj.selectAddLink();
    underRepairPageObj.enterSparePartReference();
    underRepairPageObj.enterSparePartLabel();
    underRepairPageObj.enterSparePartPrice();
    underRepairPageObj.selectBtnAdd();
    underRepairPageObj.clickReportSubmitButton();
    underRepairPageObj.clickSubmitButton();

    inspectionReceptionProductPageObj.selectRadioBtnProductRepaired();
    inspectionReceptionProductPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    // filesPageObj.verifyCustomerPickupOrderRequestAgreementPickupTreatmentMDH(
    //   testData.BCITclaimER3.customerPickupOrder
    // );
    infosPageObj.clickInfosSection();

    awaitingCustomerPickupProductPageObj.selectCheckboxRecoveredProduct();
    awaitingCustomerPickupProductPageObj.clickSubmitButton();
  });
  it("Create claim external repair BCIT ER4-UW RepairMDH & No agreement & Expedition with backo order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.BCITclaimER4.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.BCITclaimER4.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.BCITclaimER4.siteCode);
    createClaimPageObj.enterProductReference(
      testData.BCITclaimER4.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.BCITclaimER4.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.BCITclaimER4.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();

    // choiceSymptomPageObj.clickButtonTakeNoteAlert();

    infosPageObj.verifyProductDetails(
      testData.BCITclaimER4.productReference,
      testData.BCITclaimER4.productLabel,
      testData.BCITclaimER4.invoiceId,
      testData.BCITclaimER4.invoiceCreationDate,
      testData.BCITclaimER4.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.BCITclaimER4.customerId,
      testData.BCITclaimER4.customerLastName,
      testData.BCITclaimER4.customerTelephone,
      testData.BCITclaimER4.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.BCITclaimER4.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    filesPageObj.clickFilesSection();
    // filesPageObj.verifyDiagProlongeGeneration(
    //   testData.BCITclaimER4.reportDiagnosisExtend
    // );
    infosPageObj.clickInfosSection();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeExternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    infosPageObj.verifySymptomDisplay(testData.BCITclaimER4.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    filesPageObj.clickFilesSection();
    // filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGeneration(
    //   testData.BCITclaimER4.reportCareAfterSalesService
    // );
    infosPageObj.clickInfosSection();

    confirmRepairerCarrierPageObj.selectOptionExpCarrier();
    confirmRepairerCarrierPageObj.selectOptionBCITRepairer1();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    confirmRepairerCarrierPageObj.clickButtonValidate();

    waitingReparationAgreementPageObj.selectRequestAccepted();
    waitingReparationAgreementPageObj.enterAgreementReparationNumber(
      testData.BCITclaimER4.agreementReparationNumber
    );
    waitingReparationAgreementPageObj.selectProductSentForRepair();
    waitingReparationAgreementPageObj.verifyLinkModifyRepairerEnable(
      testData.BCITclaimER4.textLinkModifyRepairer
    );
    waitingReparationAgreementPageObj.clickValidateButton();

    //***Transport ticket anomaly  */

    transportTicketReservationAnomalyObj.enterTrackingNumberAndSelectCarrier(
      testData.BCITclaimER4.trackingNumber,
      testData.BCITclaimER4.carrier
    );
    transportTicketReservationAnomalyObj.clickSubmitButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    // filesPageObj.verifyTransportVoucherRepairerReportGenerationMDH(
    //   testData.claimER1.reportTransportVoucherRepairer
    // );
    // infosPageObj.clickInfosSection();
    //     filesPageObj.clickFilesSection();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // filesPageObj.verifyWorkOrderRepairGenerationMDHER4(
    //   testData.BCITclaimER4.reportWorkOrderRepair
    // );
    // filesPageObj.verifyShipmentLabelReportGenerationMDH(
    //   testData.BCITclaimER4.shipmentLabelReport
    // );
    // filesPageObj.verifyTransportVoucherRepairerReportGenerationMDH(
    //   testData.BCITclaimER4.reportTransportVoucherRepairer
    // );
    infosPageObj.clickInfosSection();

    parcelToSendPageObj.selectCheckboxPackageSent();
    parcelToSendPageObj.clickSubmitButton();

    inTransitPageObj.selectCheckboxPackageDelivered();
    inTransitPageObj.clickSubmitButton();

    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnWarrantyAccepted();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    underRepairPageObj.selectRadioBtnRepairedProduct();
    underRepairPageObj.selectAddLink();
    underRepairPageObj.enterSparePartReference();
    underRepairPageObj.enterSparePartLabel();
    underRepairPageObj.enterSparePartPrice();
    underRepairPageObj.selectBtnAdd();
    underRepairPageObj.clickReportSubmitButton();
    underRepairPageObj.clickSubmitButton();

    inspectionReceptionProductPageObj.selectRadioBtnProductRepaired();
    inspectionReceptionProductPageObj.clickSubmitButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    // filesPageObj.verifyCustomerPickupOrderReportGenerationExpeditionTreatmentMDH(
    //   testData.BCITclaimER4.customerPickupOrder
    // );
    infosPageObj.clickInfosSection();

    awaitingCustomerPickupProductPageObj.selectCheckboxRecoveredProduct();
    awaitingCustomerPickupProductPageObj.clickSubmitButton();
  });
});
describe("Create claim external repair OW", () => {
  beforeEach(() => {
    cy.login(testData.login.BCITldapSWAPER, testData.login.password);
  });
  it("Create claim external repair BCIT ER5-OW RepairMDH & Expedition with backo order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.BCITclaimEROW5.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.BCITclaimEROW5.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.BCITclaimEROW5.siteCode);
    createClaimPageObj.enterProductReference(
      testData.BCITclaimEROW5.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.BCITclaimEROW5.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.BCITclaimEROW5.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    // choiceSymptomPageObj.clickButtonTakeNoteAlert();

    infosPageObj.verifyProductDetails(
      testData.BCITclaimEROW5.productReference,
      testData.BCITclaimEROW5.productLabel,
      testData.BCITclaimEROW5.invoiceId,
      testData.BCITclaimEROW5.invoiceCreationDate,
      testData.BCITclaimEROW5.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.BCITclaimEROW5.customerId,
      testData.BCITclaimEROW5.customerLastName,
      testData.BCITclaimEROW5.customerTelephone,
      testData.BCITclaimEROW5.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.BCITclaimEROW5.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    filesPageObj.clickFilesSection();
    // filesPageObj.verifyDiagProlongeGeneration(
    //   testData.BCITclaimEROW5.reportDiagnosisExtend
    // );
    infosPageObj.clickInfosSection();

    // customerChoiceModopPageObj.selectReasonWarrantyPeriodExceeded();
    customerChoiceModopPageObj.selectWarrantyReason(
      testData.BCITclaimEROW5.setupFirstReasonDisplay,
      testData.BCITclaimEROW5.warrantyReason
    );
    customerChoiceModopPageObj.selectOperateModeExternalRepair();
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.BCITclaimEROW5.symptom);
    filesPageObj.clickFilesSection();
    // filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGeneration(
    //   testData.BCITclaimEROW5.reportCareAfterSalesService
    // );
    infosPageObj.clickInfosSection();

    paymentStorePageObj.enterInvoiceNumber(
      testData.BCITclaimEROW5.invoiceNumberPayInStore
    );
    paymentStorePageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    confirmRepairerCarrierPageObj.selectOptionRepairerSupplier();
    confirmRepairerCarrierPageObj.clickButtonValidate();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    // filesPageObj.verifyWorkOrderRepairGenerationMDHER4(
    //   testData.BCITclaimEROW5.reportWorkOrderRepairADEO
    // );
    infosPageObj.clickInfosSection();

    waitingProductPickupPageObj.enterTrackingNumberPickupAndCarrier(
      testData.BCITclaimEROW5.trackingNumber,
      testData.BCITclaimEROW5.carrier
    );
    waitingProductPickupPageObj.selectCheckboxProductPickupAndSubmit();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    // filesPageObj.verifyShipmentLabelReportGenerationMDH(
    //   testData.BCITclaimEROW5.shipmentLabelReport
    // );
    // filesPageObj.verifyTransportVoucherRepairerReportGenerationMDH(
    //   testData.BCITclaimEROW5.reportTransportVoucherRepairer
    // );
    // filesPageObj.verifyWorkOrderRepairGenerationMDH(
    //   testData.BCITclaimEROW5.reportWorkOrderRepair
    // );
    infosPageObj.clickInfosSection();

    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    // underRepairPageObj.selectRadioBtnRepairedProduct();
    // underRepairPageObj.selectAddLink();
    // underRepairPageObj.enterSparePartReference();
    // underRepairPageObj.enterSparePartLabel();
    // underRepairPageObj.enterSparePartPrice();
    // underRepairPageObj.selectBtnAdd();
    // underRepairPageObj.clickReportSubmitButton();
    // underRepairPageObj.clickSubmitButton();

    // infosPageObj.verifySupplierUpdateIconIsNotVisible();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
});
