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
describe("Create claim SWAP LMPT", () => {
  beforeEach(() => {
    cy.login(testData.login.LMPTldapSwapER, testData.login.password);
  });
  it("Create claim Swap LMPT S1 (Supplier) / No agreement / Destruction", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimS1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimS1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimS1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimS1.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimS1.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimS1.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimS1.productReference,
      testData.LMPTclaimS1.productLabel,
      testData.LMPTclaimS1.invoiceId,
      testData.LMPTclaimS1.invoiceCreationDate,
      testData.LMPTclaimS1.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimS1.customerId,
      testData.LMPTclaimS1.customerLastName,
      testData.LMPTclaimS1.customerTelephone,
      testData.LMPTclaimS1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    // choiceSymptomPageObj.selectSymptomBroken();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimS1.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPTclaimS1.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    swapMadeForCustomerPageObj.selectRefund();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    awaitingDestructionHSproductPageObj.selectCheckBoxDestructionCompletedAndSubmit();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    waitingSupplierCreditNotePageObj.selectRadioButtonCreditNoteReceived();
    waitingSupplierCreditNotePageObj.verifyButtonSubmitIsVisibleAndNotDisableAndSubmit();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    outOfServiceProductPageObj.displayMessage(
      testData.LMPTclaimS1.messageOutOfService
    );
  });
  it("Create claim Swap LMPT S2 (Supplier) / No agreement / Expedition", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimS2.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimS2.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimS2.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimS2.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimS2.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimS2.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimS2.productReference,
      testData.LMPTclaimS2.productLabel,
      testData.LMPTclaimS2.invoiceId,
      testData.LMPTclaimS2.invoiceCreationDate,
      testData.LMPTclaimS2.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimS2.customerId,
      testData.LMPTclaimS2.customerLastName,
      testData.LMPTclaimS2.customerTelephone,
      testData.LMPTclaimS2.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    // choiceSymptomPageObj.selectSymptomAbnormalNoise();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimS2.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPTclaimS2.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    swapMadeForCustomerPageObj.selectRefund();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    transportTicketReservationAnomalyObj.enterTrackingNumberAndSelectCarrier(
      testData.LMPTclaimS2.trackingNumber,
      testData.LMPTclaimS2.carrier
    );
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    transportTicketReservationAnomalyObj.clickSubmitButton();

    parcelToSendPageObj.selectCheckboxPackageSent();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    parcelToSendPageObj.clickSubmitButton();

    inTransitPageObj.selectCheckboxPackageDelivered(
      testData.LMPTclaimS2.labelCheckboxInTransit
    );
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    inTransitPageObj.clickSubmitButton();

    waitingSupplierCreditNotePageObj.selectRadioButtonCreditNoteReceived();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    waitingSupplierCreditNotePageObj.verifyButtonSubmitIsVisibleAndNotDisableAndSubmit();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    outOfServiceProductPageObj.displayMessage(
      testData.LMPTclaimS2.messageOutOfService
    );
  });
  it("Create claim Swap LMPT S3 (Supplier) / No agreement / Pick-Up", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimS3.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimS3.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimS3.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimS3.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimS3.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimS3.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimS3.productReference,
      testData.LMPTclaimS3.productLabel,
      testData.LMPTclaimS3.invoiceId,
      testData.LMPTclaimS3.invoiceCreationDate,
      testData.LMPTclaimS3.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimS3.customerId,
      testData.LMPTclaimS3.customerLastName,
      testData.LMPTclaimS3.customerTelephone,
      testData.LMPTclaimS3.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimS3.symptom);
    // choiceSymptomPageObj.selectSymptomBroken();
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPTclaimS3.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    swapMadeForCustomerPageObj.selectRefund();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    waitingProductPickupPageObj.enterTrackingNumberPickupAndCarrier(
      testData.LMPTclaimS3.trackingNumber,
      testData.LMPTclaimS3.carrier
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
      testData.LMPTclaimS3.messageOutOfService
    );
  });
  // *** create a new test set for request agreement with LDAP 20104567
  it("Create claim Swap LMPT S4 (Supplier) / Request agreement / Pick-up", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimS4.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimS4.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimS4.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimS4.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimS4.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimS4.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimS4.productReference,
      testData.LMPTclaimS4.productLabel,
      testData.LMPTclaimS4.invoiceId,
      testData.LMPTclaimS4.invoiceCreationDate,
      testData.LMPTclaimS4.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimS4.customerId,
      testData.LMPTclaimS4.customerLastName,
      testData.LMPTclaimS4.customerTelephone,
      testData.LMPTclaimS4.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimS4.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPTclaimS4.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    swapMadeForCustomerPageObj.selectRefund();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();
  });
  it("Create claim Swap LMPT S5 (Store) / No agreement / Destruction", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimS5.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimS5.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimS5.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimS5.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimS5.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimS5.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimS5.productReference,
      testData.LMPTclaimS5.productLabel,
      testData.LMPTclaimS5.invoiceId,
      testData.LMPTclaimS5.invoiceCreationDate,
      testData.LMPTclaimS5.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimS5.customerId,
      testData.LMPTclaimS5.customerLastName,
      testData.LMPTclaimS5.customerTelephone,
      testData.LMPTclaimS5.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimS5.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPTclaimS5.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    swapMadeForCustomerPageObj.selectRefund();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    awaitingDestructionHSproductPageObj.selectCheckBoxDestructionCompletedAndSubmit();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    outOfServiceProductPageObj.displayMessage(
      testData.LMPTclaimS5.messageOutOfService
    );
  });
  it("Create claim Swap LMPT S6 (Store) Commercial Gesture / No agreement / Destruction", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimS6.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimS6.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimS6.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimS6.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimS6.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimS6.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimS6.productReference,
      testData.LMPTclaimS6.productLabel,
      testData.LMPTclaimS6.invoiceId,
      testData.LMPTclaimS6.invoiceCreationDate,
      testData.LMPTclaimS6.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimS6.customerId,
      testData.LMPTclaimS6.customerLastName,
      testData.LMPTclaimS6.customerTelephone,
      testData.LMPTclaimS6.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimS6.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectManufacturerWarrantyCommercialGesture();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPTclaimS6.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    swapMadeForCustomerPageObj.selectRefund();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    awaitingDestructionHSproductPageObj.selectCheckBoxDestructionCompletedAndSubmit();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    outOfServiceProductPageObj.displayMessage(
      testData.LMPTclaimS6.messageOutOfService
    );
  });
});
describe("Create claim internal repair LMPT", () => {
  beforeEach(() => {
    cy.login(testData.login.LMPTldapSparePartIR, testData.login.password);
  });
  it("Create claim IR1-UW LMPT ref Local brand with pixis order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimIR1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimIR1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimIR1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimIR1.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimIR1.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimIR1.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();

    // choiceSymptomPageObj.clickButtonTakeNoteAlert();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimIR1.productReference,
      testData.LMPTclaimIR1.productLabel,
      testData.LMPTclaimIR1.invoiceId,
      testData.LMPTclaimIR1.invoiceCreationDate,
      testData.LMPTclaimIR1.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimIR1.customerId,
      testData.LMPTclaimIR1.customerLastName,
      testData.LMPTclaimIR1.customerTelephone,
      testData.LMPTclaimIR1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimIR1.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeInternalRepair();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPTclaimIR1.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    // diagnosticAndVerificationPageObj.selectInternalReparation();
    // diagnosticAndVerificationPageObj.clickSubmitButton();

    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnWarrantyAccepted();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
  it("Create claim IR2-UW LMPT ref MDH with pixis order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimIR2.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimIR2.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimIR2.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimIR2.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimIR2.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimIR2.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();

    // choiceSymptomPageObj.clickButtonTakeNoteAlert();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimIR2.productReference,
      testData.LMPTclaimIR2.productLabel,
      testData.LMPTclaimIR2.invoiceId,
      testData.LMPTclaimIR2.invoiceCreationDate,
      testData.LMPTclaimIR2.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimIR2.customerId,
      testData.LMPTclaimIR2.customerLastName,
      testData.LMPTclaimIR2.customerTelephone,
      testData.LMPTclaimIR2.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimIR2.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeInternalRepair();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPTclaimIR2.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    // diagnosticAndVerificationPageObj.selectInternalReparation();
    // diagnosticAndVerificationPageObj.clickSubmitButton();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnWarrantyAccepted();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
  it("Create claim IR3-OW LMPT ref MDH with pixis order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimIR3.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimIR3.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimIR3.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimIR3.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimIR3.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimIR3.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();

    // choiceSymptomPageObj.clickButtonTakeNoteAlert();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimIR3.productReference,
      testData.LMPTclaimIR3.productLabel,
      testData.LMPTclaimIR3.invoiceId,
      testData.LMPTclaimIR3.invoiceCreationDate,
      testData.LMPTclaimIR3.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimIR3.customerId,
      testData.LMPTclaimIR3.customerLastName,
      testData.LMPTclaimIR3.customerTelephone,
      testData.LMPTclaimIR3.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimIR3.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonCustomerDefault();
    customerChoiceModopPageObj.selectOperateModeInternalRepair();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPTclaimIR3.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // diagnosticAndVerificationPageObj.selectInternalReparation();
    // diagnosticAndVerificationPageObj.clickSubmitButton();

    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
});
describe("Create claim for spare parts order LMPT", () => {
  beforeEach(() => {
    cy.login(testData.login.LMPTldapSparePartIR, testData.login.password);
  });
  it("Create claim SP1-UW LMPT ref Local brand with pixis order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimSP1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimSP1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimSP1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimSP1.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimSP1.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimSP1.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();

    // choiceSymptomPageObj.clickButtonTakeNoteAlert();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimSP1.productReference,
      testData.LMPTclaimSP1.productLabel,
      testData.LMPTclaimSP1.invoiceId,
      testData.LMPTclaimSP1.invoiceCreationDate,
      testData.LMPTclaimSP1.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimSP1.customerId,
      testData.LMPTclaimSP1.customerLastName,
      testData.LMPTclaimSP1.customerTelephone,
      testData.LMPTclaimSP1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimSP1.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSparePartOrder();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPTclaimSP1.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    choiceOfPartsToOrderPageObj.selectSparePart();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    choiceOfPartsToOrderPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    checkOrderSparePartPageObj.clickSubmitButton(
      testData.LMPTclaimSP1.submitButtonEnglish
    );

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
  it("Create claim SP2-OW LMPT ref MDH with pixis order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimSP2.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimSP2.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimSP2.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimSP2.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimSP2.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimSP2.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();

    // choiceSymptomPageObj.clickButtonTakeNoteAlert();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimSP2.productReference,
      testData.LMPTclaimSP2.productLabel,
      testData.LMPTclaimSP2.invoiceId,
      testData.LMPTclaimSP2.invoiceCreationDate,
      testData.LMPTclaimSP2.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimSP2.customerId,
      testData.LMPTclaimSP2.customerLastName,
      testData.LMPTclaimSP2.customerTelephone,
      testData.LMPTclaimSP2.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimSP2.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // customerChoiceModopPageObj.selectReasonCustomerDefault();
    customerChoiceModopPageObj.selectWarrantyReason(
      testData.LMPTclaimSP2.setupFirstReasonDisplay,
      testData.LMPTclaimSP2.warrantyReason
    );
    customerChoiceModopPageObj.selectOperateModeSparePartOrder();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPTclaimSP2.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    choiceOfPartsToOrderPageObj.selectSparePart();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    choiceOfPartsToOrderPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    checkOrderSparePartPageObj.clickSubmitButton(
      testData.LMPTclaimSP2.submitButtonEnglish
    );

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
});
describe("Create claim external repair LMPT", () => {
  beforeEach(() => {
    cy.login(testData.login.LMPTldapSwapER, testData.login.password);
  });
  it("Create claim external repair ER1-UW LMPT with DPD label & LocalBrand repair by supplier local brand & agreement & expedition with backo order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimER1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimER1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimER1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimER1.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimER1.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimER1.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimER1.productReference,
      testData.LMPTclaimER1.productLabel,
      testData.LMPTclaimER1.invoiceId,
      testData.LMPTclaimER1.invoiceCreationDate,
      testData.LMPTclaimER1.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimER1.customerId,
      testData.LMPTclaimER1.customerLastName,
      testData.LMPTclaimER1.customerTelephone,
      testData.LMPTclaimER1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimER1.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();
  });
  it("Create claim external repair ER2-UW LMPT localBrand repair by repairer & No agreement & Pick-Up with backo order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimER2.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimER2.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimER2.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimER2.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimER2.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimER2.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimER2.productReference,
      testData.LMPTclaimER2.productLabel,
      testData.LMPTclaimER2.invoiceId,
      testData.LMPTclaimER2.invoiceCreationDate,
      testData.LMPTclaimER2.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimER2.customerId,
      testData.LMPTclaimER2.customerLastName,
      testData.LMPTclaimER2.customerTelephone,
      testData.LMPTclaimER2.customerEmail
    );
    infosPageObj.verifyPay();
    // choiceSymptomPageObj.clickButtonTakeNoteAlert();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimER2.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();
  });
  it("Create claim external repair ER3-UW LMPT RepairMDH & No agreement & Pick-Up with backo order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimER3.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimER3.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimER3.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimER3.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimER3.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimER3.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimER3.productReference,
      testData.LMPTclaimER3.productLabel,
      testData.LMPTclaimER3.invoiceId,
      testData.LMPTclaimER3.invoiceCreationDate,
      testData.LMPTclaimER3.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimER3.customerId,
      testData.LMPTclaimER3.customerLastName,
      testData.LMPTclaimER3.customerTelephone,
      testData.LMPTclaimER3.customerEmail
    );
    infosPageObj.verifyPay();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimER3.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();
  });
  it("Create claim external repair ER4-UW LMPT RepairMDH & No agreement & Expedition with backo order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimER4.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimER4.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimER4.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimER4.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimER4.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimER4.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();

    // choiceSymptomPageObj.clickButtonTakeNoteAlert();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimER4.productReference,
      testData.LMPTclaimER4.productLabel,
      testData.LMPTclaimER4.invoiceId,
      testData.LMPTclaimER4.invoiceCreationDate,
      testData.LMPTclaimER4.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimER4.customerId,
      testData.LMPTclaimER4.customerLastName,
      testData.LMPTclaimER4.customerTelephone,
      testData.LMPTclaimER4.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimER4.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();
  });
  it("Create claim external repair ER5-OW LMPT RepairMDH & Expedition with backo order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimER5.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimER5.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimER5.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimER5.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimER5.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimER5.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();

    createClaimPageObj.clickBtnDeclareNewReparation();

    infosPageObj.verifyProductDetails(
      testData.LMPTclaimER5.productReference,
      testData.LMPTclaimER5.productLabel,
      testData.LMPTclaimER5.invoiceId,
      testData.LMPTclaimER5.invoiceCreationDate,
      testData.LMPTclaimER5.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPTclaimER5.customerId,
      testData.LMPTclaimER5.customerLastName,
      testData.LMPTclaimER5.customerTelephone,
      testData.LMPTclaimER5.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimER5.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();
  });
  it("Create claim external repair ER6-OW LMPT RepairMDH & pickup with backo order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPTclaimER6.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPTclaimER6.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPTclaimER6.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPTclaimER6.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPTclaimER6.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPTclaimER6.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.LMPTclaimER6.productReference,
      testData.LMPTclaimER6.productLabel,
      testData.LMPTclaimER6.invoiceId,
      testData.LMPTclaimER6.invoiceCreationDate,
      testData.LMPTclaimER6.supplier
    );
    // infosPageObj.verifyCustomerDetails(
    //   testData.LMPTclaimER6.customerId,
    //   testData.LMPTclaimER6.customerLastName,
    //   testData.LMPTclaimER6.customerTelephone,
    //   testData.LMPTclaimER6.customerEmail
    // );
    infosPageObj.verifyPay();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPTclaimER6.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();
  });
});
