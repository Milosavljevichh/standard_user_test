//testiramo da li radi proces porudzbine za svaki item
const { Builder, By } = require('selenium-webdriver');

const assert = require("assert")
//Basic info
const visitPage = "https://www.saucedemo.com/"
const homePage = 'https://www.saucedemo.com/inventory.html'

const loginUsername  = "standard_user"
const wrongLoginUsername  = "standarduser"
const loginPassword = "secret_sauce"
const wrongLoginPassword = "secretsauce"

//elements
const usernameInput = {id: "user-name"}
const passwordInput = {id: "password"}
const logInBtn = {id: "login-button"}
const errorMessage = {class: "error-message-container"}

describe("Test neuspesnog logina", function(){
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

    it("Logovanje s praznim inputom", async()=>{
        await driver.findElement(logInBtn).click()
    
        assert.ok(errorMessage, "Element sa porukom o gresci ne postoji");

        const errorMessageElement = await driver.findElement(By.css(".error-message-container"));
        
        // Proverava da li element sadrži tačan tekst poruke o grešci
        const errorMessageText = await errorMessageElement.getText();
        assert.strictEqual(errorMessageText, "Epic sadface: Username is required");
        
    });
    
    it("Logovanje s pogresnim username-om", async()=>{
        
        await driver.findElement(usernameInput).sendKeys(wrongLoginUsername);
        await driver.findElement(passwordInput).sendKeys(loginPassword);
        await driver.findElement(logInBtn).click()

        const errorMessageElement = await driver.findElement(By.css(".error-message-container"));

        // Proverava da li element sadrži tačan tekst poruke o grešci
        const errorMessageText = await errorMessageElement.getText();
        assert.strictEqual(errorMessageText, "Epic sadface: Username and password do not match any user in this service");
    });

    it("Logovanje s pogresnim passwordom", async()=>{
        
        await driver.findElement(usernameInput).sendKeys(loginUsername);
        await driver.findElement(passwordInput).sendKeys(wrongLoginPassword);
        await driver.findElement(logInBtn).click()

        const errorMessageElement = await driver.findElement(By.css(".error-message-container"));

        // Proverava da li element sadrži tačan tekst poruke o grešci
        const errorMessageText = await errorMessageElement.getText();
        assert.strictEqual(errorMessageText, "Epic sadface: Username and password do not match any user in this service");
    });

    it("Logovanje samo s usernameom", async()=>{
        
        await driver.findElement(usernameInput).sendKeys(loginUsername);
        await driver.findElement(logInBtn).click()

        const errorMessageElement = await driver.findElement(By.css(".error-message-container"));

        // Proverava da li element sadrži tačan tekst poruke o grešci
        const errorMessageText = await errorMessageElement.getText();
        assert.strictEqual(errorMessageText, "Epic sadface: Password is required");
    });

    it.only("Logovanje samo s passwordom", async()=>{
        
        await driver.findElement(passwordInput).sendKeys(loginPassword);
        await driver.findElement(logInBtn).click()
    
        const errorMessageElement = await driver.findElement(By.css(".error-message-container"));
    
        // Proverava da li element sadrži tačan tekst poruke o grešci
        const errorMessageText = await errorMessageElement.getText();
        assert.strictEqual(errorMessageText, "Epic sadface: Username is required");
    });
})