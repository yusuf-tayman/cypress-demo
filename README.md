# Overview
This repository contains end-to-page tests for the Sauce Demo website using the Cypress test runner and the page object model (POM) design pattern. The tests use the cypress-dotenv plugin to load environment variables from a .env file.

##  Prerequisites

Node.js and npm (comes with Node.js) should be installed on your machine.
You should have a cypress.config.js file in the root directory of the project with the following variables:
username: the email address to use for login
password: the password to use for login
Installation
Clone this repository and navigate to the root directory:
```bash
git clone https://github.com/yusuf-tayman/cypress-demo.git
cd cypress-demo
```

##  Install the dependencies:
```bash
npm install
```
Running the tests
Start the Cypress test runner:
```bash
npx cypress open
```
In the Cypress test runner, click on the "login.spec.js" file in the list of tests.
The tests will run in the browser and the test runner will show the test results and any logged output.

##  Additional commands

To run the tests headlessly (i.e., in the command line without opening the Cypress test runner), use:
```bash
npx cypress run
```
To run the tests with code coverage, use:
```bash
npm run cy:coverage
```
The coverage report will be available in the coverage directory.

##  Writing tests
Follow the page object model (POM) design pattern to create page objects for the pages in the Sauce Demo website.

Write test functions that use the page objects to perform actions on the website and make assertions about the resulting page.

To use the environment variables in your tests, use the Cypress.env() function. For example:

```javascript
const username = Cypress.env('username');
const password = Cypress.env('password');
```

##  Debugging
To debug a test in the Cypress test runner, click on the "Debug" button in the test list.

To debug a test in the command line, you can use the debugger statement in your code. When the test runner hits this statement, it will pause execution and you can use the command line debugger.

##  Further reading

[Cypress documentation](https://docs.cypress.io/)
