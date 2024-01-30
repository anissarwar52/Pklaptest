// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio:true,
    baseUrl: 'https://www.paklap.pk/', // Adding baseUrl directly under e2e
  },
  env: {
    email: 'ms0601572@gmail.com',
    password: 'Saadtalha@7461',
    // Any other environment variables you want to add can be included here
  },
  // You can also include other global configuration options here...
});