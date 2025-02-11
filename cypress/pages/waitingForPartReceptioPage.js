export class waitingForPartsReceptionPage {
  weblocators = {
    notificationButton: "button.notifications",
    dialogBox: "#mat-dialog-1",
  };
  clickNotificationButton() {
    cy.get(this.weblocators.notificationButton)
      .should("be.visible")
      .click({ force: true });
  }
  clickButtonValidate() {
    cy.get(this.weblocators.buttonValidate).should("be.visible").click();
  }
}
