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

//npx cypress run --record --key 86c2c7dc-b23d-4141-be6e-f5e51fd27882
//CYPRESS_RECORD_KEY 86c2c7dc-b23d-4141-be6e-f5e51fd27882
//npx cypress run --record