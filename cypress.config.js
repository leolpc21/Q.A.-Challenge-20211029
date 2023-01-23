const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  e2e: {
    defaultCommandTimeout: 15000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: 'https://beta.coodesh.com/',
    experimentalRunAllSpecs: true,
    video: false
  },
});