
//Basic info
const visitPage = "https://www.saucedemo.com/"
const homePage = 'https://www.saucedemo.com/inventory.html'

const loginUsername  = "standard_user"
const wrongLoginUsername  = "standarduser"
const loginPassword = "secret_sauce"
const wrongLoginPassword = "secretsauce"

const firstName = "Petar"
const lastName = "Peric"
const zipCode = "35000"

//elements
const usernameInput = {id: "user-name"}
const passwordInput = {id: "password"}
const logInBtn = {id: "login-button"}
const errorMessage = {class: "error-message-container"}
const shoppingCart = {id: "shopping_cart_container"}
const checkoutBtn = {id: "checkout"}
const firstNameInput = {id: "first-name"}
const lastNameInput = {id: "last-name"}
const zipCodeInput = {id: "postal-code"}
const finishBtn = {id: "finish"}
const homeBtn = {id: "back-to-products"}
const continueBtn = {id:"continue"}
const filterDropdown = {className: "product_sort_container"}
//items
const backpackBtn = {id: "add-to-cart-sauce-labs-backpack"}
const bikeLight = {id:"add-to-cart-sauce-labs-bike-light"}
const boltShirt = {id:"add-to-cart-sauce-labs-bolt-t-shirt"}
const jacket = {id:"add-to-cart-sauce-labs-fleece-jacket"}
const onesie = {id:"add-to-cart-sauce-labs-onesie"}
const redShirt = {id:"add-to-cart-test.allthethings()-t-shirt-(red)"}
const inventoryItems = {className: "inventory_item"}
const inventoryItem = {className: "inventory_item_name"}
const inventoryItemPrice = {className: "inventory_item_price"}

const toCartBtns = [
    backpackBtn,
    bikeLight,
    boltShirt,
    jacket,
    onesie,
    redShirt
]

const navigationLinks = [
    {id:{id: "item_4_title_link"}, expectedLink: "https://www.saucedemo.com/inventory-item.html?id=4"},
    {id:{id: "item_0_title_link"}, expectedLink: "https://www.saucedemo.com/inventory-item.html?id=0"},
    {id:{id: "item_1_title_link"}, expectedLink: "https://www.saucedemo.com/inventory-item.html?id=1"},
    {id:{id:"item_5_title_link"}, expectedLink:"https://www.saucedemo.com/inventory-item.html?id=5"},
    {id:{id:"item_2_title_link"}, expectedLink:"https://www.saucedemo.com/inventory-item.html?id=2"},
    {id:{id:"item_3_title_link"}, expectedLink:"https://www.saucedemo.com/inventory-item.html?id=3"}
]

const productImgAlts = [
    "Sauce Labs Backpack",
    "Sauce Labs Bike Light",
    "Sauce Labs Bolt T-Shirt",
    "Sauce Labs Fleece Jacket",
    "Sauce Labs Onesie",
    "Test.allTheThings() T-Shirt (Red)"
]

module.exports = {
    visitPage,
    homePage,
    loginUsername,
    wrongLoginUsername,
    loginPassword,
    wrongLoginPassword,
    usernameInput,
    passwordInput,
    logInBtn,
    shoppingCart,
    checkoutBtn,
    firstName,
    lastName,
    zipCode,
    errorMessage,
    firstNameInput,
    lastNameInput,
    zipCodeInput,
    finishBtn,
    homeBtn,
    continueBtn,
    backpackBtn,
    bikeLight,
    boltShirt,
    jacket,
    onesie,
    redShirt,
    toCartBtns,
    filterDropdown,
    inventoryItems,
    inventoryItem,
    inventoryItemPrice,
    navigationLinks,productImgAlts
};