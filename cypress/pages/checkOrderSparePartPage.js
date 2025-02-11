export class checkOrderSparePartPage {
  weblocators = {
    submitButton: "button[type='submit']",
  };

  clickSubmitButton(submitButtonEnglish) {
    cy.wait(1500);
    // cy.get(this.weblocators.submitButton).should("be.visible").click();
    cy.contains(this.weblocators.submitButton, submitButtonEnglish).click();
  }
}
