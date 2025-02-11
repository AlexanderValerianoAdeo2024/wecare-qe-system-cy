const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 2000,
  viewportHeight: 1200,
  video: false,
  screenshotOnRunFailure: false,
  reporter: "cypress-mochawesome-reporter", // for html reports
  e2e: {
    baseUrl: "https://wecare.rec.aster.solutions/folder/list",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    chromeWebSecurity: false,
  },
  env: {
    URL: "https://wecare.rec.aster.solutions/folder/list",
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  includeShadowDom: true,
  experimentalStudio: true,
  defaultCommandTimeout: 12000,
});
