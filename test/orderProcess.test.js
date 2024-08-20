const { Builder } = require('selenium-webdriver');

const assert = require("assert")
const {
    visitPage,
    homePage,
    loginUsername,
    loginPassword,
    firstName,
    lastName,
    zipCode,
    usernameInput,
    passwordInput,
    logInBtn,
    backpackBtn,
    shoppingCart,
    checkoutBtn,
    firstNameInput,
    lastNameInput,
    zipCodeInput,
    finishBtn,
    homeBtn,
    continueBtn
} = require('./constants');
require('dotenv').config();

describe("Ordering process test", function(){
    this.timeout(10000)

    let driver;

    before(async () => {
        driver = new Builder().forBrowser(process.env.BROWSER).build();
        await driver.get(visitPage);
        await driver.manage().window().maximize();
        await driver.findElement(usernameInput).sendKeys(loginUsername);
        await driver.findElement(passwordInput).sendKeys(loginPassword);
        await driver.findElement(logInBtn).click()
        await driver.sleep(800)
    });

    after(async () => {
      await driver.quit();
    });

    
    it("Ordering process", async () => {

        //adding to cart and checkout
        await driver.findElement(backpackBtn).click()
        await driver.findElement(shoppingCart).click()
        await driver.findElement(checkoutBtn).click()

        //input
        await driver.findElement(firstNameInput).sendKeys(firstName)
        await driver.findElement(lastNameInput).sendKeys(lastName)
        await driver.findElement(zipCodeInput).sendKeys(zipCode)
        await driver.findElement(continueBtn).click()

        await driver.findElement(finishBtn).click()
        await driver.findElement(homeBtn).click()

        const currentUrl = await driver.getCurrentUrl();

        assert.strictEqual(currentUrl, homePage, 'Ordering process failed');
    });
})