const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
  },
  env: {
    username: "standard_user",
    password: "secret_sauce",
  },
});
