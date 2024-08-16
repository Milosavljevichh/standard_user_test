const { Builder } = require('selenium-webdriver');

const assert = require("assert")
const [
    visitPage,
    loginUsername,
    loginPassword,
    usernameInput,
    passwordInput,
    logInBtn,
    backpackBtn
] = require('./constants');

describe("Cart display test", function(){
    this.timeout(10000)

    let driver;

    before(async () => {
        driver = new Builder().forBrowser("chrome").build();
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

    
    it.only("Checking the cart badge number", async () => {

        await driver.findElement(backpackBtn).click()
        let cartNum = await driver.findElement({className: "shopping_cart_badge"}).getText()

        assert.equal(cartNum, 1, 'Cart number not correct');
    });
})