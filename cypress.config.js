const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
      uncaught:'exception',
      defaultCommandTimeout: 60000,
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on)
      },
  },
});
