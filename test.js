//To start test node test.js
const {Builder} = require('selenium-webdriver');

(async function myFunction() {
    let driver = await new Builder().forBrowser('chrome').build();
    //your code inside this block
    await driver.get('https://www.selenium.dev/');
})();