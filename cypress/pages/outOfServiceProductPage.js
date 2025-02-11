export class outOfServiceProductPage {
  weblocators = {
    message: "h2[class='text-bold']",
  };
  displayMessage(MessageOutOfService) {
    cy.get(this.weblocators.message).contains(MessageOutOfService);
    cy.log(MessageOutOfService);
  }
}
