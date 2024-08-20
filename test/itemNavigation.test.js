const { Builder } = require('selenium-webdriver');
const assert = require("assert")
require('dotenv').config();
const {
    visitPage,
    loginUsername,
    loginPassword,
    usernameInput,
    passwordInput,
    logInBtn,
    navigationLinks
} = require('./constants');

describe("Navigation test", function(){
    this.timeout(10000)

    let driver;

    before(async () => {
        driver = new Builder().forBrowser(process.env.BROWSER).build();
        await driver.get(visitPage);
        await driver.manage().window().maximize();
        //login
        await driver.findElement(usernameInput).sendKeys(loginUsername);
        await driver.findElement(passwordInput).sendKeys(loginPassword);
        await driver.findElement(logInBtn).click()
        await driver.sleep(700)
    });

    after(async () => {
      await driver.quit();
    });

    
    it("Checking the navigation links", async () => {

        for (let i = 0; i<navigationLinks.length;i++) {
            await driver.findElement(navigationLinks[i].id).click()
            const currentUrl = await driver.getCurrentUrl();
    
            assert.strictEqual(currentUrl, navigationLinks[i].expectedLink, 'Navigation link not correct');

            const backToHome = {id: "back-to-products"}
            await driver.findElement(backToHome).click()
        }

    });
})