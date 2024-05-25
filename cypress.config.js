const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2b2mxi",
  viewportWidth: 1500,
  viewportHeight: 900,
  chromeWebSecurity: false,
  defaultCommandTimeout: 15000,
  pageLoadTimeout:19000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
