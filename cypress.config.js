const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://opensource-demo.orangehrmlive.com',
    },
    chromeWebSecurity: false,
    viewportWidth: 1400,
	viewportHeight: 900,
    defaultCommandTimeout: 15000,
    retries: {
        runMode: 2,
        openMode: 2 
    }
})