const { defineConfig } = require("cypress");

const puppeteerSetup = require('./cypress/support/puppeteer')
const { getChromiumWebBrowsers } = require('./cypress/support/utils')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      puppeteerSetup(on)

      return getChromiumWebBrowsers(config)
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true
    }
  },
});
