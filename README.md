
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
     SAUCEDEMO_URL=https://www.saucedemo.com/
     SAUCEDEMO_USERNAME=standard_user
     SAUCEDEMO_PASSWORD=secret_sauce
     ```

## Test Scenarios

The following test scenarios are covered:

1. **Login as Standard User**
   - Verifies that a standard user can successfully log in.
  
2. **Add Items to Cart**
   - Verifies that items can be added to the cart.

3. **Proceed to Checkout**
   - Verifies that the user can proceed to the checkout page.
  
4. **Complete the Order**
   - Verifies that the user can successfully complete an order.

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
