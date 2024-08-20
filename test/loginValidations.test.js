
const { Builder, By } = require('selenium-webdriver');
const assert = require("assert");
require('dotenv').config();
const {
    visitPage,
    loginUsername,
    wrongLoginUsername,
    loginPassword,
    wrongLoginPassword,
    usernameInput,
    passwordInput,
    logInBtn,
    errorMessage
} = require('./constants');


describe("Login validations test", function(){
    this.timeout(10000)
    
    let driver;

    this.beforeEach(async () => {
        driver = new Builder().forBrowser(process.env.BROWSER).build();
        await driver.get(visitPage);
        await driver.manage().window().maximize();
    });

    this.afterEach(async () => {
      await driver.quit();
    });

    it("Login with empty input", async()=>{
        await driver.findElement(logInBtn).click()
    
        assert.ok(errorMessage, "Element sa porukom o gresci ne postoji");

        const errorMessageElement = await driver.findElement(By.css(".error-message-container"));
        
        // Proverava da li element sadrži tačan tekst poruke o grešci
        const errorMessageText = await errorMessageElement.getText();
        assert.strictEqual(errorMessageText, "Epic sadface: Username is required");
        
    });
    
    it("Login with wrong username", async()=>{
        
        await driver.findElement(usernameInput).sendKeys(wrongLoginUsername);
        await driver.findElement(passwordInput).sendKeys(loginPassword);
        await driver.findElement(logInBtn).click()

        const errorMessageElement = await driver.findElement(By.css(".error-message-container"));

        // Proverava da li element sadrži tačan tekst poruke o grešci
        const errorMessageText = await errorMessageElement.getText();
        assert.strictEqual(errorMessageText, "Epic sadface: Username and password do not match any user in this service");
    });

    it("Login with wrong password", async()=>{
        
        await driver.findElement(usernameInput).sendKeys(loginUsername);
        await driver.findElement(passwordInput).sendKeys(wrongLoginPassword);
        await driver.findElement(logInBtn).click()

        const errorMessageElement = await driver.findElement(By.css(".error-message-container"));

        // Proverava da li element sadrži tačan tekst poruke o grešci
        const errorMessageText = await errorMessageElement.getText();
        assert.strictEqual(errorMessageText, "Epic sadface: Username and password do not match any user in this service");
    });

    it("Login with only username", async()=>{
        
        await driver.findElement(usernameInput).sendKeys(loginUsername);
        await driver.findElement(logInBtn).click()

        const errorMessageElement = await driver.findElement(By.css(".error-message-container"));

        // Proverava da li element sadrži tačan tekst poruke o grešci
        const errorMessageText = await errorMessageElement.getText();
        assert.strictEqual(errorMessageText, "Epic sadface: Password is required");
    });

    it("Login only with password", async()=>{
        
        await driver.findElement(passwordInput).sendKeys(loginPassword);
        await driver.findElement(logInBtn).click()
    
        const errorMessageElement = await driver.findElement(By.css(".error-message-container"));
    
        // Proverava da li element sadrži tačan tekst poruke o grešci
        const errorMessageText = await errorMessageElement.getText();
        assert.strictEqual(errorMessageText, "Epic sadface: Username is required");
    });
})