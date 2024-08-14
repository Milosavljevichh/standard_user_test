const { Builder } = require('selenium-webdriver');

const assert = require("assert")
//Basic info
const visitPage = "https://www.saucedemo.com/"
const loginUsername  = "standard_user"
const loginPassword = "secret_sauce"

//inputs
const usernameInput = {id: "user-name"}
const passwordInput = {id: "password"}
const logInBtn = {id: "login-button"}

describe("Testovi za standard_usera", function(){
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

    
    it("Proces narudzbine", async () => {
        await driver.findElement(usernameInput).sendKeys(loginUsername);
        await driver.findElement(passwordInput).sendKeys(loginPassword);
        await driver.findElement(logInBtn).click()
        // Dobijanje trenutnog URL-a
        const currentUrl = await driver.getCurrentUrl();

        // Provera da li je URL onaj koji očekujemo
        assert.strictEqual(currentUrl, 'https://www.saucedemo.com/inventory.html', 'URL nije tačan');
    });
})