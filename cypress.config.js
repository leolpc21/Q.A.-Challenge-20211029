const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  e2e: {
    defaultCommandTimeout: 15000,
    baseUrl: 'https://beta.coodesh.com/',
  },
});
