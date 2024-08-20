# Automated Tests for Order Process on SauceDemo

This repository contains automated tests for the order process on the [SauceDemo](https://www.saucedemo.com/) website. The tests are implemented using Mocha as the test framework and Selenium WebDriver for browser automation.

## Table of Contents

- [Installation](#installation)
- [Test Scenarios](#test-scenarios)
- [Running Tests](#running-tests)
- [Test Structure](#test-structure)
- [Reporting](#reporting)
- [Contributing](#contributing)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed on your computer
- Google Chrome or another WebDriver-compatible browser installed

### Project Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/saucedemo-automation.git
   cd saucedemo-automation
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Ensure you have the latest version of ChromeDriver:
   ```bash
   npm install chromedriver --save-dev
   ```

4. Configure environment variables (optional):
   - Create a `.env` file in the root directory and add the following:
     ```bash
     BROWSER='chrome'
     SAUCEDEMO_URL=https://www.saucedemo.com/
     ```

## Test Scenarios

The following test scenarios are covered:

1. **Login as Standard User**
   - **Objective**: Verify that a standard user can successfully log in with valid credentials.
   - **Steps**:
     - Navigate to the login page.
     - Enter the username and password.
     - Submit the login form.
     - Assert that the user is redirected to the inventory page.

2. **Add Items to Cart**
   - **Objective**: Verify that items can be successfully added to the shopping cart.
   - **Steps**:
     - Log in as a standard user.
     - Add multiple items to the cart.
     - Assert that the correct items appear in the cart icon.

3. **Proceed to Checkout**
   - **Objective**: Verify that the user can navigate to the checkout page after adding items to the cart.
   - **Steps**:
     - Add items to the cart.
     - Click on the cart icon and proceed to the checkout.
     - Assert that the user is redirected to the checkout information page.

4. **Complete the Order**
   - **Objective**: Verify that the user can successfully complete the checkout process.
   - **Steps**:
     - Enter valid information on the checkout page.
     - Review the order and complete the purchase.
     - Assert that the order confirmation page is displayed.

5. **Cart Display Validation**
   - **Objective**: Verify that the cart displays the correct number of items.
   - **Steps**:
     - Add various items to the cart.
     - Navigate to the cart page.
     - Assert that the cart displays all selected items with accurate details such as name, quantity, and price.

6. **Displayed Pictures Validation**
   - **Objective**: Ensure that all product images are correctly displayed on the inventory page.
   - **Steps**:
     - Log in and navigate to the inventory page.
     - Verify that each product has an associated image and that it loads correctly.

7. **Filtering Items**
   - **Objective**: Verify that the filtering feature works correctly for sorting products by name and price.
   - **Steps**:
     - Log in and navigate to the inventory page.
     - Apply various filter options (e.g., price low to high, name Z to A).
     - Assert that the items are sorted according to the selected criteria.

8. **Item Navigation**
   - **Objective**: Verify that the user can navigate to individual item pages and view detailed information.
   - **Steps**:
     - Click on a product name or image on the inventory page.
     - Assert that the user is redirected to the correct product detail page with all relevant information displayed.

9. **Logout Functionality**
   - **Objective**: Ensure that the user can successfully log out of the application.
   - **Steps**:
     - While logged in, click on the menu icon.
     - Select the logout option.
     - Assert that the user is redirected to the login page.

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

This command will execute all test cases in sequence.

## Test Structure

- **`test/`**: Contains all test files.

### Example Test File Structure

```bash
saucedemo-automation/
│
├── test/
│   ├── loginValidations.test.js
│   ├── orderProcess.test.js
│   ├── orderingEveryItem.test.js
│   ├── filtering.test.js
│   ├── displayedPictures.test.js
│   ├── itemNavigation.test.js
│   ├── cartDisplay.test.js
│   └── logout.test.js
│
└── .env
```

## Reporting

Test results will be displayed in the console after execution. For more detailed reporting, you can integrate Mocha with other reporting tools such as `mochawesome`.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
