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
import { shippingAddressValidationPage } from "../../pages/shippingAddressValidationPage";
import { invoicesPage } from "../../pages/invoicesPage";
import { inputRequirementPage } from "../../pages/inputRequirementPage";
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
const shippingAddressValidationPageObj = new shippingAddressValidationPage();
const invoicesPageObj = new invoicesPage();
const inputRequirementPageObj = new inputRequirementPage();
describe("Create claim with Invoice or customer reference", () => {
  beforeEach(() => {
    cy.login(testData.login.ldap, testData.login.password);
  });
  it("Create claim with Invoice", () => {
    homePageObj.createClaim();
    createClaimPageObj.searchWithInvoice(testData.claimInvoice.Invoice);
    createClaimPageObj.selectFirstProductReferenceInTable();
    createClaimPageObj.validateItemQuantity();

    createClaimPageObj.verifyProductTitle(testData.claimInvoice.productLabel);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimInvoice.productReference,
      testData.claimInvoice.productLabel,
      testData.claimInvoice.invoiceId,
      testData.claimInvoice.purchaseDate,
      testData.claimInvoice.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimInvoice.customerId,
      testData.claimInvoice.customerLastName,
      testData.claimInvoice.customerTelephone,
      testData.claimInvoice.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimInvoice.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    infosPageObj.verifySymptomDisplay(testData.claimInvoice.symptom);
    // surveyPageObj.clickBtnCancelSurvey();
  });
  it("Create claim with customer reference", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterCustomerIdentifier(
      testData.claimCustomerId.customerId
    );
    createClaimPageObj.searchInvoicesByCustomerId();
    invoicesPageObj.selectPurchaseYear(testData.claimCustomerId.year);
    invoicesPageObj.selectFirstArticleFromYear();

    createClaimPageObj.verifyProductTitle(
      testData.claimCustomerId.productLabel
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    infosPageObj.verifyProductDetails(
      testData.claimCustomerId.productReference,
      testData.claimCustomerId.productLabel,
      testData.claimCustomerId.invoiceId,
      testData.claimCustomerId.purchaseDate,
      testData.claimCustomerId.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimCustomerId.customerId,
      testData.claimCustomerId.customerLastName,
      testData.claimCustomerId.customerTelephone,
      testData.claimCustomerId.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimCustomerId.symptom);
    choiceSymptomPageObj.enterSerialNumber(
      testData.claimCustomerId.serialNumberProduct
    );
    choiceSymptomPageObj.uploadSingleFile(
      pdfFilePath,
      testData.claimCustomerId.textLinkUpload
    );
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    infosPageObj.verifySymptomDisplay(testData.claimCustomerId.symptom);
    // surveyPageObj.clickBtnCancelSurvey();
  });
});
describe("Create claim internal repair", () => {
  beforeEach(() => {
    cy.login(testData.login.ldapSparePartIR, testData.login.password);
  });
  it("Create claim IR1-UW ref Local brand with pixis order", () => {
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
    choiceSymptomPageObj.enterSerialNumber(
      testData.claimCustomerId.serialNumberProduct
    );
    choiceSymptomPageObj.uploadSingleFile(
      pdfFilePath,
      testData.claimIR1.textLinkUpload
    );
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeInternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimIR1.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    // diagnosticAndVerificationPageObj.selectInternalReparation();
    // diagnosticAndVerificationPageObj.clickSubmitButton();
    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnWarrantyAccepted();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    inputRequirementPageObj.clickSubmitAdd();
    inputRequirementPageObj.selectFirstCode();
    inputRequirementPageObj.addRepairRequirement();
    inputRequirementPageObj.validateVAT(testData.claimIR1.vat);
    inputRequirementPageObj.clickSubmitButton(testData.claimIR1.submitButton);
    inputRequirementPageObj.enterCommentRepairRequirement();
    inputRequirementPageObj.clickSubmitRequirementsButton(
      testData.claimIR1.submitRequirementsButton
    );
  });
  it("Create claim IR2-UW ref MDH with pixis order", () => {
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

    // diagnosticAndVerificationPageObj.selectInternalReparation();
    // diagnosticAndVerificationPageObj.clickSubmitButton();

    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnWarrantyAccepted();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    inputRequirementPageObj.clickSubmitAdd();
    inputRequirementPageObj.selectFirstCode();
    inputRequirementPageObj.addRepairRequirement();
    inputRequirementPageObj.validateVAT(testData.claimIR2.vat);
    inputRequirementPageObj.selectFirstCode();
    inputRequirementPageObj.addRepairRequirement();
    inputRequirementPageObj.clickSubmitButton(testData.claimIR2.submitButton);

    inputRequirementPageObj.enterCommentRepairRequirement();
    inputRequirementPageObj.clickSubmitRequirementsButton(
      testData.claimIR2.submitRequirementsButton
    );
  });
  it("Create claim IR3-OW ref MDH with pixis order", () => {
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

    // diagnosticAndVerificationPageObj.selectInternalReparation();
    // diagnosticAndVerificationPageObj.clickSubmitButton();

    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    inputRequirementPageObj.clickSubmitAdd();
    inputRequirementPageObj.selectFirstCode();
    inputRequirementPageObj.addRepairRequirement();
    inputRequirementPageObj.validateVAT(testData.claimIR3.vat);
    inputRequirementPageObj.selectFirstCode();
    inputRequirementPageObj.addRepairRequirement();
    inputRequirementPageObj.clickSubmitButton(testData.claimIR3.submitButton);
    inputRequirementPageObj.enterCommentRepairRequirement();
    inputRequirementPageObj.clickSubmitRequirementsButton(
      testData.claimIR3.submitRequirementsButton
    );
  });
  it("Create claim IR4-OW ref MDH with pixis order & 0€ quotation fees", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimIR4.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimIR4.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimIR4.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimIR4.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimIR4.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimIR4.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();

    infosPageObj.verifyProductDetails(
      testData.claimIR4.productReference,
      testData.claimIR4.productLabel,
      testData.claimIR4.invoiceId,
      testData.claimIR4.invoiceCreationDate,
      testData.claimIR4.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimIR4.customerId,
      testData.claimIR4.customerLastName,
      testData.claimIR4.customerTelephone,
      testData.claimIR4.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimIR4.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    // customerChoiceModopPageObj.selectReasonWarrantyPeriodExceeded();
    customerChoiceModopPageObj.selectWarrantyReason(
      testData.claimIR4.setupFirstReasonDisplay,
      testData.claimIR4.warrantyReason
    );
    customerChoiceModopPageObj.selectOperateModeInternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimIR4.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    paymentStorePageObj.enterInvoiceNumber(
      testData.claimIR4.invoiceNumberPayInStore
    );
    paymentStorePageObj.enterPaymentAmount(testData.claimIR4.paymentAmount);

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    paymentStorePageObj.clickSubmitButton();

    // diagnosticAndVerificationPageObj.selectInternalReparation();
    // diagnosticAndVerificationPageObj.clickSubmitButton();

    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    inputRequirementPageObj.clickSubmitAdd();
    inputRequirementPageObj.selectFirstCode();
    inputRequirementPageObj.addRepairRequirement();
    inputRequirementPageObj.validateVAT(testData.claimIR4.vat);
    inputRequirementPageObj.selectFirstCode();
    inputRequirementPageObj.addRepairRequirement();
    inputRequirementPageObj.clickSubmitButton(testData.claimIR4.submitButton);
    inputRequirementPageObj.enterCommentRepairRequirement();
    inputRequirementPageObj.clickSubmitRequirementsButton(
      testData.claimIR4.submitRequirementsButton
    );
  });
});
describe("Create claim for spare parts order", () => {
  beforeEach(() => {
    cy.login(testData.login.ldapSparePartIR, testData.login.password);
  });
  it("Create claim SP1-UW ref Local brand with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimSP1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimSP1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimSP1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimSP1.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimSP1.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimSP1.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimSP1.productReference,
      testData.claimSP1.productLabel,
      testData.claimSP1.invoiceId,
      testData.claimSP1.invoiceCreationDate,
      testData.claimSP1.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimSP1.customerId,
      testData.claimSP1.customerLastName,
      testData.claimSP1.customerTelephone,
      testData.claimSP1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimSP1.symptom);
    choiceSymptomPageObj.enterSerialNumber(
      testData.claimSP1.serialNumberProduct
    );
    choiceSymptomPageObj.uploadSingleFile(
      pdfFilePath,
      testData.claimSP1.textLinkUpload
    );
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSparePartOrder();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimSP1.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimSP1.symptom);
    // cy.screenshot("register/ScreenshotSP1");

    choiceOfPartsToOrderPageObj.selectSparePart();
    choiceOfPartsToOrderPageObj.clickSubmitButton();
    // choiceOfPartsToOrderPageObj.clickConfirmButtonInPopup();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimSP1.symptom);

    // shippingAddressValidationPageObj.enterAdress(testData.claimSP1.address);
    // shippingAddressValidationPageObj.enterZipCode(testData.claimSP1.zipCode);
    // shippingAddressValidationPageObj.clickButtonValidate();

    checkOrderSparePartPageObj.clickSubmitButton(
      testData.claimSP1.submitButtonFrench
    );
  });
  it("Create claim SP2-UW ref MDH with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimSP2.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimSP2.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimSP2.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimSP2.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimSP2.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimSP2.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimSP2.productReference,
      testData.claimSP2.productLabel,
      testData.claimSP2.invoiceId,
      testData.claimSP2.invoiceCreationDate,
      testData.claimSP2.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimSP2.customerId,
      testData.claimSP2.customerLastName,
      testData.claimSP2.customerTelephone,
      testData.claimSP2.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimSP2.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSparePartOrder();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimSP2.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    choiceOfPartsToOrderPageObj.selectSparePart();
    choiceOfPartsToOrderPageObj.clickSubmitButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    // shippingAddressValidationPageObj.enterAdress(testData.claimSP2.address);
    // shippingAddressValidationPageObj.enterZipCode(testData.claimSP2.zipCode);
    // shippingAddressValidationPageObj.clickButtonValidate();

    checkOrderSparePartPageObj.clickSubmitButton(
      testData.claimSP2.submitButtonFrench
    );
  });
  it("Create claim SP3-OW ref MDH with pixis order", () => {
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
    choiceOfPartsToOrderPageObj.clickSubmitButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    // shippingAddressValidationPageObj.enterAdress(testData.claimSP3.address);
    // shippingAddressValidationPageObj.enterZipCode(testData.claimSP3.zipCode);
    // shippingAddressValidationPageObj.clickButtonValidate();

    checkOrderSparePartPageObj.clickSubmitButton(
      testData.claimSP3.submitButtonFrench
    );
  });
  it("Create claim SP4-OW ref MDH with pixis order & unreferenced spare part", () => {
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

    // shippingAddressValidationPageObj.enterAdress(testData.claimSP3.address);
    // shippingAddressValidationPageObj.enterZipCode(testData.claimSP3.zipCode);
    // shippingAddressValidationPageObj.clickButtonValidate();
  });
});
describe("Create claim for backo380 spare parts order", () => {
  beforeEach(() => {
    cy.login(testData.login.ldapBacko380SP1, testData.login.password);
  });
  it("Create claim backo380 SP1-UW ref Local brand with pixis order", () => {
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
    choiceSymptomPageObj.enterSerialNumber(
      testData.claimBacko380SP1.serialNumberProduct
    );
    choiceSymptomPageObj.uploadSingleFile(
      pdfFilePath,
      testData.claimBacko380SP1.textLinkUpload
    );
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimBacko380SP1.symptom);
  });
  it("Create claim backo380 SP2-UW ref MDH with pixis order", () => {
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

    // surveyPageObj.clickBtnCancelSurvey();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSparePartOrder();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimBacko380SP2.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();
    choiceOfPartsToOrderPageObj.selectSparePart();
    choiceOfPartsToOrderPageObj.clickSubmitButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimBacko380SP2.symptom);

    // shippingAddressValidationPageObj.enterAdress(
    //   testData.claimBacko380SP2.address
    // );
    // shippingAddressValidationPageObj.enterZipCode(
    //   testData.claimBacko380SP2.zipCode
    // );
    // shippingAddressValidationPageObj.clickButtonValidate();

    checkOrderSparePartPageObj.clickSubmitButton(
      testData.claimBacko380SP2.submitButtonFrench
    );
  });
  it("Create claim backo380 SP3-OW ref Local brand with pixis order", () => {
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

    // surveyPageObj.clickBtnCancelSurvey();

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

    // shippingAddressValidationPageObj.enterAdress(
    //   testData.claimBacko380SP3.address
    // );
    // shippingAddressValidationPageObj.enterZipCode(
    //   testData.claimBacko380SP3.zipCode
    // );
    // shippingAddressValidationPageObj.clickButtonValidate();

    checkOrderSparePartPageObj.clickSubmitButton(
      testData.claimBacko380SP3.submitButtonFrench
    );
  });
});
describe("Create claim backo380 external repair from home", () => {
  beforeEach(() => {
    cy.login(testData.login.ldapBacko380SP1, testData.login.password);
  });
  it("Create claim backo380 ER1-UW ref Local brand with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimBacko380ER1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimBacko380ER1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimBacko380ER1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimBacko380ER1.productReference
    );
    createClaimPageObj.verifyProductTitle(
      testData.claimBacko380ER1.productLabel
    );

    createClaimPageObj.enterCustomerReferenceFR(
      testData.claimBacko380ER1.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();

    // createClaimPageObj.clickBtnDeclareNewReparation();

    infosPageObj.verifyProductDetails(
      testData.claimBacko380ER1.productReference,
      testData.claimBacko380ER1.productLabel,
      testData.claimBacko380ER1.invoiceId,
      testData.claimBacko380ER1.invoiceCreationDate,
      testData.claimBacko380ER1.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimBacko380ER1.customerId,
      testData.claimBacko380ER1.customerLastName,
      testData.claimBacko380ER1.customerTelephone,
      testData.claimBacko380ER1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimBacko380ER1.symptom);
    choiceSymptomPageObj.enterSerialNumber(
      testData.claimBacko380ER1.serialNumberProduct
    );
    choiceSymptomPageObj.uploadSingleFile(
      pdfFilePath,
      testData.claimBacko380ER1.textLinkUpload
    );
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
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

    // diagnosticAndVerificationPageObj.selectInternalReparation();
    // diagnosticAndVerificationPageObj.clickSubmitButton();
    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnWarrantyAccepted();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
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

    // diagnosticAndVerificationPageObj.selectInternalReparation();
    // diagnosticAndVerificationPageObj.clickSubmitButton();
    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
});
describe("Create claim VAT LMFR", () => {
  beforeEach(() => {
    cy.login(testData.login.LMFRldapTVA, testData.login.password);
  });
  it("Create claim VAT LMFR IR1-UW ref Local brand with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMFRclaimVAT.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMFRclaimVAT.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMFRclaimVAT.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMFRclaimVAT.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.LMFRclaimVAT.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(
      testData.LMFRclaimVAT.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();

    // createClaimPageObj.clickBtnDeclareNewReparation();

    infosPageObj.verifyProductDetails(
      testData.LMFRclaimVAT.productReference,
      testData.LMFRclaimVAT.productLabel,
      testData.LMFRclaimVAT.invoiceId,
      testData.LMFRclaimVAT.invoiceCreationDate,
      testData.LMFRclaimVAT.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMFRclaimVAT.customerId,
      testData.LMFRclaimVAT.customerLastName,
      testData.LMFRclaimVAT.customerTelephone,
      testData.LMFRclaimVAT.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMFRclaimVAT.symptom);
    choiceSymptomPageObj.enterSerialNumber(
      testData.LMFRclaimVAT.serialNumberProduct
    );
    choiceSymptomPageObj.uploadSingleFile(
      pdfFilePath,
      testData.LMFRclaimVAT.textLinkUpload
    );
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeInternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMFRclaimVAT.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    // diagnosticAndVerificationPageObj.selectInternalReparation();
    // diagnosticAndVerificationPageObj.clickSubmitButton();
    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnWarrantyAccepted();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    inputRequirementPageObj.clickSubmitAdd();
    inputRequirementPageObj.selectFirstCode();
    inputRequirementPageObj.addRepairRequirement();
    inputRequirementPageObj.validateVAT(testData.LMFRclaimVAT.vat);
  });
  it.skip("Create claim VAT LMFR IR2-UW ref MDH with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMFRVATclaimIR2.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMFRVATclaimIR2.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMFRVATclaimIR2.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMFRVATclaimIR2.productReference
    );
    createClaimPageObj.verifyProductTitle(
      testData.LMFRVATclaimIR2.productLabel
    );

    createClaimPageObj.enterCustomerReferenceFR(
      testData.LMFRVATclaimIR2.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.LMFRVATclaimIR2.productReference,
      testData.LMFRVATclaimIR2.productLabel,
      testData.LMFRVATclaimIR2.invoiceId,
      testData.LMFRVATclaimIR2.invoiceCreationDate,
      testData.LMFRVATclaimIR2.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMFRVATclaimIR2.customerId,
      testData.LMFRVATclaimIR2.customerLastName,
      testData.LMFRVATclaimIR2.customerTelephone,
      testData.LMFRVATclaimIR2.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMFRVATclaimIR2.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeInternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMFRVATclaimIR2.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    // diagnosticAndVerificationPageObj.selectInternalReparation();
    // diagnosticAndVerificationPageObj.clickSubmitButton();
    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnWarrantyAccepted();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
  it.skip("Create claim VAT LMFR IR3-OW ref Local brand with pixis order", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.LMFRVATclaimIR3.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.LMFRVATclaimIR3.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.LMFRVATclaimIR3.siteCode);
    createClaimPageObj.enterProductReference(
      testData.LMFRVATclaimIR3.productReference
    );
    createClaimPageObj.verifyProductTitle(
      testData.LMFRVATclaimIR3.productLabel
    );

    createClaimPageObj.enterCustomerReferenceFR(
      testData.LMFRVATclaimIR3.customerId
    );
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    // createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.LMFRVATclaimIR3.productReference,
      testData.LMFRVATclaimIR3.productLabel,
      testData.LMFRVATclaimIR3.invoiceId,
      testData.LMFRVATclaimIR3.invoiceCreationDate,
      testData.LMFRVATclaimIR3.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.LMFRVATclaimIR3.customerId,
      testData.LMFRVATclaimIR3.customerLastName,
      testData.LMFRVATclaimIR3.customerTelephone,
      testData.LMFRVATclaimIR3.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.LMFRVATclaimIR3.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    customerChoiceModopPageObj.selectReasonWarrantyPeriodExceeded();
    customerChoiceModopPageObj.selectOperateModeInternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.LMFRVATclaimIR3.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    paymentStorePageObj.enterInvoiceNumber(
      testData.claimBacko380IR3.invoiceNumberPayInStore
    );

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    paymentStorePageObj.clickSubmitButton();

    // diagnosticAndVerificationPageObj.selectInternalReparation();
    // diagnosticAndVerificationPageObj.clickSubmitButton();
    diagnosisInProgressPageObj.selectRadioBtnBreakdownConfirmed();
    diagnosisInProgressPageObj.selectRadioBtnRepairable();
    diagnosisInProgressPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
});
describe("Create claim external repair UW", () => {
  beforeEach(() => {
    cy.login(testData.login.ldapSwapER, testData.login.password);
  });
  it("Create claim external repair ER1-UW with DPD label & LocalBrand repair by supplier local brand & agreement & expedition with backo order", () => {
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
    filesPageObj.verifyDiagProlongeGeneration(
      testData.claimER1.reportDiagnosisExtend
    );
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
    waitingReparationAgreementPageObj.verifyLinkModifyRepairerEnable(
      testData.claimER1.textLinkModifyRepairer
    );
    waitingReparationAgreementPageObj.clickValidateButton();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyWorkOrderRepairGeneration(
      testData.claimER1.reportWorkOrderRepairADEO
    );
    filesPageObj.verifyShipmentLabelReportGeneration(
      testData.claimER1.shipmentLabelReport
    );
    filesPageObj.verifyTransportVoucherRepairerReportGeneration(
      testData.claimER1.reportTransportVoucherRepairer
    );
    infosPageObj.clickInfosSection();

    parcelToSendPageObj.selectCheckboxPackageSent();
    parcelToSendPageObj.clickSubmitButton();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyWorkOrderRepairGenerationER1ER5(
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
    filesPageObj.verifyCustomerPickupOrderReportGenerationExpeditionTreatment(
      testData.claimER1.reportCustomerPickupOrder
    );
    infosPageObj.clickInfosSection();

    awaitingCustomerPickupProductPageObj.selectCheckboxRecoveredProduct();
    awaitingCustomerPickupProductPageObj.clickSubmitButton();
  });
  it.skip("Create claim external repair ER1-UW with DPD label & LocalBrand repair by supplier local brand & agreement & expedition with backo order & Ticket reservation anomaly", () => {
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
    filesPageObj.verifyDiagProlongeGeneration(
      testData.claimER1.reportDiagnosisExtend
    );
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
    waitingReparationAgreementPageObj.verifyLinkModifyRepairerEnable(
      testData.claimER1.textLinkModifyRepairer
    );
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
  it("Create claim external repair ER2-UW localBrand repair by repairer & No agreement & Pick-Up with backo order", () => {
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
    choiceSymptomPageObj.enterSerialNumber(
      testData.claimER2.serialNumberProduct
    );
    choiceSymptomPageObj.uploadSingleFile(
      pdfFilePath,
      testData.claimER2.textLinkUpload
    );
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyDiagProlongeGenerationWithMandatorySerialNumberUploadPhoto(
      testData.claimER2.reportDiagnosisExtend
    );
    infosPageObj.clickInfosSection();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeExternalRepair();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimER2.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();
    // *** This radio button is not mandatory is not setup ***//
    // confirmRepairerCarrierPageObj.selectTransportModePickup();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGenerationReportWithMandatorySerialNumberUploadPhoto(
      testData.claimER2.reportCareAfterSalesService
    );
    infosPageObj.clickInfosSection();

    confirmRepairerCarrierPageObj.selectOptionARMRepairer();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    confirmRepairerCarrierPageObj.clickButtonValidate();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyRequestForRepairRemovalMDHWithMandatorySerialNumberUploadPhoto(
      testData.claimER2.reportRequestForRepairRemoval
    );
    filesPageObj.verifyWorkOrderRepairGenerationPickUp(
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
    filesPageObj.verifyCustomerPickupOrderRequestAgreementPickupMDH(
      testData.claimER2.reportCustomerPickupOrder
    );
    infosPageObj.clickInfosSection();

    awaitingCustomerPickupProductPageObj.selectCheckboxRecoveredProduct();
    awaitingCustomerPickupProductPageObj.clickSubmitButton();
  });
  it("Create claim external repair ER3-UW RepairMDH & No agreement & Pick-Up with backo order", () => {
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
    filesPageObj.verifyDiagProlongeGeneration(
      testData.claimER3.reportDiagnosisExtend
    );
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

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyRequestForRepairRemovalNoAgreementPickUp(
      testData.claimER3.reportRequestForRepairRemoval
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
    filesPageObj.verifyCustomerPickupOrderNoAgreementPickupMDH(
      testData.claimER3.reportCustomerPickupOrder
    );
    infosPageObj.clickInfosSection();

    awaitingCustomerPickupProductPageObj.selectCheckboxRecoveredProduct();
    awaitingCustomerPickupProductPageObj.clickSubmitButton();
  });
  it("Create claim external repair ER4-UW RepairMDH & No agreement & Expedition with backo order", () => {
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
    filesPageObj.verifyDiagProlongeGeneration(
      testData.claimER4.reportDiagnosisExtend
    );
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

    confirmRepairerCarrierPageObj.selectOptionChronopostCarrier();
    confirmRepairerCarrierPageObj.selectOptionCordonRepairer();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    confirmRepairerCarrierPageObj.clickButtonValidate();

    // waitingReparationAgreementPageObj.selectRequestAccepted();
    // waitingReparationAgreementPageObj.enterAgreementReparationNumber(
    //   testData.claimER4.agreementReparationNumber
    // );
    // waitingReparationAgreementPageObj.selectProductSentForRepair();
    // waitingReparationAgreementPageObj.verifyLinkModifyReapirerEnable();
    // waitingReparationAgreementPageObj.clickValidateButton();
    // infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    // filesPageObj.clickFilesSection();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyWorkOrderRepairGenerationADEO(
      testData.claimER4.reportWorkOrderRepairADEO
    );
    filesPageObj.verifyShipmentLabelReportGenerationMDH(
      testData.claimER4.shipmentLabelReport
    );
    filesPageObj.verifyTransportVoucherRepairerReportGenerationMDH(
      testData.claimER4.reportTransportVoucherRepairer
    );
    infosPageObj.clickInfosSection();

    parcelToSendPageObj.selectCheckboxPackageSent();
    parcelToSendPageObj.clickSubmitButton();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyWorkOrderRepairGenerationER4(
      testData.claimER4.reportWorkOrderRepair
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
    filesPageObj.verifyCustomerPickupOrderExpeditionER4(
      testData.claimER4.reportCustomerPickupOrder
    );
    infosPageObj.clickInfosSection();

    awaitingCustomerPickupProductPageObj.selectCheckboxRecoveredProduct();
    awaitingCustomerPickupProductPageObj.clickSubmitButton();
  });
});
describe("Create claim external repair OW", () => {
  beforeEach(() => {
    cy.login(testData.login.ldapSwapER, testData.login.password);
  });
  it.only("Create claim external repair ER5-OW RepairMDH & Expedition with backo order", () => {
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
    createClaimPageObj.clickBtnDeclareNewReparation();

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

    // surveyPageObj.clickBtnCancelSurvey();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyDiagProlongeGeneration(
      testData.claimEROW5.reportDiagnosisExtend
    );
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
    filesPageObj.verifyGenerationPaymentQuotationFees(
      testData.claimEROW5.reportPaymentQuotationFees
    );
    infosPageObj.clickInfosSection();

    paymentStorePageObj.enterInvoiceNumber(
      testData.claimEROW5.invoiceNumberPayInStore
    );
    paymentStorePageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    confirmRepairerCarrierPageObj.selectOptionChronopostCarrier();
    confirmRepairerCarrierPageObj.selectOptionCordonRepairer();
    confirmRepairerCarrierPageObj.clickButtonValidate();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyWorkOrderRepairGeneration(
      testData.claimEROW5.reportWorkOrderRepairADEO
    );
    infosPageObj.clickInfosSection();

    parcelToSendPageObj.selectCheckboxPackageSent();
    parcelToSendPageObj.clickSubmitButton();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    filesPageObj.clickFilesSection();
    filesPageObj.verifyShipmentLabelReportGeneration(
      testData.claimEROW5.shipmentLabelReport
    );
    filesPageObj.verifyTransportVoucherRepairerReportGeneration(
      testData.claimEROW5.reportTransportVoucherRepairer
    );
    filesPageObj.verifyWorkOrderRepairGenerationER1ER5(
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
    createClaimPageObj.clickBtnDeclareNewReparation();

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
    filesPageObj.verifyDiagProlongeGeneration(
      testData.claimEROW5.reportDiagnosisExtend
    );
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
  it("Create claim external repair ER6-OW RepairMDH & pickup with backo order", () => {
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

    // surveyPageObj.clickBtnCancelSurvey();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyDiagProlongeGeneration(
      testData.claimEROW6.reportDiagnosisExtend
    );
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
    filesPageObj.verifyGenerationPaymentQuotationFees(
      testData.claimEROW6.reportPaymentQuotationFees
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
    // filesPageObj.verifyRequestForRepairRemovalMDH(
    //   testData.claimEROW6.requestForRepairRemoval
    // );
    // filesPageObj.verifyWorkOrderRepairGeneration(
    //   testData.claimEROW6.reportWorkOrderRepair
    // );
    // filesPageObj.verifyTransportVoucherRepairerReportGenerationMDH(
    //   testData.claimEROW6.reportTransportVoucherRepairer
    // );

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
describe("Create claim SWAP", () => {
  beforeEach(() => {
    cy.login(testData.login.ldapSwapER, testData.login.password);
  });
  it("Create claim Swap S1 (Supplier) / No agreement / Destruction", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimS1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimS1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimS1.siteCode);
    createClaimPageObj.enterProductReference(testData.claimS1.productReference);
    createClaimPageObj.verifyProductTitle(testData.claimS1.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimS1.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();
    infosPageObj.verifyProductDetails(
      testData.claimS1.productReference,
      testData.claimS1.productLabel,
      testData.claimS1.invoiceId,
      testData.claimS1.invoiceCreationDate,
      testData.claimS1.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimS1.customerId,
      testData.claimS1.customerLastName,
      testData.claimS1.customerTelephone,
      testData.claimS1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.selectSymptomBroken();
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyDiagProlongeGeneration(
      testData.claimS1.reportDiagnosisExtend
    );
    infosPageObj.clickInfosSection();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimS1.symptom);

    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGeneration(
      testData.claimS1.reportCareAfterSalesService
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
    infosPageObj.verifySymptomDisplay(testData.claimS1.symptom);

    filesPageObj.clickFilesSection();
    filesPageObj.verifyProductDestructionOrderReportGenerationS1(
      testData.claimS1.reportProductDestructionOrder
    );
    filesPageObj.verifyCreditNoteRequestSupplierGenerationS1(
      testData.claimS1.reportCreditNoteRequestSupplier
    );
    infosPageObj.clickInfosSection();
    waitingSupplierCreditNotePageObj.selectRadioButtonCreditNoteReceived();
    waitingSupplierCreditNotePageObj.verifyButtonSubmitIsVisibleAndNotDisableAndSubmit();
  });
  it("Create claim Swap S2 (Supplier) / No agreement / Expedition", () => {
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

    createClaimPageObj.clickBtnDeclareNewReparation();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();

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
    choiceSymptomPageObj.enterSerialNumber(
      testData.claimS2.serialNumberProduct
    );
    choiceSymptomPageObj.uploadSingleFile(
      pdfFilePath,
      testData.claimS2.textLinkUpload
    );
    // choiceSymptomPageObj.enterSymptom(testData.claimS2.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyDiagProlongeGenerationWithMandatorySerialNumberUploadPhoto(
      testData.claimS2.reportDiagnosisExtend
    );
    infosPageObj.clickInfosSection();

    // surveyPageObj.clickBtnCancelSurvey();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimS2.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    filesPageObj.clickFilesSection();
    filesPageObj.verifyCareAfterSalesServiceUnderWarrantyGenerationReportWithMandatorySerialNumberUploadPhoto(
      testData.claimS2.reportCareAfterSalesService
    );
    infosPageObj.clickInfosSection();

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
  it("Create claim Swap S3 (Supplier) / No agreement / Pick-Up", () => {
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

    // surveyPageObj.clickBtnCancelSurvey();

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
  it("Create claim Swap S4 (Supplier) / Request agreement / Pick-up", () => {
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

    // surveyPageObj.clickBtnCancelSurvey();

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
  it("Create claim Swap S5 (Store) / No agreement / Destruction", () => {
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

    // surveyPageObj.clickBtnCancelSurvey();

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
  it("Create claim Swap S6 (Store) Commercial Gesture / No agreement / Destruction", () => {
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

    createClaimPageObj.clickBtnDeclareNewReparation();

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

    // surveyPageObj.clickBtnCancelSurvey();

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
  it("Create claim Swap S8 (Supplier) / Request agreement / Expedition Secondary Adress", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimS8.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimS8.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimS8.siteCode);
    createClaimPageObj.enterProductReference(testData.claimS8.productReference);
    createClaimPageObj.verifyProductTitle(testData.claimS8.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimS8.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();

    infosPageObj.verifyProductDetails(
      testData.claimS8.productReference,
      testData.claimS8.productLabel,
      testData.claimS8.invoiceId,
      testData.claimS8.invoiceCreationDate,
      testData.claimS8.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimS8.customerId,
      testData.claimS8.customerLastName,
      testData.claimS8.customerTelephone,
      testData.claimS8.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimS8.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimS8.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    swapMadeForCustomerPageObj.selectRefund();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
  it("Create claim Swap S9 (Supplier) / No agreement / Pick-Up Secondary Address", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimS9.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimS9.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimS9.siteCode);
    createClaimPageObj.enterProductReference(testData.claimS9.productReference);
    createClaimPageObj.verifyProductTitle(testData.claimS9.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimS9.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();

    choiceSymptomPageObj.clickButtonTakeNoteAlert();
    infosPageObj.verifyProductDetails(
      testData.claimS9.productReference,
      testData.claimS9.productLabel,
      testData.claimS9.invoiceId,
      testData.claimS9.invoiceCreationDate,
      testData.claimS9.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimS9.customerId,
      testData.claimS9.customerLastName,
      testData.claimS9.customerTelephone,
      testData.claimS9.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    // choiceSymptomPageObj.enterSymptom(testData.claimS9.symptom);
    choiceSymptomPageObj.selectSymptomBroken();
    choiceSymptomPageObj.enterSerialNumber(
      testData.claimS9.serialNumberProduct
    );
    choiceSymptomPageObj.uploadSingleFile(
      pdfFilePath,
      testData.claimS9.textLinkUpload
    );
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimS9.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    swapMadeForCustomerPageObj.selectRefund();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    waitingProductPickupPageObj.enterTrackingNumberPickupAndCarrierFrench(
      testData.claimS9.trackingNumber,
      testData.claimS9.carrier
    );
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    waitingProductPickupPageObj.selectCheckboxProductPickupAndSubmit();

    waitingSupplierCreditNotePageObj.selectRadioButtonCreditNoteReceived();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    waitingSupplierCreditNotePageObj.verifyButtonSubmitIsVisibleAndNotDisableAndSubmit();
  });
  it("Create claim Swap S10 (Supplier) / No agreement / Expedition Secondary Adress", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimS10.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimS10.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimS10.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimS10.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimS10.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimS10.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();

    infosPageObj.verifyProductDetails(
      testData.claimS10.productReference,
      testData.claimS10.productLabel,
      testData.claimS10.invoiceId,
      testData.claimS10.invoiceCreationDate,
      testData.claimS10.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimS10.customerId,
      testData.claimS10.customerLastName,
      testData.claimS10.customerTelephone,
      testData.claimS10.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimS10.symptom);
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    customerChoiceModopPageObj.selectReasonManufacturerWarranty();
    customerChoiceModopPageObj.selectOperateModeSwap();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimS10.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    swapMadeForCustomerPageObj.selectRefund();
    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    swapMadeForCustomerPageObj.clickBtnValidateSwapSolution();

    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
});
describe("Create claim home repair LMFR", () => {
  beforeEach(() => {
    cy.login(testData.login.ldapSwapER, testData.login.password);
  });
  it("Create claim home repair HR1-UW LocalBrand", () => {
    homePageObj.createClaim();

    createClaimPageObj.enterInvoiceNumber(testData.claimHR1.invoiceId);
    createClaimPageObj.enterInvoiceCreationDate(
      testData.claimHR1.invoiceCreationDate
    );
    createClaimPageObj.enterSiteCode(testData.claimHR1.siteCode);
    createClaimPageObj.enterProductReference(
      testData.claimHR1.productReference
    );
    createClaimPageObj.verifyProductTitle(testData.claimHR1.productLabel);

    createClaimPageObj.enterCustomerReferenceFR(testData.claimHR1.customerId);
    createClaimPageObj.verifyMandatoryFieldsArePopulatedFR();
    createClaimPageObj.clickBtnSubmitClaim();
    createClaimPageObj.clickBtnDeclareNewReparation();

    // choiceSymptomPageObj.clickButtonTakeNoteAlert();

    infosPageObj.verifyProductDetails(
      testData.claimHR1.productReference,
      testData.claimHR1.productLabel,
      testData.claimHR1.invoiceId,
      testData.claimHR1.invoiceCreationDate,
      testData.claimHR1.supplier
    );
    infosPageObj.verifyCustomerDetails(
      testData.claimHR1.customerId,
      testData.claimHR1.customerLastName,
      testData.claimHR1.customerTelephone,
      testData.claimHR1.customerEmail
    );
    infosPageObj.verifyPay();

    choiceSymptomPageObj.verifyValidateButtonDisabled();
    choiceSymptomPageObj.enterSymptom(testData.claimHR1.symptom);
    choiceSymptomPageObj.enterSerialNumber(
      testData.claimHR1.serialNumberProductReference
    );
    // choiceSymptomPageObj.uploadSingleFile(
    //   pdfFilePath,
    //   testData.claimHR1.textLinkUpload
    // );
    choiceSymptomPageObj.verifyValidateButtonEnable();
    choiceSymptomPageObj.clickBtnValidate();

    // surveyPageObj.clickBtnCancelSurvey();

    customerChoiceModopPageObj.selectWarrantyReason(
      testData.claimHR1.setupFirstReasonDisplay,
      testData.claimHR1.warrantyReason
    );
    customerChoiceModopPageObj.selectOperateModeHomeRepair();
    // customerChoiceModopPageObj.selectRepairInCustomerChoiceField();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    infosPageObj.verifySymptomDisplay(testData.claimHR1.symptom);
    customerChoiceModopPageObj.clickButtonValidateCustomerChoice();

    modifyInterventionAddressPageObj.AddComment(
      testData.claimHR1.commentInterventionAddress
    );

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    modifyInterventionAddressPageObj.clickButtonValidate();

    repairConfirmationPageObj.selectOptionBosch();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
    repairConfirmationPageObj.clickButtonValidate();

    infosPageObj.verifySupplierUpdateIconIsNotVisible();
    infosPageObj.verifyQuantityUpdateIconIsNotVisible();
  });
});
