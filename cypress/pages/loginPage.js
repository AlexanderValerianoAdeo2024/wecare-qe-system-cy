export class loginPage {
    weblocators = {
      ldap: "#username",
      password: "#password",
      buttonConnect: "#signOnButton",
    };
    openURL() {
      cy.visit(Cypress.env("URL"));
    }
    enterLDAP(LDAP) {
      cy.get(this.weblocators.ldap).should("be.visible").clear().type(LDAP);
    }
    enterPassword(ldapPassword) {
      cy.get(this.weblocators.password)
        .should("be.visible")
        .clear()
        .type(ldapPassword);
    }
    connect() {
      cy.get(this.weblocators.buttonConnect).should("be.visible").click();
    }
  }
  