import { homePage } from "../../pages/homePage";
const homePageObj = new homePage();
import testData from "../../fixtures/testData.json";

describe("test automation homePage", () => {
  beforeEach(() => {
    cy.login(testData.login.ldap, testData.login.password);
  });
  it("List of claims - Check number of rows & columns", () => {
    homePageObj.checkNumberRowsAndColumnTable(
      testData.listOfClaimsTable.rows,
      testData.listOfClaimsTable.columns
    );
  });
  it("List of claims - Read all row & columns data in first page", () => {
    homePageObj.readAllRowsAndColumnsDataInFirstPage();
  });
  it("List of claims - Pagination", () => {
    homePageObj.pagination();
  });
  it("List of claim - Add column in table", () => {
    homePageObj.clickColumnTelephoneVisibilityIcon();
    homePageObj.clickColumnProductCodeVisibilityIcon();
  });
  it("List of claims - using filter search", () => {
    homePageObj.searchClaimByName(testData.claim.customerLastName);
    cy.wait(100);
    homePageObj.verifyDataInColumnName();
    homePageObj.searchClaimByTelephone(testData.claim.customerTelephone);
    homePageObj.searchClaimByEmail(testData.claim.customerEmail);
    homePageObj.searchClaimByReference(testData.claim.customerReference);
    homePageObj.searchClaimById(testData.claim.customerClaimId);
    homePageObj.checkDataFromSpecificRowAndColumn(
      testData.claim.customerClaimId
    );
    homePageObj.resetFields();
  });
  it("List of claims - using filter search with {Enter} button", () => {
    // homePageObj.searchClaimByName(testData.claim.customerLastName);
    // cy.wait(100);
    // homePageObj.verifyDataInColumnName();
    homePageObj.AddFilterCreationDate(testData.claim.claimCreationDate);
  });
  it("List of claims - using filter warranty", () => {
    homePageObj.selectOutOfWarranty();
    homePageObj.selectUnderWarranty();
    homePageObj.selectAnyValue();
    homePageObj.resetFields();
  });
  it("List of claims - using filter reason of warranty", () => {
    homePageObj.selectOneWarrantyReason();
    homePageObj.selectSomeWarrantyReasons();
    homePageObj.resetFields();
  });
  it("List of claims - using filter operating mode", () => {
    homePageObj.selectOperatingModeInternalRepair();
    homePageObj.selectOperatingModeExternalRepair();
    homePageObj.selectOperatingModeSWAP();
    homePageObj.selectOperatingModeSpareParts();
    homePageObj.selectOperatingModeHomeRepair();
    homePageObj.resetFields();
  });
  it("List of claims - using btns in search bar", () => {
    homePageObj.selectAllClaims();
    homePageObj.selectClosedClaims();
    homePageObj.selectOpenClaims();
    homePageObj.resetFields();
    homePageObj.deselectAllWarrantyReasons();
    homePageObj.selectOperatingModeAnyValue();
    homePageObj.AddFilterStatus(testData.claim.status);
    homePageObj.AddFilterSupplier(testData.claim.supplier);
  });
});
