# Web UI Automation with WebdriverIO, Mocha and Allure

The framework was tested against the Blaze Store website, which is an e-commerce demo website . 
## https://www.demoblaze.com/index.html.

The framework allows for automated testing of web applications using the following technologies:

* **JavaScript:** 
* **WebdriverIO:** A JavaScript library that facilitates the execution of web application tests.
* **Allure:** A test report generation tool.
* **Mocha:** A JavaScript test framework that supports BDD.

## Design patterns and methodology
**Page Object Model (POM)** was selected as the design pattern. This pattern helps to keep the test cases modular and easy to maintain. 

Mocha was selected for its support of **BDD**.

## Installation

To install the framework, follow these steps:

1. **Install Node.js.**
2. **Install the project dependencies:**

```jsx
npm install
```
## Running the tests

To run the tests, execute the following command:

```jsx
npm test
```

This will execute all the tests in the project.

## Generating Allure reports

To generate Allure reports, execute the following command:
```jsx
npm run allure
```
This will open a web server that will display the Allure reports.



