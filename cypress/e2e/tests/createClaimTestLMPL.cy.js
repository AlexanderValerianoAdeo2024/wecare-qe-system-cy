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

describe("Create claim internal repair", () => {
  beforeEach(() => {
    cy.login(testData.login.ldapSparePartIR, testData.login.password);
  });

  it.skip("Create claim IR1-UW ref Local brand with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimIR1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimIR1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimIR1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimIR1.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimIR1.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimIR1.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    infosPageObj.verifyProductDetails(
      testData.claimIR1.productReference,
      testData.claimIR1.productLabel,
      testData.claimIR1.invoiceId,
      testData.claimIR1.invoiceCreationDate,
      testData.claimIR1.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimIR1.customerId,
      testData.claimIR1.customerLastName,
      testData.claimIR1.customerTelephone,
      testData.claimIR1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimIR1.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    surveyPageObj.clickBtnCancelSurvey();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeInternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimIR1.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    diagnosticAndVerificationPageObj.selectInternalReparation();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    diagnosticAndVerificationPageObj.clickSubmitButton();
  });
  it.skip("Create claim IR2-UW ref MDH with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimIR2.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimIR2.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimIR2.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimIR2.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimIR2.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimIR2.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();
    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    infosPageObj.verifyProductDetails(
      testData.claimIR2.productReference,
      testData.claimIR2.productLabel,
      testData.claimIR2.invoiceId,
      testData.claimIR2.invoiceCreationDate,
      testData.claimIR2.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimIR2.customerId,
      testData.claimIR2.customerLastName,
      testData.claimIR2.customerTelephone,
      testData.claimIR2.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimIR2.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeInternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimIR2.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    diagnosticAndVerificationPageObj.selectInternalReparation();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    diagnosticAndVerificationPageObj.clickSubmitButton();
  });
  it.skip("Create claim IR3-OW ref MDH with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimIR3.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimIR3.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimIR3.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimIR3.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimIR3.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimIR3.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();

    infosPageObj.verifyProductDetails(
      testData.claimIR3.productReference,
      testData.claimIR3.productLabel,
      testData.claimIR3.invoiceId,
      testData.claimIR3.invoiceCreationDate,
      testData.claimIR3.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimIR3.customerId,
      testData.claimIR3.customerLastName,
      testData.claimIR3.customerTelephone,
      testData.claimIR3.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimIR3.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    // customerChoiceModopPageObj.selectReasonWarrantyPeriodExceeded();
    customerChoiceModopPageObj.selectWarrantyReason(
      testData.claimIR3.setupFirstReasonDisplay,
      testData.claimIR3.warrantyReason
    );
    customerChoiceModopPageObj.selectOperateModeInternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimIR3.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    paymentStorePageObj.enterInvoiceNumber(
      testData.claimIR3.invoiceNumberPayInStore
    );

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    paymentStorePageObj.clickSubmitButton();

    diagnosticAndVerificationPageObj.selectInternalReparation();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    diagnosticAndVerificationPageObj.clickSubmitButton();
  });
});
describe("Create claim for spare parts order", () => {
  beforeEach(() => {
    cy.login(testData.login.LMPLldapSwapER, testData.login.password);
  });
  it("Create claim SP1-UW ref Local brand with pixis order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPLclaimSP1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPLclaimSP1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPLclaimSP1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPLclaimSP1.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPLclaimSP1.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPLclaimSP1.customerId
    );
    createClaimPageObj.selectLegalForm();
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    // infosPageObj.verifyProductDetails(
    //   testData.LMPLclaimSP1.productReference,
    //   testData.LMPLclaimSP1.productLabel,
    //   testData.LMPLclaimSP1.invoiceId,
    //   testData.LMPLclaimSP1.invoiceCreationDate,
    //   testData.LMPLclaimSP1.supplier
    // );
    // infosPageObj.verifyCustomerDetails(
    //   testData.LMPLclaimSP1.customerId,
    //   testData.LMPLclaimSP1.customerLastName,
    //   testData.LMPLclaimSP1.customerTelephone,
    //   testData.LMPLclaimSP1.customerEmail
    // );
    // infosPageObj.verifyPay();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPLclaimSP1.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    customerChoiceModopPageObj.selectWarrantyReason(
      testData.LMPLclaimSP1.setupFirstReasonDisplay,
      testData.LMPLclaimSP1.warrantyReason
    );
    customerChoiceModopPageObj.selectOperateModeSparePartOrder();
    customerChoiceModopPageObj.selectRepairInCustomerChoiceField();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPLclaimSP1.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    choiceOfPartsToOrderPageObj.selectSparePart();
    // cy.screenshot("register/ScreenshotSP1");
    choiceOfPartsToOrderPageObj.clickSubmitButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPLclaimSP1.symptom);

    // choiceOfPartsToOrderPageObj.clickConfirmButtonInPopup();

    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // infosPageObj.verifySymptomDisplay(testData.LMPLclaimSP1.symptom);

    checkOrderSparePartPageObj.clickSubmitButton(
      testData.LMPLclaimSP1.submitButtonEnglish
    );
  });
  it("Create claim SP2-UW ref MDH with pixis order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPLclaimSP2.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPLclaimSP2.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPLclaimSP2.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPLclaimSP2.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPLclaimSP2.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPLclaimSP2.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    // infosPageObj.verifyProductDetails(
    //   testData.LMPLclaimSP2.productReference,
    //   testData.LMPLclaimSP2.productLabel,
    //   testData.LMPLclaimSP2.invoiceId,
    //   testData.LMPLclaimSP2.invoiceCreationDate,
    //   testData.LMPLclaimSP2.supplier
    // );
    // infosPageObj.verifyCustomerDetails(
    //   testData.LMPLclaimSP2.customerId,
    //   testData.LMPLclaimSP2.customerLastName,
    //   testData.LMPLclaimSP2.customerTelephone,
    //   testData.LMPLclaimSP2.customerEmail
    // );
    // infosPageObj.verifyPay();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPLclaimSP2.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectWarrantyReason(
      testData.LMPLclaimSP2.setupFirstReasonDisplay,
      testData.LMPLclaimSP2.warrantyReason
    );
    customerChoiceModopPageObj.selectOperateModeSparePartOrder();
    customerChoiceModopPageObj.selectRepairInCustomerChoiceField();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPLclaimSP2.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    choiceOfPartsToOrderPageObj.selectSparePart();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    choiceOfPartsToOrderPageObj.clickSubmitButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    checkOrderSparePartPageObj.clickSubmitButton(
      testData.LMPLclaimSP2.submitButtonEnglish
    );
  });
  it.skip("Create claim SP3-OW ref MDH with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimSP3.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimSP3.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimSP3.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimSP3.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimSP3.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimSP3.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimSP3.productReference,
      testData.claimSP3.productLabel,
      testData.claimSP3.invoiceId,
      testData.claimSP3.invoiceCreationDate,
      testData.claimSP3.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimSP3.customerId,
      testData.claimSP3.customerLastName,
      testData.claimSP3.customerTelephone,
      testData.claimSP3.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimSP3.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // customerChoiceModopPageObj.selectReasonCustomerDefault();
    customerChoiceModopPageObj.selectWarrantyReason(
      testData.claimSP3.setupFirstReasonDisplay,
      testData.claimSP3.warrantyReason
    );
    customerChoiceModopPageObj.selectOperateModeSparePartOrder();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimSP3.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    choiceOfPartsToOrderPageObj.selectSparePart();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    choiceOfPartsToOrderPageObj.clickSubmitButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    checkOrderSparePartPageObj.clickSubmitButton(
      testData.claimSP3.submitButtonFrench
    );
  });
  it.skip("Create claim SP4-OW ref MDH with pixis order & unreferenced spare part", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimSP3.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimSP3.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimSP3.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimSP3.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimSP3.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimSP3.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimSP3.productReference,
      testData.claimSP3.productLabel,
      testData.claimSP3.invoiceId,
      testData.claimSP3.invoiceCreationDate,
      testData.claimSP3.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimSP3.customerId,
      testData.claimSP3.customerLastName,
      testData.claimSP3.customerTelephone,
      testData.claimSP3.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimSP3.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonCustomerDefault();
    customerChoiceModopPageObj.selectOperateModeSparePartOrder();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimSP3.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    choiceOfPartsToOrderPageObj.selectSparePart();
    choiceOfPartsToOrderPageObj.clickSubmitButton();
  });
});
describe("Create claim for backo380 spare parts order", () => {
  beforeEach(() => {
    cy.login(testData.login.ldapBacko380SP1, testData.login.password);
  });
  it.skip("Create claim backo380 SP1-UW ref Local brand with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimBacko380SP1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimBacko380SP1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimBacko380SP1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimBacko380SP1.productReference
    );
    createClaimPageObj.verifyProductTitle(
      testData.claimBacko380SP1.productLabel
    );

    createClaimPageObj.enterCustomerReferenceFR(
      testData.claimBacko380SP1.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimBacko380SP1.productReference,
      testData.claimBacko380SP1.productLabel,
      testData.claimBacko380SP1.invoiceId,
      testData.claimBacko380SP1.invoiceCreationDate,
      testData.claimBacko380SP1.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimBacko380SP1.customerId,
      testData.claimBacko380SP1.customerLastName,
      testData.claimBacko380SP1.customerTelephone,
      testData.claimBacko380SP1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimBacko380SP1.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    surveyPageObj.clickBtnCancelSurvey();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimBacko380SP1.symptom);
  });
  it.skip("Create claim backo380 SP2-UW ref MDH with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimBacko380SP2.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimBacko380SP2.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimBacko380SP2.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimBacko380SP2.productReference
    );
    createClaimPageObj.verifyProductTitle(
      testData.claimBacko380SP2.productLabel
    );

    createClaimPageObj.enterCustomerReferenceFR(
      testData.claimBacko380SP2.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimBacko380SP2.productReference,
      testData.claimBacko380SP2.productLabel,
      testData.claimBacko380SP2.invoiceId,
      testData.claimBacko380SP2.invoiceCreationDate,
      testData.claimBacko380SP2.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimBacko380SP2.customerId,
      testData.claimBacko380SP2.customerLastName,
      testData.claimBacko380SP2.customerTelephone,
      testData.claimBacko380SP2.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimBacko380SP2.symptom);
    choiceSymptomPageObj.uploadSingleFile(
      pdfFilePath,
      testData.claimBacko380SP2.textLinkUpload
    );
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSparePartOrder();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimBacko380SP2.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();
    choiceOfPartsToOrderPageObj.selectSparePart();
    choiceOfPartsToOrderPageObj.clickSubmitButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimBacko380SP2.symptom);

    checkOrderSparePartPageObj.clickSubmitButton(
      testData.claimBacko380SP2.submitButtonFrench
    );
  });
  it.skip("Create claim backo380 SP3-OW ref Local brand with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimBacko380SP3.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimBacko380SP3.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimBacko380SP3.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimBacko380SP3.productReference
    );
    createClaimPageObj.verifyProductTitle(
      testData.claimBacko380SP3.productLabel
    );

    createClaimPageObj.enterCustomerReferenceFR(
      testData.claimBacko380SP3.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimBacko380SP3.productReference,
      testData.claimBacko380SP3.productLabel,
      testData.claimBacko380SP3.invoiceId,
      testData.claimBacko380SP3.invoiceCreationDate,
      testData.claimBacko380SP3.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimBacko380SP3.customerId,
      testData.claimBacko380SP3.customerLastName,
      testData.claimBacko380SP3.customerTelephone,
      testData.claimBacko380SP3.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimBacko380SP3.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // customerChoiceModopPageObj.selectReasonCustomerDefault();
    customerChoiceModopPageObj.selectWarrantyReason(
      testData.claimBacko380SP3.setupFirstReasonDisplay,
      testData.claimBacko380SP3.warrantyReason
    );
    customerChoiceModopPageObj.selectOperateModeSparePartOrder();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimBacko380SP3.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    choiceOfPartsToOrderPageObj.selectSparePart();
    choiceOfPartsToOrderPageObj.clickSubmitButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimBacko380SP3.symptom);

    checkOrderSparePartPageObj.clickSubmitButton(
      testData.claimBacko380SP3.submitButtonFrench
    );
  });
});
describe("Create claim backo380 internal repair", () => {
  beforeEach(() => {
    cy.login(testData.login.ldapBacko380SP1, testData.login.password);
  });
  it.skip("Create claim backo380 IR1-UW ref Local brand with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimBacko380IR1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimBacko380IR1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimBacko380IR1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimBacko380IR1.productReference
    );
    createClaimPageObj.verifyProductTitle(
      testData.claimBacko380IR1.productLabel
    );

    createClaimPageObj.enterCustomerReferenceFR(
      testData.claimBacko380IR1.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimBacko380IR1.productReference,
      testData.claimBacko380IR1.productLabel,
      testData.claimBacko380IR1.invoiceId,
      testData.claimBacko380IR1.invoiceCreationDate,
      testData.claimBacko380IR1.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimBacko380IR1.customerId,
      testData.claimBacko380IR1.customerLastName,
      testData.claimBacko380IR1.customerTelephone,
      testData.claimBacko380IR1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimBacko380IR1.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    surveyPageObj.clickBtnCancelSurvey();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeInternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimBacko380IR1.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    diagnosticAndVerificationPageObj.selectInternalReparation();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    diagnosticAndVerificationPageObj.clickSubmitButton();
  });
  it.skip("Create claim backo380 IR2-UW ref MDH with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimBacko380IR2.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimBacko380IR2.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimBacko380IR2.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimBacko380IR2.productReference
    );
    createClaimPageObj.verifyProductTitle(
      testData.claimBacko380IR2.productLabel
    );

    createClaimPageObj.enterCustomerReferenceFR(
      testData.claimBacko380IR2.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimBacko380IR2.productReference,
      testData.claimBacko380IR2.productLabel,
      testData.claimBacko380IR2.invoiceId,
      testData.claimBacko380IR2.invoiceCreationDate,
      testData.claimBacko380IR2.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimBacko380IR2.customerId,
      testData.claimBacko380IR2.customerLastName,
      testData.claimBacko380IR2.customerTelephone,
      testData.claimBacko380IR2.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimBacko380IR2.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeInternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimBacko380IR2.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    diagnosticAndVerificationPageObj.selectInternalReparation();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    diagnosticAndVerificationPageObj.clickSubmitButton();
  });
  it.skip("Create claim backo380 IR3-OW ref Local brand with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimBacko380IR3.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimBacko380IR3.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimBacko380IR3.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimBacko380IR3.productReference
    );
    createClaimPageObj.verifyProductTitle(
      testData.claimBacko380IR3.productLabel
    );

    createClaimPageObj.enterCustomerReferenceFR(
      testData.claimBacko380IR3.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimBacko380IR3.productReference,
      testData.claimBacko380IR3.productLabel,
      testData.claimBacko380IR3.invoiceId,
      testData.claimBacko380IR3.invoiceCreationDate,
      testData.claimBacko380IR3.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimBacko380IR3.customerId,
      testData.claimBacko380IR3.customerLastName,
      testData.claimBacko380IR3.customerTelephone,
      testData.claimBacko380IR3.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimBacko380IR3.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonWarrantyPeriodExceeded();
    customerChoiceModopPageObj.selectOperateModeInternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimBacko380IR3.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    paymentStorePageObj.enterInvoiceNumber(
      testData.claimBacko380IR3.invoiceNumberPayInStore
    );

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    paymentStorePageObj.clickSubmitButton();

    diagnosticAndVerificationPageObj.selectInternalReparation();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    diagnosticAndVerificationPageObj.clickSubmitButton();
  });
});
describe("Create claim external repair LMPL", () => {
  beforeEach(() => {
    cy.login(testData.login.LMPLldapSwapER, testData.login.password);
  });
  it("Create claim external repair ER1-UW with DPD label & LocalBrand repair by supplier local brand & agreement & expedition with backo order", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPLclaimER1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPLclaimER1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPLclaimER1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPLclaimER1.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPLclaimER1.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPLclaimER1.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();

    infosPageObj.verifyProductDetails(
      testData.LMPLclaimER1.productReference,
      testData.LMPLclaimER1.productLabel,
      testData.LMPLclaimER1.invoiceId,
      testData.LMPLclaimER1.invoiceCreationDate,
      testData.LMPLclaimER1.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPLclaimER1.customerId,
      testData.LMPLclaimER1.customerLastName,
      testData.LMPLclaimER1.customerTelephone,
      testData.LMPLclaimER1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPLclaimER1.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    filesPageObj.clickFilesSection();
    // filesPageObj.verifyDiagProlongeGeneration(testData.LMPLclaimER1.reportOne);
    infosPageObj.clickInfosSection();

    // customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectWarrantyReason(
      testData.LMPLclaimER1.setupFirstReasonDisplay,
      testData.LMPLclaimER1.warrantyReason
    );
    customerChoiceModopPageObj.selectOperateModeExternalRepair();
    customerChoiceModopPageObj.selectRepairInCustomerChoiceField();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // infosPageObj.verifySymptomDisplay(testData.LMPLclaimER1.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    filesPageObj.clickFilesSection();
    // filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGeneration(
    //   testData.LMPLclaimER1.reportCareAfterSalesService
    // );
    infosPageObj.clickInfosSection();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    // filesPageObj.verifyRepairAgreementRequestRepairerReportGeneration(
    //   testData.LMPLclaimER1.reportRepairAgreementRequest
    // );
    infosPageObj.clickInfosSection();

    waitingReparationAgreementPageObj.selectRequestAccepted();
    waitingReparationAgreementPageObj.enterAgreementReparationNumber(
      testData.LMPLclaimER1.agreementReparationNumber
    );
    waitingReparationAgreementPageObj.selectProductSentForRepair();
    // waitingReparationAgreementPageObj.verifyLinkModifyRepairerEnable();
    waitingReparationAgreementPageObj.clickValidateButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    confirmRepairerCarrierPageObj.selectOptionExpedition();
    confirmRepairerCarrierPageObj.selectOptionMakitaLMPL();
    confirmRepairerCarrierPageObj.selectOptionDHL();
    confirmRepairerCarrierPageObj.clickButtonValidate();

    filesPageObj.clickFilesSection();
    // filesPageObj.verifyWorkOrderRepairGeneration(
    //   testData.LMPLclaimER1.reportWorkOrderRepair
    // );
    // filesPageObj.verifyShipmentLabelReportGeneration(
    //   testData.LMPLclaimER1.shipmentLabelReport
    // );
    // filesPageObj.verifyTransportVoucherRepairerReportGeneration(
    //   testData.LMPLclaimER1.reportTransportVoucherRepairer
    // );
    infosPageObj.clickInfosSection();

    parcelToSendPageObj.selectCheckboxPackageSent();
    parcelToSendPageObj.clickSubmitButton();

    filesPageObj.clickFilesSection();
    // filesPageObj.verifyWorkOrderRepairGenerationER1(
    //   testData.LMPLclaimER1.reportWorkOrderRepair
    // );
    infosPageObj.clickInfosSection();

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
    // filesPageObj.verifyCustomerPickupOrderReportGenerationExpeditionTreatment(
    //   testData.LMPLclaimER1.customerPickupOrder
    // );
    infosPageObj.clickInfosSection();

    awaitingCustomerPickupProductPageObj.selectCheckboxRecoveredProduct();
    awaitingCustomerPickupProductPageObj.clickSubmitButton();
  });
  it.skip("Create claim external repair ER1-UW with DPD label & LocalBrand repair by supplier local brand & agreement & expedition with backo order & Ticket reservation anomaly", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimER1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimER1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimER1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimER1.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimER1.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimER1.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimER1.productReference,
      testData.claimER1.productLabel,
      testData.claimER1.invoiceId,
      testData.claimER1.invoiceCreationDate,
      testData.claimER1.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimER1.customerId,
      testData.claimER1.customerLastName,
      testData.claimER1.customerTelephone,
      testData.claimER1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimER1.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyDiagProlongeGeneration(testData.claimER1.reportOne);
    infosPageObj.clickInfosSection();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeExternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimER1.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGeneration(
      testData.claimER1.reportCareAfterSalesService
    );
    infosPageObj.clickInfosSection();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    confirmRepairerCarrierPageObj.selectOptionDPDCarrier();
    confirmRepairerCarrierPageObj.selectOptionChronopostCarrier();
    confirmRepairerCarrierPageObj.selectOptionBoschRepairer();
    confirmRepairerCarrierPageObj.clickButtonValidate();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyRepairAgreementRequestRepairerReportGeneration(
      testData.claimER1.reportRepairAgreementRequest
    );
    infosPageObj.clickInfosSection();

    waitingReparationAgreementPageObj.selectRequestAccepted();
    waitingReparationAgreementPageObj.enterAgreementReparationNumber(
      testData.claimER1.agreementReparationNumber
    );
    waitingReparationAgreementPageObj.selectProductSentForRepair();
    waitingReparationAgreementPageObj.verifyLinkModifyReapirerEnable();
    waitingReparationAgreementPageObj.clickValidateButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyWorkOrderRepairGeneration(
      testData.claimER1.reportWorkOrderRepair
    );
    infosPageObj.clickInfosSection();

    //***Transport ticket anomaly  */

    // transportTicketReservationAnomalyObj.enterTrackingNumberAndSelectCarrier(
    //   testData.claimER1.trackingNumber,
    //   testData.claimER1.carrier
    // );
    // transportTicketReservationAnomalyObj.clickSubmitButton();

    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // filesPageObj.clickFilesSection();
    // filesPageObj.verifyTransportVoucherRepairerReportGenerationMDH(
    //   testData.claimER1.reportTransportVoucherRepairer
    // );
    // infosPageObj.clickInfosSection();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyShipmentLabelReportGeneration(
      testData.claimER1.shipmentLabelReport
    );
    filesPageObj.verifyTransportVoucherRepairerReportGeneration(
      testData.claimER1.reportTransportVoucherRepairer
    );

    parcelToSendPageObj.selectCheckboxPackageSent();
    parcelToSendPageObj.clickSubmitButton();

    // filesPageObj.verifyRepairerRepairRequestReportGeneration(
    //   testData.claimER1.reportWorkOrderRepair
    // );
    filesPageObj.verifyWorkOrderRepairGenerationMDH(
      testData.claimER1.reportWorkOrderRepair
    );
    infosPageObj.clickInfosSection();

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
    // filesPageObj.verifyCustomerPickupOrderReportGenerationExpeditionTreatment(
    //   testData.claimER1.customerPickupOrder
    // );
    // infosPageObj.clickInfosSection();

    //***Transport ticket anomaly  */
    filesPageObj.verifyCustomerPickupOrderReportGenerationExpeditionTreatmentMDH(
      testData.claimER1.customerPickupOrder
    );

    awaitingCustomerPickupProductPageObj.selectCheckboxRecoveredProduct();
    awaitingCustomerPickupProductPageObj.clickSubmitButton();
  });
  it.skip("Create claim external repair ER2-UW localBrand repair by repairer & No agreement & Pick-Up with backo order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimER2.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimER2.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimER2.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimER2.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimER2.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimER2.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();

    infosPageObj.verifyProductDetails(
      testData.claimER2.productReference,
      testData.claimER2.productLabel,
      testData.claimER2.invoiceId,
      testData.claimER2.invoiceCreationDate,
      testData.claimER2.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimER2.customerId,
      testData.claimER2.customerLastName,
      testData.claimER2.customerTelephone,
      testData.claimER2.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimER2.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    surveyPageObj.clickBtnCancelSurvey();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyDiagProlongeGeneration(testData.claimER2.reportOne);
    infosPageObj.clickInfosSection();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeExternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimER2.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();
    // *** This radio button is not mandatory is not setup ***//
    // confirmRepairerCarrierPageObj.selectTransportModePickup();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGeneration(
      testData.claimER2.reportCareAfterSalesService
    );
    infosPageObj.clickInfosSection();

    confirmRepairerCarrierPageObj.selectOptionARMRepairer();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    confirmRepairerCarrierPageObj.clickButtonValidate();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyWorkOrderRepairGeneration(
      testData.claimER2.reportWorkOrderRepair
    );
    filesPageObj.verifyTransportVoucherRepairerReportGenerationPickUp(
      testData.claimER2.reportTransportVoucherRepairer
    );
    infosPageObj.clickInfosSection();

    waitingProductPickupPageObj.enterTrackingNumberPickupAndCarrierFrench(
      testData.claimER2.trackingNumber,
      testData.claimER2.carrier
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
    filesPageObj.verifyCustomerPickupOrderReportGenerationPickupTreatment(
      testData.claimER2.customerPickupOrder
    );
    infosPageObj.clickInfosSection();

    awaitingCustomerPickupProductPageObj.selectCheckboxRecoveredProduct();
    awaitingCustomerPickupProductPageObj.clickSubmitButton();
  });
  it.skip("Create claim external repair ER3-UW RepairMDH & No agreement & Pick-Up with backo order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimER3.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimER3.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimER3.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimER3.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimER3.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimER3.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimER3.productReference,
      testData.claimER3.productLabel,
      testData.claimER3.invoiceId,
      testData.claimER3.invoiceCreationDate,
      testData.claimER3.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimER3.customerId,
      testData.claimER3.customerLastName,
      testData.claimER3.customerTelephone,
      testData.claimER3.customerEmail
    );

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimER3.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    infosPageObj.verifyPay();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyDiagProlongeGeneration(testData.claimER3.reportOne);
    infosPageObj.clickInfosSection();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeExternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    infosPageObj.verifySymptomDisplay(testData.claimER3.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGeneration(
      testData.claimER3.reportCareAfterSalesService
    );
    infosPageObj.clickInfosSection();

    confirmRepairerCarrierPageObj.selectTransportModePickup();
    confirmRepairerCarrierPageObj.selectOptionCordonRepairer();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    confirmRepairerCarrierPageObj.clickButtonValidate();

    // waitingReparationAgreementPageObj.selectRequestAccepted();
    // waitingReparationAgreementPageObj.enterAgreementReparationNumber(
    //   testData.claimER3.agreementReparationNumber
    // );
    // waitingReparationAgreementPageObj.selectProductSentForRepair();
    // waitingReparationAgreementPageObj.clickValidateButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyRequestForRepairRemovalMDH(
      testData.claimER3.requestForRepairRemoval
    );
    filesPageObj.verifyWorkOrderRepairGeneration(
      testData.claimER3.reportWorkOrderRepair
    );
    filesPageObj.verifyTransportVoucherRepairerReportGenerationMDH(
      testData.claimER3.reportTransportVoucherRepairer
    );
    infosPageObj.clickInfosSection();

    waitingProductPickupPageObj.enterTrackingNumberPickupAndCarrierFrench(
      testData.claimER3.trackingNumber,
      testData.claimER3.carrier
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
    filesPageObj.verifyCustomerPickupOrderRequestAgreementPickupTreatmentMDH(
      testData.claimER3.customerPickupOrder
    );
    infosPageObj.clickInfosSection();

    awaitingCustomerPickupProductPageObj.selectCheckboxRecoveredProduct();
    awaitingCustomerPickupProductPageObj.clickSubmitButton();
  });
  it.skip("Create claim external repair ER4-UW RepairMDH & No agreement & Expedition with backo order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimER4.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimER4.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimER4.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimER4.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimER4.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimER4.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();

    infosPageObj.verifyProductDetails(
      testData.claimER4.productReference,
      testData.claimER4.productLabel,
      testData.claimER4.invoiceId,
      testData.claimER4.invoiceCreationDate,
      testData.claimER4.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimER4.customerId,
      testData.claimER4.customerLastName,
      testData.claimER4.customerTelephone,
      testData.claimER4.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimER4.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyDiagProlongeGeneration(testData.claimER4.reportOne);
    infosPageObj.clickInfosSection();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeExternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    infosPageObj.verifySymptomDisplay(testData.claimER4.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGeneration(
      testData.claimER4.reportCareAfterSalesService
    );
    infosPageObj.clickInfosSection();

    confirmRepairerCarrierPageObj.selectOptionDPDCarrier();
    confirmRepairerCarrierPageObj.selectOptionCordonRepairer();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    confirmRepairerCarrierPageObj.clickButtonValidate();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyWorkOrderRepairGenerationMDHER4(
      testData.claimER4.reportWorkOrderRepair
    );
    infosPageObj.clickInfosSection();

    // waitingReparationAgreementPageObj.selectRequestAccepted();
    // waitingReparationAgreementPageObj.enterAgreementReparationNumber(
    //   testData.claimER4.agreementReparationNumber
    // );
    // waitingReparationAgreementPageObj.selectProductSentForRepair();
    // waitingReparationAgreementPageObj.verifyLinkModifyReapirerEnable();
    // waitingReparationAgreementPageObj.clickValidateButton();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyShipmentLabelReportGenerationMDH(
      testData.claimER4.shipmentLabelReport
    );
    filesPageObj.verifyTransportVoucherRepairerReportGenerationMDH(
      testData.claimER4.reportTransportVoucherRepairer
    );
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
    filesPageObj.verifyCustomerPickupOrderReportGenerationExpeditionTreatmentMDH(
      testData.claimER4.customerPickupOrder
    );
    infosPageObj.clickInfosSection();

    awaitingCustomerPickupProductPageObj.selectCheckboxRecoveredProduct();
    awaitingCustomerPickupProductPageObj.clickSubmitButton();
  });
  it.skip("Create claim external repair ER5-OW RepairMDH & Expedition with backo order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimEROW5.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimEROW5.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimEROW5.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimEROW5.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimEROW5.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimEROW5.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();

    infosPageObj.verifyProductDetails(
      testData.claimEROW5.productReference,
      testData.claimEROW5.productLabel,
      testData.claimEROW5.invoiceId,
      testData.claimEROW5.invoiceCreationDate,
      testData.claimEROW5.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimEROW5.customerId,
      testData.claimEROW5.customerLastName,
      testData.claimEROW5.customerTelephone,
      testData.claimEROW5.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimEROW5.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyDiagProlongeGeneration(testData.claimEROW5.reportOne);
    infosPageObj.clickInfosSection();

    // customerChoiceModopPageObj.selectReasonWarrantyPeriodExceeded();
    customerChoiceModopPageObj.selectWarrantyReason(
      testData.claimEROW5.setupFirstReasonDisplay,
      testData.claimEROW5.warrantyReason
    );
    customerChoiceModopPageObj.selectOperateModeExternalRepair();
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimEROW5.symptom);
    filesPageObj.clickFilesSection();
    filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGeneration(
      testData.claimEROW5.reportCareAfterSalesService
    );
    infosPageObj.clickInfosSection();

    paymentStorePageObj.enterInvoiceNumber(
      testData.claimEROW5.invoiceNumberPayInStore
    );
    paymentStorePageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    confirmRepairerCarrierPageObj.selectOptionDPDCarrier();
    // confirmRepairerCarrierPageObj.selectOptionChronopostCarrier();
    confirmRepairerCarrierPageObj.selectOptionCordonRepairer();
    confirmRepairerCarrierPageObj.clickButtonValidate();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyWorkOrderRepairGenerationMDHER4(
      testData.claimEROW5.reportWorkOrderRepair
    );
    infosPageObj.clickInfosSection();

    parcelToSendPageObj.selectCheckboxPackageSent();
    parcelToSendPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyShipmentLabelReportGenerationMDH(
      testData.claimEROW5.shipmentLabelReport
    );
    filesPageObj.verifyTransportVoucherRepairerReportGenerationMDH(
      testData.claimEROW5.reportTransportVoucherRepairer
    );
    filesPageObj.verifyWorkOrderRepairGenerationMDH(
      testData.claimEROW5.reportWorkOrderRepair
    );
    infosPageObj.clickInfosSection();

    inTransitPageObj.selectCheckboxPackageDelivered();
    inTransitPageObj.clickSubmitButton();

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
  it.skip("Create claim external repair ER5-OW RepairMDH & Expedition with backo order & transport ticket reservation anomaly", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimEROW5.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimEROW5.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimEROW5.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimEROW5.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimEROW5.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimEROW5.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();

    infosPageObj.verifyProductDetails(
      testData.claimEROW5.productReference,
      testData.claimEROW5.productLabel,
      testData.claimEROW5.invoiceId,
      testData.claimEROW5.invoiceCreationDate,
      testData.claimEROW5.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimEROW5.customerId,
      testData.claimEROW5.customerLastName,
      testData.claimEROW5.customerTelephone,
      testData.claimEROW5.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimEROW5.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyDiagProlongeGeneration(testData.claimEROW5.reportOne);
    infosPageObj.clickInfosSection();

    // customerChoiceModopPageObj.selectReasonWarrantyPeriodExceeded();
    customerChoiceModopPageObj.selectWarrantyReason(
      testData.claimEROW5.setupFirstReasonDisplay,
      testData.claimEROW5.warrantyReason
    );
    customerChoiceModopPageObj.selectOperateModeExternalRepair();
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimEROW5.symptom);
    filesPageObj.clickFilesSection();
    filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGeneration(
      testData.claimEROW5.reportCareAfterSalesService
    );
    infosPageObj.clickInfosSection();

    paymentStorePageObj.enterInvoiceNumber(
      testData.claimEROW5.invoiceNumberPayInStore
    );
    paymentStorePageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    confirmRepairerCarrierPageObj.selectOptionDPDCarrier();
    // confirmRepairerCarrierPageObj.selectOptionChronopostCarrier();
    confirmRepairerCarrierPageObj.selectOptionCordonRepairer();
    confirmRepairerCarrierPageObj.clickButtonValidate();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyWorkOrderRepairGenerationMDH(
      testData.claimEROW5.reportWorkOrderRepair
    );
    infosPageObj.clickInfosSection();

    transportTicketReservationAnomalyObj.enterTrackingNumberAndSelectCarrier(
      testData.claimEROW5.trackingNumber,
      testData.claimEROW5.carrier
    );
    transportTicketReservationAnomalyObj.clickSubmitButton();

    parcelToSendPageObj.selectCheckboxPackageSent();
    parcelToSendPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    // filesPageObj.verifyShipmentLabelReportGeneration(
    //   testData.claimEROW5.shipmentLabelReport
    // );
    filesPageObj.verifyTransportVoucherRepairerReportGenerationMDHOW(
      testData.claimEROW5.reportTransportVoucherRepairer
    );
    filesPageObj.verifyWorkOrderRepairGenerationPickUp(
      testData.claimEROW5.reportWorkOrderRepair
    );
    infosPageObj.clickInfosSection();

    inTransitPageObj.selectCheckboxPackageDelivered();
    inTransitPageObj.clickSubmitButton();

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
  it.skip("Create claim external repair ER6-OW RepairMDH & pickup with backo order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimEROW6.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimEROW6.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimEROW6.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimEROW6.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimEROW6.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimEROW6.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimEROW6.productReference,
      testData.claimEROW6.productLabel,
      testData.claimEROW6.invoiceId,
      testData.claimEROW6.invoiceCreationDate,
      testData.claimEROW6.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimEROW6.customerId,
      testData.claimEROW6.customerLastName,
      testData.claimEROW6.customerTelephone,
      testData.claimEROW6.customerEmail
    );
    infosPageObj.verifyPay();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimEROW6.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    surveyPageObj.clickBtnCancelSurvey();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyDiagProlongeGeneration(testData.claimEROW6.reportOne);
    infosPageObj.clickInfosSection();

    // customerChoiceModopPageObj.selectReasonCustomerDefault();
    customerChoiceModopPageObj.selectWarrantyReason(
      testData.claimEROW6.setupFirstReasonDisplay,
      testData.claimEROW6.warrantyReason
    );
    customerChoiceModopPageObj.selectOperateModeExternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimEROW6.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGeneration(
      testData.claimEROW6.reportCareAfterSalesService
    );
    infosPageObj.clickInfosSection();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    paymentStorePageObj.enterInvoiceNumber(
      testData.claimEROW6.invoiceNumberPayInStore
    );
    paymentStorePageObj.clickSubmitButton();

    confirmRepairerCarrierPageObj.selectOptionCordonRepairer();
    confirmRepairerCarrierPageObj.clickButtonValidate();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyRequestForRepairRemovalMDH(
      testData.claimEROW6.requestForRepairRemoval
    );
    filesPageObj.verifyWorkOrderRepairGeneration(
      testData.claimEROW6.reportWorkOrderRepair
    );
    filesPageObj.verifyTransportVoucherRepairerReportGenerationMDH(
      testData.claimEROW6.reportTransportVoucherRepairer
    );

    waitingProductPickupPageObj.enterTrackingNumberPickupAndCarrierFrench(
      testData.claimEROW6.trackingNumber,
      testData.claimEROW6.carrier
    );
    waitingProductPickupPageObj.selectCheckboxProductPickupAndSubmit();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();
  });
});
describe("Create claim LMPL SWAP", () => {
  beforeEach(() => {
    cy.login(testData.login.ldapSwapER, testData.login.password);
  });
  it.skip("Create claim LMPL Swap S1 (Supplier) / No agreement / Destruction", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPLclaimS1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPLclaimS1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPLclaimS1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPLclaimS1.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPLclaimS1.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(
      testData.LMPLclaimS1.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.LMPLclaimS1.productReference,
      testData.LMPLclaimS1.productLabel,
      testData.LMPLclaimS1.invoiceId,
      testData.LMPLclaimS1.invoiceCreationDate,
      testData.LMPLclaimS1.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMPLclaimS1.customerId,
      testData.LMPLclaimS1.customerLastName,
      testData.LMPLclaimS1.customerTelephone,
      testData.LMPLclaimS1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.selectSymptomBroken();
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyDiagProlongeGeneration(testData.LMPLclaimS1.reportOne);
    infosPageObj.clickInfosSection();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPLclaimS1.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGeneration(
      testData.LMPLclaimS1.reportCareAfterSalesService
    );
    infosPageObj.clickInfosSection();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    swapMadeForCustomerPageObj.selectRefund();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    awaitingDestructionHSproductPageObj.selectCheckBoxDestructionCompletedAndSubmit();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPLclaimS1.symptom);
    filesPageObj.clickFilesSection();
    filesPageObj.verifyCreditNoteRequestSupplierGeneration(
      testData.LMPLclaimS1.reportCreditNoteRequestSupplier
    );
    filesPageObj.verifyProductDestructionOrderReportGeneration(
      testData.LMPLclaimS1.reportProductDestructionOrder
    );
    infosPageObj.clickInfosSection();
    waitingSupplierCreditNotePageObj.selectRadioButtonCreditNoteReceived();
    waitingSupplierCreditNotePageObj.verifyButtonSubmitIsVisibleAndNotDisableAndSubmit();
  });
  it.skip("Create claim Swap S2 (Supplier) / No agreement / Expedition", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimS2.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimS2.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimS2.siteCode);
    createClaimPageObj.enterProductReference(testData.claimS2.productReference);
    createClaimPageObj.verifyProductTitle(testData.claimS2.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimS2.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimS2.productReference,
      testData.claimS2.productLabel,
      testData.claimS2.invoiceId,
      testData.claimS2.invoiceCreationDate,
      testData.claimS2.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimS2.customerId,
      testData.claimS2.customerLastName,
      testData.claimS2.customerTelephone,
      testData.claimS2.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.selectSymptomBroken();
    // choiceSymptomPageObj.enterSymptom(testData.claimS2.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimS2.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    swapMadeForCustomerPageObj.selectRefund();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    // ** reception de l'exit voucher dans l'user task "Swap to be made for the customer"

    parcelToSendPageObj.selectCheckboxPackageSent();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    parcelToSendPageObj.clickSubmitButton();

    inTransitPageObj.selectCheckboxPackageDelivered(
      testData.claimS2.labelCheckboxInTransit
    );
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    inTransitPageObj.clickSubmitButton();

    waitingSupplierCreditNotePageObj.selectRadioButtonCreditNoteReceived();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    waitingSupplierCreditNotePageObj.verifyButtonSubmitIsVisibleAndNotDisableAndSubmit();
  });
  it.skip("Create claim Swap S3 (Supplier) / No agreement / Pick-Up", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimS3.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimS3.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimS3.siteCode);
    createClaimPageObj.enterProductReference(testData.claimS3.productReference);
    createClaimPageObj.verifyProductTitle(testData.claimS3.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimS3.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimS3.productReference,
      testData.claimS3.productLabel,
      testData.claimS3.invoiceId,
      testData.claimS3.invoiceCreationDate,
      testData.claimS3.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimS3.customerId,
      testData.claimS3.customerLastName,
      testData.claimS3.customerTelephone,
      testData.claimS3.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    // choiceSymptomPageObj.enterSymptom(testData.claimS3.symptom);
    choiceSymptomPageObj.selectSymptomBroken();
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimS3.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    swapMadeForCustomerPageObj.selectRefund();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    waitingProductPickupPageObj.enterTrackingNumberPickupAndCarrierFrench(
      testData.claimS3.trackingNumber,
      testData.claimS3.carrier
    );
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    waitingProductPickupPageObj.selectCheckboxProductPickupAndSubmit();

    waitingSupplierCreditNotePageObj.selectRadioButtonCreditNoteReceived();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    waitingSupplierCreditNotePageObj.verifyButtonSubmitIsVisibleAndNotDisableAndSubmit();

    // outOfServiceProductPageObj.displayMessage(
    //   testData.LMPTclaimS3.messageOutOfService
    // );
  });
  // *** create a new test set for request agreement with LDAP 20104567
  it.skip("Create claim Swap S4 (Supplier) / Request agreement / Pick-up", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimS4.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimS4.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimS4.siteCode);
    createClaimPageObj.enterProductReference(testData.claimS4.productReference);
    createClaimPageObj.verifyProductTitle(testData.claimS4.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimS4.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimS4.productReference,
      testData.claimS4.productLabel,
      testData.claimS4.invoiceId,
      testData.claimS4.invoiceCreationDate,
      testData.claimS4.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimS4.customerId,
      testData.claimS4.customerLastName,
      testData.claimS4.customerTelephone,
      testData.claimS4.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimS4.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimS4.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    swapMadeForCustomerPageObj.selectRefund();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
  it.skip("Create claim Swap S5 (Store) / No agreement / Destruction", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimS5.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimS5.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimS5.siteCode);
    createClaimPageObj.enterProductReference(testData.claimS5.productReference);
    createClaimPageObj.verifyProductTitle(testData.claimS5.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimS5.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimS5.productReference,
      testData.claimS5.productLabel,
      testData.claimS5.invoiceId,
      testData.claimS5.invoiceCreationDate,
      testData.claimS5.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimS5.customerId,
      testData.claimS5.customerLastName,
      testData.claimS5.customerTelephone,
      testData.claimS5.customerEmail
    );
    infosPageObj.verifyPay();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    // choiceSymptomPageObj.enterSymptom(testData.claimS5.symptom);
    choiceSymptomPageObj.selectSymptomBroken();
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimS5.symptom);
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
      testData.claimS5.messageOutOfService
    );
  });
  it.skip("Create claim Swap S6 (Store) Commercial Gesture / No agreement / Destruction", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimS6.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimS6.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimS6.siteCode);
    createClaimPageObj.enterProductReference(testData.claimS6.productReference);
    createClaimPageObj.verifyProductTitle(testData.claimS6.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimS6.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimS6.productReference,
      testData.claimS6.productLabel,
      testData.claimS6.invoiceId,
      testData.claimS6.invoiceCreationDate,
      testData.claimS6.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimS6.customerId,
      testData.claimS6.customerLastName,
      testData.claimS6.customerTelephone,
      testData.claimS6.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    // choiceSymptomPageObj.enterSymptom(testData.claimS6.symptom);
    choiceSymptomPageObj.selectSymptomBroken();
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectManufacturerWarrantyCommercialGesture();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimS6.symptom);
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
      testData.claimS6.messageOutOfService
    );
  });
});
describe("Create claim home repair LMPL", () => {
  beforeEach(() => {
    cy.login(testData.login.LMPLldapHR, testData.login.password);
  });
  it("Create claim home repair HR1-UW LocalBrand", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPLclaimHR1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPLclaimHR1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPLclaimHR1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPLclaimHR1.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPLclaimHR1.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPLclaimHR1.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    createClaimPageObj.clickBtnSubmitClaim();

    createClaimPageObj.clickBtnDeclareNewReparation();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();

    // infosPageObj.verifyProductDetails(
    //   testData.LMPLclaimHR1.productReference,
    //   testData.LMPLclaimHR1.productLabel,
    //   testData.LMPLclaimHR1.invoiceId,
    //   testData.LMPLclaimHR1.invoiceCreationDate,
    //   testData.LMPLclaimHR1.supplier
    // );
    infosPageObj.verifyCustomerDetails(
      testData.LMPLclaimHR1.customerId,
      testData.LMPLclaimHR1.customerLastName,
      testData.LMPLclaimHR1.customerTelephone,
      testData.LMPLclaimHR1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPLclaimHR1.symptom);
    choiceSymptomPageObj.enterSerialNumber(
      testData.LMPLclaimHR1.serialNumberProductReference
    );
    choiceSymptomPageObj.uploadSingleFile(
      pdfFilePath,
      testData.LMPLclaimHR1.textLinkUpload
    );
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // customerChoiceModopPageObj.selectWarrantyReason(
    //   testData.LMPLclaimHR1.setupFirstReasonDisplay,
    //   testData.LMPLclaimHR1.warrantyReason
    // );
    // customerChoiceModopPageObj.selectOperateModeHomerRepair();
    // customerChoiceModopPageObj.selectRepairInCustomerChoiceField();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // infosPageObj.verifySymptomDisplay(testData.LMPLclaimHR1.symptom);
    // customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    // modifyInterventionAddressPageObj.AddComment(
    //   testData.LMPLclaimHR1.commentInterventionAddress
    // );

    // infosPageObj.verifySupplierUpdateIconIsNotVisible();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // modifyInterventionAddressPageObj.clickButtonValidate();

    // repairConfirmationPageObj.selectOptionBosch();

    // infosPageObj.verifySupplierUpdateIconIsNotVisible();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // repairConfirmationPageObj.clickButtonValidate();

    // infosPageObj.verifySupplierUpdateIconIsNotVisible();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
});
describe("Create claim SWAP LMPL", () => {
  beforeEach(() => {
    cy.login(testData.login.LMPLldapSwapER, testData.login.password);
  });
  it("Create claim Swap LMPL S1 (Supplier) / No agreement / Destruction", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPLclaimS1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPLclaimS1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPLclaimS1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPLclaimS1.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPLclaimS1.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPLclaimS1.customerId
    );
    createClaimPageObj.selectLegalForm();
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    infosPageObj.verifyProductDetailsInCreateClaim(
      testData.LMPLclaimS1.productReference,
      testData.LMPLclaimS1.productLabel,
      testData.LMPLclaimS1.supplier
    );
    createClaimPageObj.clickBtnSubmitClaim();

    // createClaimPageObj.clickBtnDeclareNewReparation();
    choiceSymptomPageObj.clickButtonTakeNoteAlert();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPLclaimS1.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPLclaimS1.symptom);

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    // infosPageObj.verifySupplierUpdateIconIsNotVisible();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    // swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();
    // swapMadeForCustomerPageObj.selectRefund();

    // infosPageObj.verifySupplierUpdateIconIsNotVisible();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // awaitingDestructionHSproductPageObj.selectCheckBoxDestructionCompletedAndSubmit();

    // infosPageObj.verifySupplierUpdateIconIsNotVisible();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // waitingSupplierCreditNotePageObj.selectRadioButtonCreditNoteReceived();
    // waitingSupplierCreditNotePageObj.verifyButtonSubmitIsVisibleAndNotDisableAndSubmit();

    // infosPageObj.verifySupplierUpdateIconIsNotVisible();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // outOfServiceProductPageObj.displayMessage(
    //   testData.LMPLclaimS1.messageOutOfService
    // );
  });
  it("Create claim Swap LMPT S2 (Supplier) / No agreement / Expedition", () => {
    homePageObj.switchToLanguage();
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMPLclaimS2.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMPLclaimS2.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMPLclaimS2.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMPLclaimS2.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMPLclaimS2.productLabel);

    createClaimPageObj.enterCustomerReferenceEN(
      testData.LMPLclaimS2.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedEN();
    infosPageObj.verifyProductDetailsInCreateClaim(
      testData.LMPLclaimS2.productReference,
      testData.LMPLclaimS2.productLabel,
      testData.LMPLclaimS2.supplier
    );
    createClaimPageObj.clickBtnSubmitClaim();

    // createClaimPageObj.clickBtnDeclareNewReparation();
    choiceSymptomPageObj.clickButtonTakeNoteAlert();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMPLclaimS2.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPLclaimS2.symptom);

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    // infosPageObj.verifySupplierUpdateIconIsNotVisible();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    // swapMadeForCustomerPageObj.selectRefund();
    // swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    // transportTicketReservationAnomalyObj.enterTrackingNumberAndSelectCarrier(
    //   testData.LMPTclaimS2.trackingNumber,
    //   testData.LMPTclaimS2.carrier
    // );
    // infosPageObj.verifySupplierUpdateIconIsNotVisible();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // transportTicketReservationAnomalyObj.clickSubmitButton();

    // parcelToSendPageObj.selectCheckboxPackageSent();
    // infosPageObj.verifySupplierUpdateIconIsNotVisible();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // parcelToSendPageObj.clickSubmitButton();

    // inTransitPageObj.selectCheckboxPackageDelivered(
    //   testData.LMPTclaimS2.labelCheckboxInTransit
    // );
    // infosPageObj.verifySupplierUpdateIconIsNotVisible();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // inTransitPageObj.clickSubmitButton();

    // waitingSupplierCreditNotePageObj.selectRadioButtonCreditNoteReceived();
    // infosPageObj.verifySupplierUpdateIconIsNotVisible();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // waitingSupplierCreditNotePageObj.verifyButtonSubmitIsVisibleAndNotDisableAndSubmit();

    // infosPageObj.verifySupplierUpdateIconIsNotVisible();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // outOfServiceProductPageObj.displayMessage(
    //   testData.LMPTclaimS2.messageOutOfService
    // );
  });
  it.skip("Create claim Swap LMPT S3 (Supplier) / No agreement / Pick-Up", () => {
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

    waitingProductPickupPageObj.enterTrackingNumberPickupAndCarrier();
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
  it.skip("Create claim Swap LMPT S4 (Supplier) / Request agreement / Pick-up", () => {
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
  it.skip("Create claim Swap LMPT S5 (Store) / No agreement / Destruction", () => {
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
  it.skip("Create claim Swap LMPT S6 (Store) Commercial Gesture / No agreement / Destruction", () => {
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

  it.skip("Create claim IR1-UW LMPT ref Local brand with pixis order", () => {
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

    diagnosticAndVerificationPageObj.selectInternalReparation();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    diagnosticAndVerificationPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
  it.skip("Create claim IR2-UW LMPT ref MDH with pixis order", () => {
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

    diagnosticAndVerificationPageObj.selectInternalReparation();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    diagnosticAndVerificationPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
  it.skip("Create claim IR3-OW LMPT ref MDH with pixis order", () => {
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

    diagnosticAndVerificationPageObj.selectInternalReparation();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    diagnosticAndVerificationPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
});
describe("Create claim for spare parts order LMPT", () => {
  beforeEach(() => {
    cy.login(testData.login.LMPTldapSparePartIR, testData.login.password);
  });
  it.skip("Create claim SP1-UW LMPT ref Local brand with pixis order", () => {
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

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMPTclaimSP1.symptom);

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
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
  it.skip("Create claim SP2-OW LMPT ref MDH with pixis order", () => {
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
  it.skip("Create claim external repair ER1-UW LMPT with DPD label & LocalBrand repair by supplier local brand & agreement & expedition with backo order", () => {
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
    // createClaimPageObj.clickBtnDeclareNewReparation();
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
  it.skip("Create claim external repair ER2-UW LMPT localBrand repair by repairer & No agreement & Pick-Up with backo order", () => {
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
  it.skip("Create claim external repair ER3-UW LMPT RepairMDH & No agreement & Pick-Up with backo order", () => {
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
  it.skip("Create claim external repair ER4-UW LMPT RepairMDH & No agreement & Expedition with backo order", () => {
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
  it.skip("Create claim external repair ER5-OW LMPT RepairMDH & Expedition with backo order", () => {
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
    // createClaimPageObj.clickBtnDeclareNewReparation();
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
  it.skip("Create claim external repair ER6-OW LMPT RepairMDH & pickup with backo order", () => {
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
    // createClaimPageObj.clickBtnDeclareNewReparation();
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
describe("Create claim SWAP BCIT", () => {
  beforeEach(() => {
    cy.login(testData.login.BCITldapSWAPER, testData.login.password);
  });
  it.skip("Create claim Swap BCIT S1 (Supplier) / No agreement / Destruction", () => {
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
  it.skip("Create claim Swap BCIT S3 (Supplier) / No agreement / Expedition", () => {
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

    waitingProductPickupPageObj.enterTrackingNumberPickupAndCarrier();
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
  it.skip("Create claim Swap BCIT S4 (Supplier) / Request agreement / Pick-up", () => {
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
