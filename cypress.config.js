const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://opensource-demo.orangehrmlive.com',
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 15000,
    retries: {
        runMode: 2,
        openMode: 2 
    }
})