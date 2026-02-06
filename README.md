# Saucedemo UI Automation

Saucedemo website automation using playwright.

Project URL: https://www.saucedemo.com/

Packages: @playwright/test, playwright, allure-playwright.

Requirements: Node.js 18 or higher, and Java 8 or higher is required to generate allure reports using allure-commanline.

## Author

- [@tomalgomes](https://github.com/tomalgomes)

## Documentation

To run this automation, the user needs to have Node.js 18 or higher, and Java 8 or higher in their machine.

This is a page object model-based test automation framework that I built using playwright with @playwright/test as the test runner.

The automation uses spec-based test execution with multiple user scenarios, with the ability to run the tests both individually and sequentially.

Allure reporter was used for generating test report and record screenshots and videos of any failure that might exist.

NOTE: For convenience, the automation runs each scenario in a single browser at a time. To run the scenarios in 3 browsers parallelly, open playwright.config.js, set workers = 3, and comment out lines 45 to 53.

## Run Locally

Clone the project.

```bash
  git clone https://github.com/tomalgomes/playwright-saucedemo-automation.git
```

Go to the project directory.

```bash
  cd playwright-saucedemo-automation
```

Install dependencies

```bash
  npm install
```

Run test for Scenario-1: Locked Out User login

```bash
  npm run locked
```

Run test for Scenario-2: Standard User purchase

```bash
  npm run standard
```

Run test for Scenario-3: Performance Glitch User purchase

```bash
  npm run glitch
```

Run all the scenarios sequentially

```bash
  npm run all
```

Get report

```bash
  npm run getReport
```

Clean previous report

```bash
  npm run cleanReport
```

## Demo

Scenario-1: Locked Out User login

URL: https://drive.google.com/file/d/1jHq2-5uMHxUHaf7Qn75x9MvWtEMm-zle/view?usp=sharing

Scenario-2: Standard User purchase

URL: https://drive.google.com/file/d/10X607RCkRKGY7oQignJRK0nztX__kTU2/view?usp=sharing

Scenario-3: Performance Glitch User purchase

URL: https://drive.google.com/file/d/1lsT9fFCxmz5W3hHM56bZA399O8Gaa1Ku/view?usp=sharing

All scenarios sequentially

URL: https://drive.google.com/file/d/1wLlAyLE-59ln1a6KxrXkMIQ-p7AQ8KfC/view?usp=sharing

Get allure report

URL: https://drive.google.com/file/d/1EFMNPal2UNoFFK1vz4nJdklyZUv_JHnw/view?usp=sharing
