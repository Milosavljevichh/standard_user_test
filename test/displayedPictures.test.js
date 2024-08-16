const { Builder, By } = require('selenium-webdriver');
const assert = require("assert")
const {
    visitPage,
    loginUsername,
    loginPassword,
    usernameInput,
    passwordInput,
    logInBtn,productImgAlts,
    inventoryItems
} = require('./constants');

describe("Navigation test", function(){
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

    
    it("Checking the navigation links", async () => {
        let items = await driver.findElements(inventoryItems);

        for (let i=0;i<items.length;i++) {
            let pic = await items[i];
            let imageElement = await pic.findElement(By.css('img.inventory_item_img'));

            let altText = await imageElement.getAttribute('alt');
            
            assert.strictEqual(altText, productImgAlts[i], "Incorrect picture")
        }

    });
})