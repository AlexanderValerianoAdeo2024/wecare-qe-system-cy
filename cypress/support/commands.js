Cypress.Commands.add("login", (LDAP, ldapPassword) => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false prevents Cypress from failing the test
    if (err.message.includes("token '<'")) {
      console.log("🚀 TO INFINITY AND BEYOND 🚀");
      return false;
    }
  });
  cy.visit("");
  cy.wait(200);
  cy.get("#username").should("be.visible").clear().type(LDAP);
  cy.get("#password").should("be.visible").clear().type(ldapPassword);
  cy.get("#signOnButton").should("be.visible").click();
});
