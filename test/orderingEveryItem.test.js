//testiramo da li radi proces porudzbine za svaki item
const { Builder } = require('selenium-webdriver');
const assert = require("assert");
const {
    visitPage,
    homePage,
    loginUsername,
    loginPassword,
    usernameInput,
    passwordInput,
    logInBtn,
    firstName,
    lastName,
    zipCode,
    shoppingCart,
    checkoutBtn,
    firstNameInput,
    lastNameInput,
    zipCodeInput,
    finishBtn,
    homeBtn,
    continueBtn,
    toCartBtns
} = require('./constants');



describe("Testing orders for each item", function(){
    this.timeout(10000)

    let driver;

    before(async () => {
        driver = new Builder().forBrowser("chrome").build();
        await driver.get(visitPage);
        await driver.manage().window().maximize();
    });

    after(async () => {
      await driver.quit();
    });

    
    it("Ordering every item", async () => {
        //logovanje
        await driver.findElement(usernameInput).sendKeys(loginUsername);
        await driver.findElement(passwordInput).sendKeys(loginPassword);
        await driver.findElement(logInBtn).click()
        await driver.sleep(1000)

        for (let i = 0; i < toCartBtns.length; i++){
            await driver.findElement(toCartBtns[i]).click()
            //dodavanje u korpu i checkout
            await driver.findElement(shoppingCart).click()
            await driver.findElement(checkoutBtn).click()
            //popunjavanje informacija
            await driver.findElement(firstNameInput).sendKeys(firstName)
            await driver.findElement(lastNameInput).sendKeys(lastName)
            await driver.findElement(zipCodeInput).sendKeys(zipCode)
            await driver.findElement(continueBtn).click()
    
            //zavrsni koraci
            await driver.findElement(finishBtn).click()
            await driver.findElement(homeBtn).click()
            // Dobijanje trenutnog URL-a
            const currentUrl = await driver.getCurrentUrl();
    
            // Provera da li je URL onaj koji očekujemo
            assert.strictEqual(currentUrl, homePage, 'URL not correct');
        }
    });
})