const { Builder } = require('selenium-webdriver');

const assert = require("assert")
//Basic info
const visitPage = "https://www.saucedemo.com/"
const homePage = 'https://www.saucedemo.com/inventory.html'

const loginUsername  = "standard_user"
const loginPassword = "secret_sauce"

const firstName = "Petar"
const lastName = "Peric"
const zipCode = "35000"

//elements
const usernameInput = {id: "user-name"}
const passwordInput = {id: "password"}
const logInBtn = {id: "login-button"}
const backpackBtn = {id: "add-to-cart-sauce-labs-backpack"}
const shoppingCart = {id: "shopping_cart_container"}
const checkoutBtn = {id: "checkout"}
const firstNameInput = {id: "first-name"}
const lastNameInput = {id: "last-name"}
const zipCodeInput = {id: "postal-code"}
const finishBtn = {id: "finish"}
const homeBtn = {id: "back-to-products"}
const continueBtn = {id:"continue"}

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
        //logovanje
        await driver.findElement(usernameInput).sendKeys(loginUsername);
        await driver.findElement(passwordInput).sendKeys(loginPassword);
        await driver.findElement(logInBtn).click()
        await driver.sleep(2000)

        //dodavanje u korpu i checkout
        await driver.findElement(backpackBtn).click()
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
        assert.strictEqual(currentUrl, homePage, 'URL nije tačan');
    });
})