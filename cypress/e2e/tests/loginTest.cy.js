import { loginPage } from "../../pages/loginPage";

const loginPageObj = new loginPage();

import loginData from "../../fixtures/loginData.json";

describe("test automation", () => {
  it("login page", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false prevents Cypress from failing the test
      if (err.message.includes("token '<'")) {
        console.log("🚀 TO INFINITY AND BEYOND 🚀");
        return false;
      }
    });
    loginPageObj.openURL();
    loginPageObj.enterLDAP(loginData.ldap);
    loginPageObj.enterPassword(loginData.password);
    loginPageObj.connect();
  });
});
