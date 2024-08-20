
const { Builder, By } = require('selenium-webdriver');
const assert = require("assert");
require('dotenv').config();
const {
    visitPage,
    loginUsername,
    loginPassword,
    usernameInput,
    passwordInput,
    logInBtn,
    filterDropdown,
    inventoryItems,
    inventoryItem,
    inventoryItemPrice
} = require('./constants');


describe("Filtering tests", function(){
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

    
    it("Filtering Z to A", async () => {
        await driver.findElement(filterDropdown).click()
        await driver.findElement(By.css('option[value="za"]')).click()
        
        let items = await driver.findElements(inventoryItems);

        let itemNames = [];
        for (let item of items) {
            let nameText = await item.findElement(inventoryItem).getText();
            itemNames.push(nameText);
        }

        // We copy the items and manually sort them from A to Z and then we reverse it
        let sortedNames = [...itemNames].sort().reverse();

        assert.deepStrictEqual(itemNames, sortedNames, "Not properly sorted from Z to A");
    });

    it("Filtering by price, low to high", async () => {
        await driver.findElement(filterDropdown).click()
        let optionElement = await driver.findElement(By.css('option[value="lohi"]'));
        await optionElement.click();

        let items = await driver.findElements(inventoryItems);

        let itemPrices = [];
        for (let item of items) {
            let priceText = await item.findElement(inventoryItemPrice).getText();
            itemPrices.push(priceText);
        };

        let sortedPrices = [...itemPrices].sort(function(a, b){return a-b})
        assert.deepStrictEqual(itemPrices, sortedPrices, "Not properly sorted from low to high");
    });

    it("Filtering by price, high to low", async () => {
        await driver.findElement(filterDropdown).click()
        let optionElement = await driver.findElement(By.css('option[value="hilo"]'));
        await optionElement.click();

        let items = await driver.findElements(inventoryItems);

        let itemPrices = [];
        for (let item of items) {
            let priceText = await item.findElement(inventoryItemPrice).getText();
            itemPrices.push(priceText);
        };

        let sortedPrices = [...itemPrices].sort(function(a, b){return b-a})
        assert.deepStrictEqual(itemPrices, sortedPrices, "Not properly sorted from low to high");
    })
})