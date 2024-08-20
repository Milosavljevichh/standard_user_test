const { Builder, By } = require('selenium-webdriver');

const assert = require("assert")
require('dotenv').config();
const {
    visitPage,
    loginUsername,
    loginPassword,
    usernameInput,
    passwordInput,
    logInBtn
 } = require('./constants');

describe("Log out test", function(){
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
        await driver.sleep(1500)
    });

    after(async () => {
      await driver.quit();
    });

    
    it("Logging out", async () => {
        
        await driver.findElement(By.id('react-burger-menu-btn')).click();
        await driver.sleep(1000);

        await driver.findElement(By.id('logout_sidebar_link')).click();
        
        const currentUrl = await driver.getCurrentUrl();

        assert.strictEqual(currentUrl, visitPage, "Logout not succesful")
    });
})